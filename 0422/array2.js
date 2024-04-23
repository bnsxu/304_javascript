// 1차원 배열 : []
// index 0부터 시작
               // 0 1 2 3 4
var array = [1, 2, 3, 4, 5];
               // array.length도 가능
for (var i = 0; i < 5; i++) {
    console.log(array[i]);
}

 console.log('==========');

var array = [1, 2, 3, 4, 5];
console.log('길이는 : ' + array.length);
               // array.length도 가능
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

 console.log('==========');

 // 2 ~ 10 까지 출력
var array2 = [];
var init = 1;
for (var i = 0; i < 9; i++) {
    array2[i] = ++init;
    console.log(array2[i]);
}

//  다른방법
var array3=[2,3,4,5,6,7,8,9,10]
console.log('길이:'+array3.length);
for(var i=0; i<9; i++){
    console.log(array3[i]);
}

console.log('==========');

 // 2 ~ 10 까지 출력하고 합하기
 var array2 = [];
 var init = 1;
 var sum=0;
 for (var i = 0; i < 9; i++) {
     array2[i] = ++init;
     console.log(array2[i]);
     sum=sum+array2[i];
 }
 console.log('합 : ' + sum);

 console.log('==========');