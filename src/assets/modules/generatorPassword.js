const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const generatorLowercase = () => String.fromCharCode(rand(65, 91))
const generatorUpperCase = () => String.fromCharCode(rand(97, 123))
const generatorNumber = () => String.fromCharCode(rand(48, 58))
const simbol = ',.;~^[]!@#$%*()_+=-'
const generatorSimbol = () => simbol[rand(0,simbol.length)]

export default function generatorPassword(amount, lowercase, uppercase, numbers, simbol) { 
  const passwordsArray = []
  amount = Number(amount)
  for(let index = 0; index < amount; index++){
    uppercase && passwordsArray.push(generatorUpperCase())
    lowercase && passwordsArray.push(generatorLowercase())
    numbers && passwordsArray.push(generatorNumber())
    simbol && passwordsArray.push(generatorSimbol())
  }
  return passwordsArray.join('').slice(0, amount)
}