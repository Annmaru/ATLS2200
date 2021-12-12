
document.getElementById("Home").addEventListener("click", Home);
  function Home(){
    document.getElementById("im1").src = "Assets/clouds.png";
      document.getElementById("c1").innerHTML = "Allow me to introduce myself";
      document.getElementById("c2").innerHTML = "Hi there! My name is Anna and I'm an avid traveler, passionate writer, and artist. My goal is to bring laughter and happiness to every household that watches my media. I hope I can do the same for you!";
}


document.getElementById("Digital").addEventListener("click", Digital);
function Digital(){
    document.getElementById("im1").src = "Assets/Jedi.png";
    document.getElementById("c1").innerHTML = "An example of my digital work:";
    document.getElementById("c2").innerHTML = "A Star Wars Jedi concept.";
}

document.getElementById("Physical").addEventListener("click", Physical);
function Physical(){
    document.getElementById("im1").src = "Assets/heart.png";
    document.getElementById("c1").innerHTML = "An example of my traditional work:";
    document.getElementById("c2").innerHTML = "Anatomy practice with the heart.";
}

document.getElementById("Exp").addEventListener("click", Experience);
function Experience(){
    document.getElementById("im1").src = "Assets/keyhole.png";
    document.getElementById("c1").innerHTML = "My work experience:";
    document.getElementById("c2").innerHTML = "I'm a self-taught artist with minimal art classes, but I am currently majoring in Media Production. Here is my <a href='Assets/Resume.pdf'>resume </a>";
}

document.getElementById("Contact").addEventListener("click", Contact);
function Contact(){
    document.getElementById("im1").src = "Assets/T-shirt-Design.png";
    document.getElementById("c1").innerHTML = "Here's how you can reach me:";
    document.getElementById("c2").innerHTML = "email is hawktail617@gmail.com";
}
