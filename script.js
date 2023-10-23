const word = "Apple pie is very delicous"
let reverseWord = ""
let longestWord = ""
let wordLength = ""

document.getElementById("original-string").innerHTML = word

//loop that decrements from the length of the word to get the reverse/
for(let i = word.length-1; i >= 0;i--){
  reverseWord += word[i]
}

document.getElementById("reverse-string").innerHTML = reverseWord

const stringArray = word.split(" ")

//loop that decrements from the length of the string array
for(let i = stringArray.length-1; i>=0;i--){
  //get current word length
  const currentLength = stringArray[i].length
  //check if the current word is the new longest word or not
  if(currentLength > wordLength){
    wordLength = currentLength
    longestWord = stringArray[i]
  }
}

document.getElementById("long-word").innerHTML = longestWord