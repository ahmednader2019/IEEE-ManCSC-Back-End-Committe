/* /* var num1 = "21",
  num2 = "20";
num3 = "2021"; */

/* console.log(num1 + num2);
console.log(typeof (num1 + num2));
console.log(`${num2}
${num1}`);
console.log() */

/*     This is An Assignment
console.log(
  '`I\'m  In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ with ++ \n  \\"""\\"""\n "" JavaScript""``'
);
 */

//console.log("_" + num1 + "_" + num3 + "_" + num3 + "_" + num3 + "_" + num2);

/* console.log(1000000);
console.log(1_000_000);
console.log(Math.pow(10, 6));
console.log(10 ** 6);
console.log(Math.floor(1000000.99999));
console.log(Math.pow(10, 3) * Math.pow(10, 3));
console.log(10e6); */
/* 
let myvar = "100.56789 Views";

console.log(parseInt(myvar));
let x = parseFloat(myvar);
console.log(x.toFixed(2)); */

/* let a = "ahmednaderkenan";

console.log(a.lastIndexOf("nader")); */
/* let a = "ahmed";

console.log(a.substr(0, 1));
console.log(a.substring(0, 1));
console.log(a[0]);
console.log(a.substring(-5, 1));
 */

/* let a = 200;

if (a < 10) document.write("00" + a);
else if (a > 10 && a < 100) document.write("0" + a);
else document.write(a); */

/* let a = 9,
  b = "9";

if (a == b) document.write("{a} is the same value as {b}");
else if (a == b && a !== b)
  document.write("{a} is the same value as {b} but not the same type");
else if (a != b && a !== b)
  document.write("{a} is not  the same value as {b} and  not the same type");
else if (a != b && typeof a == typeof b)
  document.write("{a} is not  the same value as {b} but  the same type"); */

/* let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 != num1 && num3 !== num1 && num3 !== num2)
  document.write(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  ); */

// Edit What You Want Here

/* let num1 = 14;
let num2 = -1;
let num3 = 14;
let num4 = 50;

// Condition 1

if (num1 > num2) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True\n");
} else {
  console.log("False\n");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True\n");
} else {
  console.log("False\n");
}
 */

/* let day = 6;
switch (day) {
  case 0:
  case 1:
  case 2:
    console.log(" NO Appointements Are Available today");
    break;
  case 3:
  case 6:
    console.log(" The Time Available is between 10 AM Till 5:00 PM");
    break;
  case 4:
    console.log(" The Time Available is between 10 AM Till 6:00 PM");
    break;
  case 5:
    console.log(" The Time Available is between 10 AM Till 7:00 PM");
    break;
  default:
    console.log("NOT A valid day ");
} */

/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop();
myFriends.shift();

console.log(myFriends);
 */
/* let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log(arrOne.concat(arrTwo).sort().reverse()); */

/* let needle = "hhhh";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) console.log("Yes");
else console.log("no");
 */

/* let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

let first = arr1.pop(),
  second = arr2.pop(),
  third = arr2.pop();
console.log(first + second + third);
 */
/* let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i + "\n");
  for (let j = 0; j < breaker - 1; j++)
    console.log("--" + breaker + "\n" + "--" + 4 + "\n");
    */
/* function showDetails(...variables) {
  let name, age, status;
  console.log(variables[0]);
  console.log(typeof variables[0]);
  console.log(variables[1]);
  console.log(typeof variables[1]);
  console.log(variables[2]);
  console.log(typeof variables[2]);
  for (let i = 0; i < variables.length; i++) {
    // console.log(variables[i]);
    //console.log(typeof variables[i]);
    if (typeof variables[i] === string) {
      name = variables[i];
    } else if (typeof variables[i] === number) age = variables[i];
    else if (typeof variables[i] === boolean) status = variables[i];
  }
  console.log(name + "\n");
  console.log(age + "\n");
  console.log(status + "\n");
}
showDetails("ahmed", 22, true); */
/* function sayHello(theName, theGender) {
  if (theGender == "male") theGender = "mr";
  else theGender = "ms";

  console.log(`Hello ${theGender} ${theName}`);
}

sayHello("mona", "female");
 */
/* function calculate(firstNum, secondNum, operation = "add") {
  if (secondNum == undefined) console.log("The second num is not found ");
  else if (operation == "add") return firstNum + secondNum;
  else if (operation == "subtract") return firstNum - secondNum;
  else if (operation == "multiply") return firstNum * secondNum;
}

//calculate(20); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600 */

/* function checkStatus(a, b, c) {
  let name, age, status;

  if (typeof a == number) age = a;
  else if (typeof a == string) name = a;
  else if (typeof a == boolean) age = a;
}
 */

/* function getDetails(zName, zAge, zCountry) {
  console.log(fullDetails());
  function namePattern(zName) {
    let substrings = zName.split(" ", 2);
    return substrings[0] + " " + substrings[1][0] + ".";
  }
  function ageWithMessage(zAge) {
    let substrings = zAge.split(" ", 1);
    return substrings[0];
  }
  function countryTwoLetters(zCountry) {
    let sub = zCountry.slice(0, 2);
    return sub.toUpperCase();
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
}
console.log(getDetails("Ahmed Nader", "22 Is My Age", "syria"));
 */
