/*Hide Navbar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
    document.getElementById("navbar").style.top = "0";
  }
  else{
    document.getElementById("navbar").style.top = "-100px";
  } 
  prevScrollpos = currentScrollPos;
}

/*Name and description of item in prompt window*/
const nama =
[["Kashu Maki","Sanju Maki","Sake & Uramaki","Teriyaki Tori Maki","Shinko Maki"],
["Sake Gunkan","Ebiko Gunkan","Sweet Tako Gunkan"],
["Kani Nigiri","Ebi Nigiri","Sake Nigiri"],
["O' Cha","Asahi Beer"]];
const description =
[["Two pieces of nigiri delight enhanced with delectable crab","Twelve maki roll with 3 different fillings","A set of Uramaki for family and friends",
  "Flavorful Teriyaki Chicken wrapped in sweet & vinegary sumeshi","Vegetarian delight crafted with Daikon (Giant Radish)"],
["Sushi rice wrapped with sea weed and topped by sake(salmon)","Clasical Gunkan covered in thousands of Ebiko",
  "Sunction cups and rich purple surface...the most authentic tako Gunkan"],
["Clasical Sushi with crab topping","Cooked shrimp with vinegared sushi rice","Award yourself with beautiful Salmon delicates"],
["A casual and refreshing Japanese beverage","Renowned Japanese beer, also the second famous drink to have with Sushi"]];

/*Display prompt window*/
function promptContent(clicked_id){
  var veilOrderWindow = document.getElementById("veilOrderWindow");
  
  veilOrderWindow.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == veilOrderWindow) {
      veilOrderWindow.style.display = "none";
      counter = 0;
    }
  }

  document.getElementById("output").innerHTML = `<img src="./Img/${clicked_id}.jpg" alt="SUSHI" width="70%">`;
  document.getElementById("output").innerHTML += `<p>${nama[clicked_id.at(-2) - 1][clicked_id.at(-1) - 1]}</p>`;
  document.getElementById("output").innerHTML += `<p class = "itemDescription">${description[clicked_id.at(-2) - 1][clicked_id.at(-1) - 1]}<p>`
  document.getElementById("output").innerHTML += "<span class = 'add' onClick ='itemNumber(1)'>&plus;</span>"
  document.getElementById("output").innerHTML += "<span class = 'minus' onClick='itemNumber(0)'>&minus;</span>"
  document.getElementById("output").innerHTML += `<div id="counting" class="counting">${counter}</div>`
  document.getElementById("output").innerHTML += "<button id='Order' onClick='addtoOrdered()'>Order</button>"
  
}

function addtoOrdered(clicked_id){
  var order = document.getElementById("Order");
  var veilOrderWindow = document.getElementById("veilOrderWindow");

  order.onclick = function(){
    if (counter > 0){
      document.getElementById("Ordered").innerHTML += `<li>${nama[clicked_id.at(-2) - 1][clicked_id.at(-1) - 1]} ..... ${counter}</li>`;
      counter = 0;
    }
    veilOrderWindow.style.display = "none";
  }
}

function callingBoth(clicked_id){
  promptContent(clicked_id)
  addtoOrdered(clicked_id)
}

function orderWindow(){
  var ordered = document.getElementById("Ordered");
  var veilOrderList = document.getElementById("veilOrderList");

  veilOrderList.style.display = ordered.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == veilOrderList) {
      counter = 0;
      veilOrderList.style.display = "none"
    }
  }
}

var counter = 0;

function itemNumber(para){
  if (para == "1"){
    counter += 1
  }
  else{
    if (counter > 0){
      counter = counter - 1
    }
  }
  document.getElementById("counting").innerHTML = `${counter}`
}

function SelectedPage(page){
  var takeOut = document.getElementById("takeOut")
  var booking = document.getElementById("booking")
  var takeOutButton = document.getElementById("takeOutButton")
  var bookingButton = document.getElementById("bookingButton")

  takeOutButton.style.display = bookingButton.style.display = "none"

  if (page == "takeOutButton"){
    takeOut.style.display = "block"
  }
  else if (page == "bookingButton"){
    booking.style.display = "block"
  }
  else{
    takeOut.style.display = booking.style.display = "none"
    takeOutButton.style.display = bookingButton.style.display = "inline-block"
  }
}