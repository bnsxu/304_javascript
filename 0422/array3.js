 // 1 ~ 10 합을 구하는데 짝수의 합, 홀수의 합
 // var array=0; one=0; two=0; for(var i=0; i<10; i++){if(array%2==0)}else{()}}

 var one = 0; // 홀수
 var two = 0; // 짝수
 var array = [];
 var init = 0; 
 var sum = 0;

 for(var i = 0; i < 10; i++){
    array[i] = ++init;
    sum=sum+array[i];

    if(array[i]%2==1){
        one = one + array[i]
        
    }else if(array[i]%2==0){
        two = two +array[i]
        
    }
 }

 console.log('홀수 합 : ' + one);
 console.log('짝수 합 : ' + two);