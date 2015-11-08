function standardDev(numberArray){

    var average = getAverage(numberArray);

    var differences = numberArray.map(function(value){
        var diff = value - average;
        return diff * diff;
    });

    return Math.sqrt(getAverage(differences));

}

function getAverage(numArray){

    var runningTotal = 0;

    for (var i = 0; i < numArray.length; i ++){
        runningTotal += numArray[i];
    }

    runningTotal /= numArray.length;
    return runningTotal;

}

Array.prototype.searchObjectArray = function(objectKey, searchTerm){

    for(var i = 0; i < this.length; i ++){
        if(this[i][objectKey] == searchTerm){
            return i;
        }
    }

    return -1;

};