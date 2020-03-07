
const biggify = function(num){
  return num + 9000
}

const nasafy = function(array){
  let result = []
  let number = Number(array.toString())
  for (let i = number; i >= 1; i--)
  {result.push(i)}
  result.push('Blast off!')
  return result 
}
const reversify = function(string){
  return string.split('').reverse().join('')
}
const titleify = function(string){
  let result = ''
  for (let i = 0;i < string.length;i++){
    if (i === 0){
result += string[i].toUpperCase()
    }
    else if (string[i] === ' '){
      result += string[i]+ string[i+1].toUpperCase()
      i++
    }else{
      result += string[i].toLowerCase()
    }
  }
  return result
}
const crazify = function(str){
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = ''
  let counter = 1
    for (let i = 0; i < str.length ; i++ ){
      if(letters.includes(str[i])){counter++}
      if(counter % 2 !== 0){answer += str[i].toUpperCase()}
      if(counter % 2 === 0){answer += str[i].toLowerCase()}
  }
  return answer

}


if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
