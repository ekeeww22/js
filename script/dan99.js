let result1 = document.querySelector(".contents:nth-child(2) .result");
let result2 = document.querySelector(".contents:nth-child(3) .result");
let result3 = document.querySelector(".contents:nth-child(4) .result");
let result4 = document.querySelector(".contents:nth-child(5) .result");
let result5 = document.querySelector(".contents:nth-child(6) .result");
let result6 = document.querySelector(".contents:nth-child(7) .result");
let result7 = document.querySelector(".contents:nth-child(8) .result");
let result8 = document.querySelector(".contents:nth-child(9) .result");
let result9 = document.querySelector(".contents:nth-child(10) .result");
const dan2 = 2
const resultBtn = document.querySelector('#result_btn');
const resetBtn = document.querySelector('#reset_btn');
console.log(result1, result2, result3, result4, result5, result6, result7, result8, result9, resultBtn, resetBtn);
resultBtn.addEventListener('click',function(){
    result1.innerHTML = dan2*1;
    result2.innerHTML = dan2*2;
    result3.innerHTML = dan2*3;
    result4.innerHTML = dan2*4;
    result5.innerHTML = dan2*5;
    result6.innerHTML = dan2*6;
    result7.innerHTML = dan2*7;
    result8.innerHTML = dan2*8;
    result9.innerHTML = dan2*9;
});
resetBtn.addEventListener('click',function(){
    result1.innerHTML = null;
    result2.innerHTML = null;
    result3.innerHTML = null;
    result4.innerHTML = null;
    result5.innerHTML = null;
    result6.innerHTML = null;
    result7.innerHTML = null;
    result8.innerHTML = null;
    result9.innerHTML = null;
});