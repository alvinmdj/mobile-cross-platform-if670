const calculateBtn = document.querySelector('#calc-btn')
const resetBtn = document.querySelector('#reset-btn')
const heightInput = document.querySelector('#height-input')
const weightInput = document.querySelector('#weight-input')
const calcResult = document.querySelector('#calc-result')
const catName = document.querySelector('#category')

const calculateBMI = () => {
  const enteredHeight = heightInput.value / 100 // tinggi dalam meter
  const enteredWeight = weightInput.value       // berat dalam kg
  let category = ''

  const bmi = enteredWeight / (enteredHeight * enteredHeight)
  console.log(bmi)

  if (!isNaN(bmi)) {
    if (bmi < 18.5) category = "Kurus"
    else if (bmi >= 18.5 && bmi <= 24.9) category = "Normal"
    else if (bmi >= 25 && bmi <= 29.9) category = "Gemuk"
    else category = "Obesitas"
    calcResult.textContent = bmi
    catName.textContent = category
  }
}

const resetInput = () => {
  heightInput.value = ''
  weightInput.value = ''
  calcResult.textContent = ''
  catName.textContent = ''
}

calculateBtn.addEventListener('click', calculateBMI)
resetBtn.addEventListener('click', resetInput)