console.log("===== 일일문제 =====");
// 일일문제
// if(3, 7, 10)을 뺀 짝수 합,홀수 합, 총 합 구하기
// 1,2,3,4,5,6
// 7,8,9,10,11,12

//if(!(i==3||i==7||i==10))
//if(i !=3 && i !=7 && i !=10)

function twoArray() {
    var array = [];
    var init = 0;
    var one = 0;
    var two = 0;

    for (var i = 0; i < 2; i++) {
        array[i] = [];

        for (var j = 0; j < 6; j++) {
            array[i][j] = ++init;

            if (!(array[i][j] == 3 || array[i][j] == 7 || array[i][j] == 10)) {

                if (array[i][j] % 2 == 1) {
                    one = one + array[i][j];

                } else if (array[i][j] % 2 == 0) {
                    two = two + array[i][j];

                }
            }
        }
    }
    console.log(array);
    console.log('3, 7, 10 을 뺀 홀수 합 : ' + one);
    console.log('3, 7, 10 을 뺀 짝수 합 : ' + two);
    console.log('3, 7, 10 을 뺀 총 합 : ' + (one + two));
}
console.log(twoArray());