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

console.log(pitchAdjustmentConvertor(45));

module.exports = {pitchAdjustmentConvertor};