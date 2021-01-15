// Chapter 1 (Changing Case)

// task1
// var username = prompt("Enter your name");
// username = username.toUpperCase();
// alert(username);

// task2
// var userinput = prompt("Enter your name");
// userinput = userinput[0].toUpperCase() + userinput.slice(1).toLowerCase();
// console.log(userinput);



// Chapter 2 (Strings: measuring length and extracting parts)

// task1
// var userMobile = prompt("Enter your favourite Mobile phone model");
// userMobile = userMobile.length;
// document.write("The length is: " + userMobile);

// task2
// var userName = prompt("Enter your name");
// var initialtotallength = userName.length;
// var finaltotallength = initialtotallength-1;
// var lastChar = userName.charAt(finaltotallength).toUpperCase();
// console.log(lastChar);



// Chapter 3 (Strings: Finding Segments)

// task1
// var countryname = "Pakistani";
// countryname = countryname.indexOf("n");
// document.write("The index no. of letter (n) is: " + country);

// task2
var userName = prompt("Enter your name");
















// task3
// var passage = "The quick brown fox jumps over the lazy dog";
// var passage = passage.toLowerCase();
// var counts = 0;
// var find = "the";
// for (var i = 0; i <= passage.length; i++) {
//   if (passage.slice(i, i + 3) === find) {
//     ++counts;
//     }
//  }
// document.write("The word " + find + " is "+ counts + " times in the paragragh.");



// Chapter 4 (Strings: finding a character at a location)

// task1
// var countryName = "Pakistani";
// var indexNo = countryName.charAt(3);
// document.write(indexNo + " is on the 3rd index. ");




// Chapter 5 (Strings: replacing characters)

// task1
// var cityName = "Hyderabad";
// var cityname = cityName.replace("Hyder" , "Islam");
// document.write("<h1>" + cityname + "</h1>");

// task2
// var para = "Ali and Sami are best friends. They play cricket and football together." ; 
// para = para.replace( /and/g , "&");
// document.write("<h1>" + para + "</h1>");



// Chapter 6 (Rounding numbers)

// task1 (a)
// var number = +prompt("Enter any Positive integar number");
// document.write(number);
// task1 (b)
// var number = +prompt("Enter any Positive integar number");
// number = Math.round(number);
// document.write(number);
// task1 (c)
// var number = +prompt("Enter any Positive integar number");
// number = Math.floor(number);
// document.write(number);
// task1 (d)
// var number = +prompt("Enter any Positive integar number");
// number = Math.ceil(number);
// document.write(number);

// task2 (a)
// var number = +prompt("Enter any Negative integar number");
// document.write(number);
// task2 (b)
// var number = +prompt("Enter any Negative integar number");
// number = Math.round(number);
// document.write(number);
// task2 (c)
// var number = +prompt("Enter any Negative integar number");
// number = Math.floor(number);
// document.write(number);
// task2 (d)
// var number = +prompt("Enter any Negative integar number");
// number = Math.ceil(number);
// document.write(number);



// Chapter 7 (Generating random numbers)

// task1
// var num = Math.round(Math.random() * 6);
// console.log(num);

// task2
// var flipCoin = Math.round(Math.random()*2);
// if(flipCoin === 1){
//     document.write("Head")
// }else{
//     document.write("Tails");
// }

// task3
// var randomNum = Math.round(Math.random()*10);
// var userNum = +prompt("Enter any number from 1 to 10");
// if(randomNum === userNum){
//     alert("Congratulations! you win");
// }else{
//     alert("Try again");
// }



// Chapter 8 (Converting strings to integers and decimals)

// task1
// var userWeight = prompt("Enter your weight");
// userWeight = Number(userWeight);
// console.log("Your weight is: " + userWeight + " kgs");



// Chapter 9 (Converting strings to numbers, numbers to strings)

// task1
// var str = "472";
// str = parseInt(str);
// document.write(str + " is a  " + typeof(str));

// task2
// var number = 35.36;
// number = number.toString().replace("." , "");
// document.write(number);



// Chapter 10 (Controlling the length of decimals)

// task1
// var percentage = 30 / 45 * 100;
// percentage = percentage.toFixed(2);
// document.write(percentage);




























































































































































































