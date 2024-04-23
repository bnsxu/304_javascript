

// function ex1()
// for 1 ~ 11 1차원 배열로 출력

// 1차원 배열 : [] / var oneArray = [1, 2, 3, 4, 5];


function oneArray(){

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    for (var i = 0; i < 11; i++){

    console.log(array[i]);
    }
}
console.log(oneArray);

//-------------------------------------------------

// 2 ~ 13 출력
function oneArray2 (){

    var array=[2,3,4,5,6,7,8,9,10,11,12,13];

    console.log('배열의 길이는' + array.length);

    for(var i=0; i <= array.length; i++){
        console.log(array.length);
    }
}
console.log(oneArray2);

//-------------------------------------------------

function oneArray3 () {

    //입력 받는데 어느정도 받는지 모를때 []
    var array = [];

    // 1 ~ 9
    var init = 0;
    for(var i = 0; i < 9; i++){
        array[i] = ++init;
        console.log(array[i]);
    }
}
console.log(oneArray3);

//-------------------------------------------------

// oneArray4 1 ~ 10 입력 출력

function oneArray4 () {
    var array = [];

    // 5 ~ 10입력 (5(index 0), 6(1), 7(2), 8(3), 9(4), 10(5))
    var init = 4;

     for (var i = 0; i < 6; i++){
        array[i] = ++init;
        console.log(array[i]);
     }
}
console.log(oneArray4);

//-------------------------------------------------

function oneArray5(){
    var array = [];

    // oneArray5 3 ~ 12 입력하고 출력
    var init = 2;
    for (var i=0; i<10; i++){
        array[i] = ++init;
        console.log(array[i]);
    }
}
console.log(oneArray5);

//-------------------------------------------------
console.log("==========");

// 1 ~ 10 합을 출력 var array[1,2,3,4,5,,,10];
// 1 ~ 10 입력하고 합을 출력 var array[];
// 일일문제

function sum() {
    var sum = 0;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);

    var sum2 = 0;
    var array2 = [];
    var init = 0;

    for (var i = 0; i < 10; i++) {
        array2[i] = ++init;
        sum2 = sum2 + array2[i];
        console.log(array2[i]);
    }
    console.log(sum2);
}

console.log(sum());