
var myprint = function(textToPrint) {
    console.log(textToPrint);
};
var myModule = function() {

    var myString = 'My value';
    console.log('Hi Larry !');
    myprint('Hey Eric');

    function myFunc() {
        console.log("I am in myFunc");
    };

    return {
        stuff : 'Some stuff',
        myNum : 42,
        myString,
        myFunc
    }

}();


var playModule = function() {
//    console.log('Play Module');
    var superCounter=0;

    function printArr(arr) {
        arr.forEach((value, index, self) => {
            console.log('Idx', index, 'Value', value);
        });
    }

    function printObj(obj) {
        for (const [key, value] of Object.entries(obj)) {
            console.log(`KEY: ${key}  Value: ${value}`);
        }
    }

    document.querySelector('#moveText').addEventListener('click', function() {
        var thetext = document.querySelector('#movableText').value;

        document.querySelector('.bottomdiv').textContent = thetext;

    });

    document.querySelector('#moveJson').addEventListener('click', function() {
        var myval = document.getElementById('movableText').value;
        var myarr = JSON.parse(myval);

        if (Array.isArray(myarr)) {

            document.querySelector('.leftdiv').textContent = 'Max: ' + myarr.reduce((max, x) => x > max?x:max);
            document.querySelector('.rightdiv').textContent = 'Min: ' + myarr.reduce((min, x) => x < min?x:min);
            printArr(myarr);
        }
    });

    document.querySelector('#printArray').addEventListener('click', function() {
        var myarray = [1, 3, 5, 6, 8, 11, 13];
        printArr(myarray);

    });

    document.querySelector('#printObj').addEventListener('click', function() {
        var myobject = { name: 'Eric',
                        lastname: 'Day',
                        age: 49,
                        city: 'Calgary',
                        job: 'FSD'};

        if (typeof myobject === 'object') {
            printObj(myobject);
        }
    });

    document.getElementById('divBuilder').addEventListener('click', function() {
        var parentDiv = document.querySelector(".divContainer");
        var newdiv = document.createElement("div");
        newdiv.className = "miNewDivClass";
        newdiv.style.border = '1px solid black';
        newdiv.style.height = '50px';
        newdiv.style.width = '50px';
        newdiv.textContent = superCounter.toString();
        newdiv.style.float = 'left';

        ++superCounter;
        parentDiv.appendChild(newdiv);
    });


    document.addEventListener('click',function(e){
        if(e.target && e.target.className == 'miNewDivClass'){
            e.target.remove();
        }
     });

    document.getElementById('getData').addEventListener('click', function() {

        console.log('Getting data');

        fetch('/oneclient/4',{
                             credentials: 'include'
                            })
//          .then(function(response) { return response; })
          .then(function(response) { return response.json(); })
          .then(function(myJson) {
//            console.log('Returning');
//            console.log('Got ', myJson);
//            console.log(JSON.stringify(myJson));
            document.getElementById('movableText').value = JSON.stringify(myJson);

          });

    });

}();


