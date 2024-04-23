const { init } = require("create-react-app/createReactApp");

console.log('===== array =====');

function oneArray1 (){
    
    // 1차원 배열
    var array = [1,2,3,4]
    
    for(var i = 0; i < 4; i++){

        console.log(array[i]);

    }
}
console.log(oneArray1());

console.log('==========');

function oneArray2 (){
    
    // 입력 받고 출력하기
    // []; 
    var array = [];
    var init = 0;

    for(var i = 0; i < 4; i++){
        array[i] = ++init; 
        console.log(array[i]);
    }
}
console.log(oneArray2());

console.log('===== return =====');

function Undefined(){

    //return : 어떤 타입을 보낸다(문자형, 정수형 등)
    console.log('print..');

    return "function 기본적으로 return 한다"
}
// F3 , ctrl+클릭으로 해당 함수로 이동
console.log(Undefined());

console.log('==========');

// 1 ~ 10 합을 구하시오. (return, sum)

function oneArray3 (){
    var array = [];
    var init = 0;
    var sum = 0;

    for(var i = 0;i < 10; i++){
       array[i] = ++init; 
       sum = sum + array[i]
       console.log(array[i]);
    }
    return sum;
}
console.log(oneArray3());