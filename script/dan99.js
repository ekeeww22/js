const result1 = document.querySelector(".contents:nth-child(2) .result");
const result2 = document.querySelector(".contents:nth-child(3) .result");
const result3 = document.querySelector(".contents:nth-child(4) .result");
const result4 = document.querySelector(".contents:nth-child(5) .result");
const result5 = document.querySelector(".contents:nth-child(6) .result");
const result6 = document.querySelector(".contents:nth-child(7) .result");
const result7 = document.querySelector(".contents:nth-child(8) .result");
const result8 = document.querySelector(".contents:nth-child(9) .result");
const result9 = document.querySelector(".contents:nth-child(10) .result");
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

const dan2Calc = document.querySelector('#dan2_calc') // 2단고정 input
const calc = document.querySelector('#calc') // 계산식
const resultDan2 = document.querySelector('#result_dan2') // 결과 출력 input
const resultCalcBtn = document.querySelector('#resultbtn')
const resetCalcBtn = document.querySelector('#resetbtn')
console.log(dan2Calc, calc, resultDan2);
resultCalcBtn.addEventListener('click',function(){
    let first = Number(dan2Calc.value);
    let last = Number(calc.value);
    console.log(first, last, first*last);
    resultDan2.value = first*last
});
resetCalcBtn.addEventListener('click',function(){
    resultDan2.value = null;
    calc.value = null;
});