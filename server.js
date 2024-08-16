const express = require("express");
const path = require("path");
const { gutterPipeCombos } = require("./reference");
const {
  pitchAdjustmentConvertor,
  effectiveRoofArea,
  runOff,
  flowRate,
  capacityCheck,
  halfDistanceBetweenOutlets,
  lengthToDepth,
  lgdReductionFactor,
  systemCapacityReductionCalc,
  checkReducedCapacity,
} = require("./calcs");
const { log } = require("console");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/gutter-pipe-combos", (req, res) => {
    res.json(gutterPipeCombos)
})

app.get("/check-capacity", (req, res) => {
  const {
    roofLength,
    roofDepth,
    roofPitch,
    numOfOutlets,
    gutterProfile,
    pipeProfile,
  } = req.query;
  try {
    const pav = pitchAdjustmentConvertor(Number(roofPitch))
    const era = effectiveRoofArea(
      Number(roofLength),
      Number(roofDepth),
      pav
    );
    const rov = runOff(era);
    const flowRateValue = flowRate(rov, Number(numOfOutlets));
    const capacityStatus = capacityCheck(
      flowRateValue,
      gutterProfile,
      pipeProfile
    );
    res.json({ capacityStatus });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
