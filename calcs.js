const { gutterPipeCombos } = require("./reference");

function pitchAdjustmentConvertor(pitch) {
  let float = 0;
  if (pitch === 30) {
    float = 1.29;
  } else if (pitch === 45) {
    float = 1.5;
  } else if (pitch === 60) {
    float = 1.87;
  }
  return float;
}

function effectiveRoofArea(length = 0, depth = 0, pav = 0) {
  if (
    typeof length !== "number" ||
    typeof depth !== "number" ||
    typeof pav !== "number"
  ) {
    throw new Error("Arguments must be numbers");
  }
  const era = length * depth * pav;
  return era;
}

function runOff(era) {
  const rov = era * 0.022;
  return parseFloat(rov.toFixed(2));
}

function flowRate(rov, numOfOutlets) {
  if (typeof rov !== "number" || typeof numOfOutlets !== "number") {
    throw new Error("Arguments must be numbers");
  } else if (numOfOutlets === 0) {
    throw new Error("Minimum of 1 outlet required");
  }
  const flowRate = rov / numOfOutlets;
  return parseFloat(flowRate.toFixed(2));
}

function capacityCheck(flowRateValue, gutterProfile, pipeProfile) {
  if (
    !gutterPipeCombos[gutterProfile] ||
    !gutterPipeCombos[gutterProfile][pipeProfile]
  ) {
    throw new Error("Invalid gutter-pipe profile combination");
  }
  const maxFlowRate = gutterPipeCombos[gutterProfile][pipeProfile].flowRate;
  return flowRateValue <= maxFlowRate
    ? "Adequate Capacity"
    : "Inadequate Capacity";
}

function halfDistanceBetweenOutlets(maxDistanceBetweenOutlets) {
  if (typeof maxDistanceBetweenOutlets !== "number") {
    throw new Error("Arguments must be numbers");
  }
  const halfDistanceLength = maxDistanceBetweenOutlets / 2;
  return parseFloat(halfDistanceLength.toFixed(2));
}

function lengthToDepth(halfDistanceLength, gutterProfile) {
  if (typeof halfDistanceLength !== "number") {
    throw new Error("Half-distance length must be a number");
  }
  if (!gutterPipeCombos[gutterProfile]) {
    throw new Error("Invalid gutter profile");
  }
  const lgd = halfDistanceLength / gutterPipeCombos[gutterProfile].gutterDepth;
  return parseFloat(lgd.toFixed(2));
}

function lgdReductionFactor(lgd) {
  if (typeof lgd != "number") {
    throw new Error("Invalid Lg/d - value must be a number");
  }

  if (lgd <= 50) {
    return 1;
  } else if (lgd > 50 && lgd <= 100) {
    return 0.93;
  } else if (lgd > 100 && lgd <= 150) {
    return 0.86;
  } else {
    return 0.8;
  }
}

function systemCapacityReductionCalc(gutterProfile, pipeProfile, lgdReductionFactorValue) {
    if (
        !gutterPipeCombos[gutterProfile] ||
        !gutterPipeCombos[gutterProfile][pipeProfile]
      ) {
        throw new Error("Invalid gutter-pipe profile combination");
      }
      const maxFlowRate = gutterPipeCombos[gutterProfile][pipeProfile].flowRate;
      const reducedCapacity = maxFlowRate * lgdReductionFactorValue; 
  return parseFloat(reducedCapacity.toFixed(2))
}

const roofLength = 1;
const roofDepth = 1;
const roofPitch = 30;
const numOfOutlets = 2;

const era = effectiveRoofArea(roofLength, roofDepth, roofPitch);
const rov = runOff(era);
const flowRateValue = flowRate(rov, numOfOutlets);

console.log("Flow rate:", flowRateValue);

const gutterProfile = '4.5" HR';
const pipeProfile = "76mm Ø";
const capacityStatus = capacityCheck(flowRateValue, gutterProfile, pipeProfile);

console.log("Capacity Status:", capacityStatus);

const maxDistanceBetweenOutlets = 7;
const halfDistanceLength = halfDistanceBetweenOutlets(
  maxDistanceBetweenOutlets
);

console.log("Half distance between outlets:", halfDistanceLength);

const lgd = lengthToDepth(halfDistanceLength, gutterProfile);

console.log("Lg/d:", lgd);

const lgdReductionFactorValue = lgdReductionFactor(lgd);

console.log("Reduction Factor:", lgdReductionFactorValue);

const systemCapacityReductionValue = systemCapacityReductionCalc(gutterProfile, pipeProfile, lgdReductionFactorValue)

console.log("System Capacity Reduction Value:", systemCapacityReductionValue);

module.exports = {
  pitchAdjustmentConvertor,
  effectiveRoofArea,
  runOff,
  flowRate,
  capacityCheck,
  halfDistanceBetweenOutlets,
  lengthToDepth,
  lgdReductionFactor,
  systemCapacityReductionCalc
};
