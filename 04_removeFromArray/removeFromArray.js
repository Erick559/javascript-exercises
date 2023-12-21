const removeFromArray = function(array, ...removedItems) {
    const newArray = [];
    for (let item of array) {
        if (!removedItems.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;