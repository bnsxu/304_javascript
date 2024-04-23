// 2차원 배열
function twoArray1(){

    // 2차원 배열은 [][]
    // 행: 가로
    // 열: 세로
    var array = [
                     // 0 1 2
                       [1,2,3],  // 0
                       [4,5,6],  // 1
                       [7,8,9]   // 2
                     ];
    // for 행
    for (var i = 0; i < 3; i++){

        // for 열
        for (var j = 0; j < 3; j++){
            console.log(array[i][j]);
        }
    }
}
console.log(twoArray1());

console.log('===== 2 =====');

// 1행 1,2,3, 2행 4,5,6 2차원 배열로 출력
// 1 ~ 6 합 구하시오

// 게시판 만들때 행, 열로 만든다 
function twoArray2(){
    var array = [[1,2,3],[4,5,6]];
    var sum = 0;

    for (var i = 0; i < 2; i++){
        
        for (var j = 0; j < 3; j++){
            sum = sum + array[i][j];
            console.log(array[i][j]);
        }

    }
    console.log(sum);
}
console.log(twoArray2());

console.log('===== 3 =====');

// 일반과제 : 1 ~ 12 짝수/홀수 총 합

function twoArray3 (){
    var array = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    var one = 0;
    var two = 0;
                    // i < array.length 사용가능
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 4; j++){

            if(array[i][j]%2==1){

                one = one + array[i][j];

            }else if(array[i][j]%2==0){

                two = two + array[i][j];
            }

        }
    }
    console.log('홀수 합 : ' + one);
    console.log('짝수 합 : ' + two);
    console.log('총 합 : ' + (one + two));
}
console.log(twoArray3());

console.log('===== 4 =====');

// javascript는  2차원배열이 없음
// 1 ~ 6 입력받고 출력

function twoArray4 (){
    var array = [];
    var init = 0;

    for(var i = 0; i < 2; i++){
        // 1차원 배열이라 =[]; 행으로 만든 후 열을 넣어준다
        // i = 행, []; 얼마나 들어갈지 모를 때
        array[i] = [];

        for(var j = 0; j < 3; j++){
            // =[]; 만들어진 행에 열이 들어간다
            array[i][j] = ++init;
        }
    }
    console.log(array);
}
console.log(twoArray4());

console.log('===== var / let =====');

function Varvalue(){

    // var : es5 2009, 변수명을 다시 선언할 수 있다
    // let : es6 2015, 다시 선언할 수 없다

    // es5
    var name = '아무개';
    var name = '홍길동';

    console.log(name);

    // es6
    let add = '미국';
    // let add = '미국'; // error

    console.log(add);
}
console.log(Varvalue());

console.log('===== 문제1 =====');

// 1 ~ 9 입/출력하기 1,2,3, 4,5,6, 7,8,9

function twoArray5 (){
    var array = [];
    var init = 0;

    for(var i = 0; i < 3; i++){
        array[i] = [];

        for(var j = 0; j < 3; j++){
            array[i][j] = ++init;
        }

    }
    console.log(array);
}
console.log(twoArray5());

console.log('===== 문제2 =====');

// [1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]
// 2차원배열로 입/출력+합구하기

function twoArray6 (){
    var array = [];
    var init = 0;
    var sum = 0;

    for(var i = 0; i < 3; i++){
        array[i] = [];

        for(var j = 0; j < 5; j++){
            array[i][j] = ++init;
            sum = sum + array[i][j];
        }
    }
    console.log(array);
    console.log('합 : ' + sum);
}
console.log(twoArray6());

// 짝수 합, 홀수 합

function twoArray7 (){
    var array = [];
    var init = 0;
    var sum = 0;
    var one = 0;
    var two = 0;

    for(var i = 0; i < 3; i++){
        array[i] = [];

        for(var j = 0; j < 5; j++){
            array[i][j] = ++init;

            if(array[i][j]%2==1){
                one = one + array[i][j];
            }else if(array[i][j]%2==0){
                two = two + array[i][j];
            }
        }
    }
    console.log(array);
    console.log('홀수 합 : ' + one);
    console.log('짝수 합 : ' + two);
    console.log('총 합 : ' + (one + two));
}
console.log(twoArray7());

// 홀수 합, 짝수 합, 총 합 구하기
// 1,2,3,4,5,6
// 7,8,9,10,11,12

console.log("===== 문제3 =====");

function twoArray8 (){
    var array = [];
    var init = 0;
    var sum = 0;
    var one = 0;
    var two = 0;

    for (var i = 0; i < 2; i++){
        array[i] = [];

        for (var j = 0; j <6; j++){
            array[i][j] = ++init;
            sum = sum + array[i][j];

            if(array[i][j]%2 == 1){
                one = one + array[i][j];

            }else if(array[i][j]%2 == 0){
                two = two + array[i][j];

            }
        }
    }
    console.log(array);
    console.log('총 합 : ' + sum);
    console.log('홀수 합 : ' + one);
    console.log('짝수 합 : ' + two);
}
console.log(twoArray8());