/* function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function */

/* let f = (_) => `Iam A Normal Function`;
console.log(f()); // Iam A Normal Function */

/* let x = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(x("https", "elzero", "org")); // https://www.elzero.org */

/* let myarr = [1, 2, 3, 4, 5];

let addself = myarr.map(function (element) {
  return element * element;
});
console.log(addself); */

/* let swappingCases = "elZERo";
let after = swappingCases
  .split("")
  .map(function (element) {
    if (element === element.toUpperCase()) return element.toLowerCase();
    else return element.toUpperCase();
  })
  .join("");
console.log(after); */

/* let invert = [1, -10, -20, 15, 100, -30];

let after = invert
  .map(function (element) {
    return element * -1;
  })
  .join();
console.log(after); */

/* let arr = [1, 2, 3, 4, 5];

let filter = arr.filter(function (element) {
  return !(element & 1);
});

console.log(filter); */

/* let sentence = "I Love Foood code Veryy much";

let smalletter = sentence
  .split(" ")
  .filter(function (element) {
    return element.length <= 4;
  })
  .join(" ");

console.log(smalletter); */
/* let ignoreNumbers = "Elz123er4o";
let res = 1;
let ign = ignoreNumbers
  .split("")
  .filter(function (element) {
    if (!Nan(parseInt(element))) {
      res = res * parseInt(element);
    }
    return res;
  })
  .join();

console.log(ign); */

/* let nums = [10, 8, 6, 4, 2, 0];

let sub = nums.reduce(function (acc, curr) {
  return acc - curr;
}, 90);

console.log(sub); */

/* let bigestWord = ["aaaaa", "bbb", "ccc", "dddddddd"];

let check = bigestWord.reduce(function (acc, curr) {
  return acc.length > curr.length ? acc : curr;
});

console.log(check); */
/* 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters = mix
  .map(function (element) {
    return isNaN(element) ? element : "";
  })
  .reduce(function (acc, curr) {
    return `${acc}${curr}`;
  });

console.log(letters); */

/* let myString = "EElllzzzzzzzeroo";
let myarr = myString.map(function (element) {
  return myString[element] === myString[element + 1] ? "" : myString[element];
});

console.log(myString); */
/* let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let myarr = numsAndStrings
  .filter(function (element) {
    return !isNaN(element) ? element : "";
  })
  .map(function (element) {
    return element * -1;
  });
console.log(myarr); */
/* 
let myvar = "age";
let user = {
  name: "ahmed",
  age: 22,
  "country of": "egypt",
};
console.log(user.name);
console.log(user.age);
console.log(user[myvar]); */
/* 
let user = {
  name: "ahmed",
  age: 22,
  addresses: {
    one: "Mahalla",
    second: {
      First: "Cairo",
      Second: "Alex",
    },
  },
};
let copyObj = Object.create(user);

console.log(copyObj.name);
console.log(copyObj.age); */
/* console.log(user.name);
console.log(user.age);
console.log(user.addresses.one);
console.log(user.addresses.second.First);
console.log(user.addresses.second.Second); */

/* let member = {
  name: "ahmed",
  age: 22,
  country: "Egypt",

  fullDetails: function () {
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
  },
};

console.log(member.fullDetails()); */

/* let user = new Object({
  age: 20,
});
console.log(user);

user.name = "ahmed";

user.sayHello = function () {
  return `Good Morning`;
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.sayHello()); */

/* let user = {
  age: 22,
  AgeInDays: function () {
    return this.age * 365;
  },
};
console.log(user);
console.log(user.age);
console.log(user.AgeInDays());

let CopyObj = Object.create(user);
CopyObj.age = 30;
console.log(CopyObj);
console.log(CopyObj.age);
console.log(CopyObj.AgeInDays()); */

/* let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};
let finalObject = Object.assign({}, { a: a }, threeNums, twoNums);
console.log(finalObject); */

/* let MyIdElement = document.getElementById("my-div");
let MyTagElements = document.getElementsByTagName("p");
let MyClassElements = document.getElementsByClassName("my-span");
let MyQuery = document.querySelectorAll(".my-span"); */
/* console.log(MyIdElement);
console.log(MyTagElements[0]);
MyTagElements[0].innerHTML = "Ahmed Nader";
console.log(MyClassElements); */
/* console.log(MyQuery); */

// console.log(document.forms[0].one.value); */

/* let MyElement = document.querySelector(".js");

console.log(MyElement.innerHTML);
console.log(MyElement.textContent);

MyElement.innerHTML = " Text from <span> main.js <span> File ";

document.images[0].src = "https://www.google.com";
document.images[0].alt = "alternate";
document.images[0].className = "pic"; */

let MyLink = document.querySelector(".link");

console.log(MyLink.getAttribute("class"));
console.log(MyLink.getAttribute("href"));

MyLink.setAttribute("href", "https://www.twitter.com");
