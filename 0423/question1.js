console.log('===== 일반과제 =====');

// question1.js 
// 함수이름: 본인이름
// 2 ~ 11 입/출력하여 합 구하고 return 하기

function Siu(){
    var array = [];
    var init = 1;
    var sum = 0;

    for(var i = 0; i < 10; i++){
        array[i] = ++init;
        sum = sum + array[i];
    }
    return sum;
}
console.log(Siu());