
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
        else {
            printObj(myarr);
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

    document.getElementById('btnBuildDiv').addEventListener('click', function() {

        addADiv(superCounter.toString());
        ++superCounter;

    });

    function addADiv(content) {
        var parentDiv = document.querySelector(".divContainer");
        var newdiv = document.createElement("div");
        newdiv.className = "miNewDivClass";
//        newdiv.style.border = '1px solid black';
//        newdiv.style.height = '50px';
//        newdiv.style.width = '50px';
        newdiv.innerHTML = content;
//        newdiv.style.float = 'left';

        parentDiv.appendChild(newdiv);
    }

    document.querySelector('.divContainer').addEventListener('click',function(e){
//        console.log(e);
        if(e.target && e.target.className == 'miNewDivClass'){
            e.target.remove();
        }
     });

    document.getElementById('btnGetData').addEventListener('click', function() {
        var id = document.getElementById('idClient').value;
        fetch('/oneclient/'+id,{
                             credentials: 'include'
                            })
          .then(function(response) { return response.json(); })
          .then(function(myJson) {
//                var info =JSON.stringify(myJson);
                var info2 = "<div>ClientID</div><div>"+myJson.client_id+"</div>";
                info2 += "<div>Name</div><div>"+myJson.name+"</div>"
                info2 += "<div>Email</div><div>"+myJson.email+"</div>"
                info2 += "<div>City</div><div>"+myJson.city+"</div>"
                info2 += "<div>Birth Year</div><div>"+myJson.birth_year+"</div>"
                console.log(info2);
                addADiv(info2);

//            document.getElementById('movableText').value = JSON.stringify(myJson);

          });

    });

}();


