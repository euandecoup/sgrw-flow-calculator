const {gutterPipeCombos} = require('./reference')

function pitchAdjustmentConvertor(pitch) {
    let float = 0
    if (pitch === 30) {
        float = 1.29
    } else if (pitch === 45) {
        float = 1.5
    } else if (pitch === 60) {
        float = 1.87
    }
    return float
}

function effectiveRoofArea(length = 0, depth = 0, pav = 0) {
    if (typeof length !== 'number' || typeof depth !== 'number' || typeof pav !== 'number') {
        throw new Error('Arguments must be numbers')
    }
    const era = length * depth * pav
    return era 
}

function runOff(era) {
    const rov = era * 0.022
    return parseFloat(rov.toFixed(2))
}

function flowRate(rov, numOfOutlets) {
    if (typeof rov !== 'number' || typeof numOfOutlets !== 'number') {
        throw new Error('Arguments must be numbers')
    } else if (numOfOutlets === 0) {
        throw new Error('Minimum of 1 outlet required')
    }
    const flowRate = rov / numOfOutlets
    return parseFloat(flowRate.toFixed(2))
}

function capacityCheck(flowRateValue, guterProfile, pipeProfile) {
    if (!gutterPipeCombos[guterProfile] || !gutterPipeCombos[guterProfile][pipeProfile]) {
        throw new Error("Invalid gutter-pipe profile combination")
    }
    const maxFlowRate = gutterPipeCombos[guterProfile][pipeProfile].flowRate
    return flowRateValue <= maxFlowRate ? "Adequate Capacity" : "Inadequate Capacity"
}

const roofLength = 1;
const roofDepth = 1;
const roofPitch = 30;
const numOfOutlets = 2;

const era = effectiveRoofArea(roofLength, roofDepth, roofPitch)
const rov = runOff(era)
const flowRateValue = flowRate(rov, numOfOutlets)

console.log("Flow rate:", flowRateValue);

const gutterProfile = "4.5\" HR";
const pipeProfile = "76mm Ø";
const capacityStatus = capacityCheck(flowRateValue, gutterProfile, pipeProfile);

console.log("Capacity Status:", capacityStatus);

module.exports = {pitchAdjustmentConvertor, effectiveRoofArea, runOff, flowRate, capacityCheck};