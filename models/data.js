const mongoose = require('mongoose');
const gaussian = require('gaussian');
const SENSITIVITY = 1;

//schema
const mexicoSchema = mongoose.Schema({
    name: {
        type: String
    },
    income: {
        type: Number
    }
});

const Mexico = module.exports = mongoose.model('Mexico', mexicoSchema);

module.exports.getMaxIncome = () => {
    var noise = generateNoise(epsilon, delta);
    var maxIncome = ;
    return maxIncomeWithNoise = maxIncome + noise;
}

module.exports.getMinIncome = () => {
    var noise = generateNoise(epsilon, delta);
    var minIncome = ;
    return minIncomeWithNoise = minIncome + noise;
}

module.exports.getAverageIncome = () => {
    var noise = generateNoise(epsilon, delta);
    var averageIncome = ;
    return averageIncomeWithNoise = averageIncome + noise;
}

function generateNoise(epsilon, delta) {
    var variance = 2 * (Math.log(1.25)/delta) * Math.pow(SENSITIVITY/epsilon, 2);
    var noise = gaussian(0, variance);
    return noise;
}