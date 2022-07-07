const removeFromArray = function(array, num, num2, num3, num4) {
    let index;
    for(let i =0; i<array.length;i++){
        if(array[i] === num || array[i] === num2 || array[i] === num3 || array[i] === num4){
            array.splice(i,1);
            i=-1
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
