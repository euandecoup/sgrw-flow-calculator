const checkButton = document.querySelector("button");
const gutterSelect = document.getElementById("gutterProfile");
const pipeSelect = document.getElementById("pipeProfile");
let gutterPipeCombos;
fetch("/api/gutter-pipe-combos")
  .then((response) => response.json())
  .then((gutterPipeCombos) => {
    for (const gutter in gutterPipeCombos) {
      const option = document.createElement("option");
      option.value = gutter;
      option.textContent = gutter;
      gutterSelect.appendChild(option);
    }
    updatePipeOptions();
  });

gutterSelect.addEventListener("change", updatePipeOptions);

function updatePipeOptions() {
  pipeSelect.innerHTML = "";
  const selectedGutter = gutterSelect.value;
  fetch("/api/gutter-pipe-combos")
    .then((response) => response.json())
    .then((gutterPipeCombos) => {
      const pipes = gutterPipeCombos[selectedGutter];
      for (const pipe in pipes) {
        if (pipe !== "gutterDepth") {
          const option = document.createElement("option");
          option.value = pipe;
          option.textContent = pipe;
          pipeSelect.appendChild(option);
        }
      }
    });
}

function checkCapacity() {
  const roofLength = document.getElementById("roofLength").value;
  const roofDepth = document.getElementById("roofDepth").value;
  const roofPitch = document.getElementById("roofPitch").value;
  const numOfOutlets = document.getElementById("numOfOutlets").value;
  const gutterProfile = gutterSelect.value;
  const pipeProfile = pipeSelect.value;

  fetch(
    `/check-capacity?roofLength=${roofLength}&roofDepth=${roofDepth}&roofPitch=${roofPitch}&numOfOutlets=${numOfOutlets}&gutterProfile=${gutterProfile}&pipeProfile=${pipeProfile}`
  )
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("result");
      if (data.error) {
        resultDiv.textContent = `Error: ${data.error}`;
        checkButton.classList.remove("inadequate");
      } else {
        resultDiv.textContent = `Capacity Status: ${data.capacityStatus}`;
        if (data.capacityStatus === "Inadequate Capacity") {
          checkButton.classList.add("inadequate");
        } else {
          checkButton.classList.remove("inadequate");
        }
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      checkButton.classList.remove("inadequate");
    });
}
