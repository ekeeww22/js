let userHeight = document.querySelector('#user_height');
let userWeight = document.querySelector('#user_weight');
const resultBtn = document.querySelector('#result_btn');
const resetBtn = document.querySelector('#reset_btn');
let result = document.querySelector('.result');
let nomal_w = 0;
console.log(userHeight, userWeight, resultBtn, resetBtn, result)
resultBtn.addEventListener('click',function(){
    nomal_w = (userHeight.value-100)*0.9;
    console.log(nomal_w);
    result.style.display = 'block';
    result.innerHTML = `적정 체중은 ${nomal_w}kg이며,  ${userWeight.value-nomal_w}kg 초과 되셨습니다.`
});
resetBtn.addEventListener('click',function(){
    result.innerHTML = null;
    userHeight.value = null;
    userWeight.value = null;
    result.style.display = 'none';
});
