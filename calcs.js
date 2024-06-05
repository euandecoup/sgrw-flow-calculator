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
    return length * depth * pav
}

console.log(effectiveRoofArea(7, 8, 1.87));

module.exports = {pitchAdjustmentConvertor, effectiveRoofArea};