function capitalize(str) {
  const regex = /[a-z]/;
  let tempStr = str.split("");
  let capStr = "";
  for (let i = 0; i < tempStr.length; i++) {
    capStr = tempStr[i];
    if (regex.test(capStr)) {
      capStr = capStr.toUpperCase();
      tempStr.splice(i, 1, capStr);
      return tempStr.join("");
    }
  }
}

function reverseString(str) {
  let tempStr = str.split("");
  tempStr = tempStr.reverse();
  return tempStr.join("");
}

const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

function caesarCipher(str, rot = 13) {
  if (rot > -1) {
    rot -= 1;
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const alphabet2 = "abcdefghijklmnopqrstuvwxyz".split("");
  const regex = /[a-zA-Z]/;
  const regex1 = /[a-z]/;
  const regex2 = /[A-Z]/;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    if (!regex.test(currentLetter)) {
      newStr += currentLetter;
      continue;
    }
    let currentIndex;
    if (regex2.test(currentLetter)) {
      currentIndex = alphabet.indexOf(currentLetter);
    } else {
      currentIndex = alphabet2.indexOf(currentLetter);
    }
    let newIndex = currentIndex + rot;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    newStr += alphabet[newIndex];
  }
  newStr = newStr.split("");
  for (let i = 0; i < str.length; i++) {
    if (regex2.test(newStr[i]) && regex1.test(str[i])) {
      newStr.splice(i, 1, newStr[i].toLowerCase());
    }
  }
  return newStr.join("");
}

function analyzeArray(arr) {
  let averageValue = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    averageValue += arr[i];
    if (i + 1 === arrLength) {
      averageValue /= arrLength;
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  return {
    average: averageValue,
    min: arr[0],
    max: arr[arrLength - 1],
    length: arrLength,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
