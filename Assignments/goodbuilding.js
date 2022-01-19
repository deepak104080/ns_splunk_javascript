process.stdin.resume();
process.stdin.setEncoding('utf8');
var str = "";

process.stdin.on('data', function(chunk) {
    str += chunk;
});

//---------------------------

// console.log(str);
process.stdin.on('end', function() {
    var array = str.split('\n');
    var count = parseInt(array[0]);
    var actualArray = array[1].split(' ');
    //console.log(count);
    //console.log(actualArray);

    var newArray = actualArray.map((item) => parseInt(item));
    //console.log(newArray);

    // var finalArray = newArray.filter((a,b) => a-b>0);
    // finalArray.push(newArray[newArray.length - 1]);
    var finalArray = [];

    for (var i = 0; i < newArray.length; i++) {
        //console.log(newArray[i]);
        if (newArray[i] > newArray[i + 1]) {
            finalArray.push(newArray[i]);
        }
    }
    finalArray.push(newArray[newArray.length - 1]);

    //console.log(finalArray);
    console.log(finalArray.join(' '));







    /* this array can be used for further procerssing like
    handling no of test cases and the further cases for each of the test case.*/
})