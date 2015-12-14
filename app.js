
// mark_rothermal [5:08 PM]
// https://github.com/Rothermal/prime_group_js_01
//
// GitHub
// Rothermal/prime_group_js_01
// prime_group_js_01 - group project 1, eric scott anthony


// ----- December 10th -----
// rohran01 [8:02 AM]
// function fillArray(percent) {
//    array.push(percent + " percent");
//    array.push(Math.round((1 + percent * .01) * x[i][2]));
//    array.push(Math.round((percent * .01) * x[i][2]));
//  };
//
//
// ----- Today December 14th, 2015 -----
// rohran01 [2:01 PM]
// the client just called and they want to add pears to the menu
//
// new messages
// mark_rothermal [2:35 PM]
// added a JavaScript/JSON snippet
// /*
// For this challenge, you will be working with 4 commodities; Apples,
// Oranges, Bananas, and Grapes. Delicious, right?
// *When the application loads, you will need to have information
// *for each of the commodities, specifically the name and the ‘market price’ of each.
// *This information will need to be displayed in a meaningful way on the DOM.
// Every 15 seconds, the prices should change however, and with it,
// the listed price on the DOM. Specifically, the market price of each of the items should
// fluctuate up or down 50 cents (between 1 cent and 50 cents) with each 15 second interval.
// Any given fruit is not allowed to go below a cost of 50 cents, or above the cost of 9 dollars
// and 99 cents.
// ​
// *The information displayed for each of the fruit should have a
// *‘button like’ functionality where the user can interact with each
// *of the fruit displays.
// ​
// Available to the user is a ‘total cash’ and an inventory display
// that shows how much of each of the fruits they have purchased. Also in the user display,
// should be an ‘average purchased price’, which shows, on average, how much money they have spent
// on a given fruit in their inventory.
// ​
// Meaning that by clicking on the display for each of the fruits,
// allows the user to ‘buy’ one of the fruits, at market price, which will be deducted from the
// total cash. The user is not allowed to spend more than they have.
// ​
// The user will start with $100.
// ​
// Finally, style the whole experience with Bootstrap!
// ​
// Hard Mode
// ​
// Create a button below each of the Fruit buttons that allows the
// User to ‘sell’ one of their fruits of the same type at the current market price. This will also remove one from their inventory. The user should be not able to sell fruits they do not already own.
// ​
// Pro Mode
// ​
// Limit the application experience to five minutes. At the end, stop
// the price fluctuation, sell all of the fruits in their inventory at
// current market price, and then display the total money they earned
// from the experience.
// */
// ​
// // function randomNumber(min, max) {
// // 	return Math.floor(Math.random() * (1 + max - min) + min);
// // }
// // Status API Training Shop Blog About Pricing
// ​
var apple = {
	name:'apple',
	price: 2.00,
	quantity:0
};
​
var orange ={
	name: "oranges",
	price: 2.00,
	quantity:0
};
var banana ={
	name: "banana",
	price: 2.00,
	quantity:0
};
// var grape ={
// 	name:"grapes",
// 	price: 0.50,
// 	quantity:0
// };
var pear ={
    name:"pear",
    price: 2.00,
    quantity:0
};
​
var fruits = [apple,orange,banana,grape,pear];
var totalCash = 100;

while(totalCash > 0) {
  //run timer
    //call change price function
      //use random number function to return new price
      //call edit price function
    //listen for click on buttons
      //subtract from totalCash
      //if totalCash > 0, add to inventory
      //else alert "insufficient funds"
}

// $(document).ready(function() {
// 
//
// })

$("button").on("click", function() {
  console.log(randomNumber(-50,50));

})


function randomNumber(min, max) {
  var num;
  num = Math.floor(Math.random() * (1 + max - min) + min);
  return num;
};

randomNumber(-50,50);

// $(document).ready(function(){
// function appendDomCurrent(object){
// 	$("#fruit").append("<div></div>");
// 	var $el = $("#fruit").children().last();
//  	$el.data("price", object.price);
// 	$el.append("<p>" + object.name + "</p>");
// 	$el.append("<p>" + object.price + "</p>");
//   	$el.append("<p>" + object.quantity + "</p>");
//   console.log(fruits);
// 	$el.append("<button class='buyFruit'>BuyME!!!</button>");
// }
// for(var i = 0; i <fruits.length;i++)
// 	appendDomCurrent(fruits[i]);
//
// appendDomCurrent();
// 	// $(".fired").on('click',function(){
// 	// for(var i = 0; i<employeeArray.length;i++){
// 	// 	if(employeeArray[i].employeeIdNumber == $(this).parent().data().employeeIdNumber){
// 	// 	fired(employeeArray[i].employeeIdNumber);
// 	// 	}
// 	// }
// 	// $(this).parent().remove();
// 	});
// ​
// Add Comment Collapse
