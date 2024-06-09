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

console.log(runOff(effectiveRoofArea(1, 1, pitchAdjustmentConvertor(30))));

module.exports = {pitchAdjustmentConvertor, effectiveRoofArea, runOff};