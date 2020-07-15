import generatorPassword from './generatorPassword'

const $generatorPassword = document.querySelector('.generator-password')
const $amountCaracters = document.querySelector('.amount-caracters')
const $chkUppercase = document.querySelector('.chk-uppercase')
const $chkLowercase = document.querySelector('.chk-lowercase')
const $chkNumbers = document.querySelector('.chk-number')
const $chkSimbol = document.querySelector('.chk-simbol')
const $button = document.querySelector('button')

export default () => {
  $button.addEventListener('click', () => {
    $generatorPassword.innerHTML = generator()
  })
}


function generator(){
  const password = generatorPassword(
    $amountCaracters.value,
    $chkUppercase.checked,
    $chkLowercase.checked,
    $chkNumbers.checked,
    $chkSimbol.checked)
    return password || 'unknown'
}