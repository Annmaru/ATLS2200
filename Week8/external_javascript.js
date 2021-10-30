
function ischecked1() {
  var checkBox1 = document.getElementById("task1");
  var text1 = document.getElementsByClassName("quote")[0];
  if (checkBox1.checked == true){
    text1.style.display = "block";
  } else {
      text1.style.display = "none";
  }
}

function ischecked2() {
  var checkBox2 = document.getElementById("task2");
  var text2 = document.getElementsByClassName("quote")[1];
  if (checkBox2.checked == true){
    text2.style.display = "block";
  } else {
      text2.style.display = "none";
  }
}

function ischecked3() {
  var checkBox3 = document.getElementById("task3");
  var text3 = document.getElementsByClassName("quote")[2];
  if (checkBox3.checked == true){
    text3.style.display = "block";
  } else {
      text3.style.display = "none";
  }
}

function ischecked4() {
  var checkBox4 = document.getElementById("task4");
  var text4 = document.getElementsByClassName("quote")[3];
  if (checkBox4.checked == true){
    text4.style.display = "block";
  } else {
      text4.style.display = "none";
  }
}

function ischecked5() {
  var checkBox5 = document.getElementById("task5");
  var text5 = document.getElementsByClassName("quote")[4];
  if (checkBox5.checked == true){
    text5.style.display = "block";
  } else {
      text5.style.display = "none";
  }
}

document.getElementById("sun").addEventListener("click", sun());

function sun(){
  document.getElementById("heading").innerHTML = "Sunday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Sleep in and relax";
  document.getElementsByClassName("tasks")[1].innerHTML = "Have brunch";
  document.getElementsByClassName("tasks")[2].innerHTML = "Complete class assignments due tomorrow";
  document.getElementsByClassName("tasks")[3].innerHTML = "Dinner time!";
  document.getElementsByClassName("tasks")[4].innerHTML = "Have yourself a snack";
  document.getElementById("image").src = "Assets/fox1.jpeg";

}

document.getElementById("mon").addEventListener("click", mon());

function mon(){
  document.getElementById("heading").innerHTML = "Monday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Alarm at 8:45 am";
  document.getElementsByClassName("tasks")[1].innerHTML = "Power walk to classes!";
  document.getElementsByClassName("tasks")[2].innerHTML = "Lunch time!";
  document.getElementsByClassName("tasks")[3].innerHTML = "Power walk #2 for the day";
  document.getElementsByClassName("tasks")[4].innerHTML = "Dinner time! Consider cooking something for the roomies!";
  document.getElementById("image").src = "Assets/fox2.jpeg";

}

document.getElementById("tues").addEventListener("click", tues());

function tues(){
  document.getElementById("heading").innerHTML = "Tuesday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Ease into the day";
  document.getElementsByClassName("tasks")[1].innerHTML = "Zoom classes are go!";
  document.getElementsByClassName("tasks")[2].innerHTML = "Lunch time!";
  document.getElementsByClassName("tasks")[3].innerHTML = "Dish day!";
  document.getElementsByClassName("tasks")[4].innerHTML = "Have yourself a snack";
  document.getElementById("image").src = "Assets/fox3.jpeg";

}

document.getElementById("wed").addEventListener("click", wed());

function wed(){
  document.getElementById("heading").innerHTML = "Wednesday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Alarm at 8:45 am";
  document.getElementsByClassName("tasks")[1].innerHTML = "Power walk to classes!";
  document.getElementsByClassName("tasks")[2].innerHTML = "Lunch time!";
  document.getElementsByClassName("tasks")[3].innerHTML = "Power walk #2 for the day";
  document.getElementsByClassName("tasks")[4].innerHTML = "Dinner time! Consider cooking something for the roomies!";
  document.getElementById("image").src = "Assets/fox4.jpeg";

}

document.getElementById("thurs").addEventListener("click", thurs());

function thurs(){
  document.getElementById("heading").innerHTML = "Thursday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Wake up at your own time";
  document.getElementsByClassName("tasks")[1].innerHTML = "Zoom class time then power walk to recitation!";
  document.getElementsByClassName("tasks")[2].innerHTML = "Lunch time!";
  document.getElementsByClassName("tasks")[3].innerHTML = "Dish day!";
  document.getElementsByClassName("tasks")[4].innerHTML = "Hangout session with the big sister at 7:00 pm!";
  document.getElementById("image").src = "Assets/fox5.jpeg";

}

document.getElementById("fri").addEventListener("click", fri());

function fri(){
  document.getElementById("heading").innerHTML = "Friday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Sleep in! Relax, it’s the weekend!";
  document.getElementsByClassName("tasks")[1].innerHTML = "Laundry day!";
  document.getElementsByClassName("tasks")[2].innerHTML = "Enjoy dinner with the family";
  document.getElementsByClassName("tasks")[3].innerHTML = "Hangout session with friends at 7:00 pm!";
  document.getElementsByClassName("tasks")[4].innerHTML = "Have yourself a snack";
  document.getElementById("image").src = "Assets/fox6.jpeg";

}

document.getElementById("sat").addEventListener("click", sat());

function sat(){
  document.getElementById("heading").innerHTML = "Saturday"
  document.getElementsByClassName("tasks")[0].innerHTML = "Beds are so nice, aren't they?";
  document.getElementsByClassName("tasks")[1].innerHTML = "Call the boyfriend";
  document.getElementsByClassName("tasks")[2].innerHTML = "D&D at 2 pm!";
  document.getElementsByClassName("tasks")[3].innerHTML = "It's chore day! Check the chore chart!";
  document.getElementsByClassName("tasks")[4].innerHTML = "Have yourself a snack";
  document.getElementById("image").src = "Assets/fox7.jpeg";

}
