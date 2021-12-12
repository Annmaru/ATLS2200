
document.getElementById("Home").addEventListener("click", Home);
  function Home(){
    if(document.GetElementById("im1").style.visibility == 'hidden'){
      document.getElementById("c1").innerHTML = "Allow me to introduce myself";
      document.getElementById("c2").innerHTML = "Hi.";
  } else {
      document.GetElementById("im1").style.visibility == 'hidden';
      document.getElementById("c1").innerHTML = "Allow me to introduce myself";
      document.getElementById("c2").innerHTML = "Hi.";
  }
}


document.getElementById("Digital").addEventListener("click", Digital);
function Digital(){
  if (document.getElementById("im1").style.visibility == 'hidden'){
    document.getElementById("im1").style.visibility == 'visible';
    document.getElementById("im1").src = "Jedi.png";
    document.getElementById("c1").innerHTML = "Here's my art piece";
    document.getElementById("c2").innerHTML = "testing how this is going";
  } else {
    document.getElementById("im1").src = "Assets/Jedi.png";
    document.getElementById("c1").innerHTML = "Here's my art piece";
    document.getElementById("c2").innerHTML = "testing how this is going";
  }
}

document.getElementById("Physical").addEventListener("click", Physical);
function Physical(){
  im1 = document.getElementById("im1");
  if (im1.display == false){
    im1.display == true;
    document.getElementById("im1").src = "Assets/Vbs_Group.png";
    document.getElementById("c1").innerHTML = "Here's my art piece";
    document.getElementById("c2").innerHTML = "testing how this is going";
  } else {
    document.getElementById("im1").src = "Assets/Vbs_Group.png";
    document.getElementById("c1").innerHTML = "Here's my art piece";
    document.getElementById("c2").innerHTML = "testing how this is going";
  }
}

document.getElementById("Resume").addEventListener("click", Resume);
function Resume(){
  function GotPDF(data)
  {
      var res = 'data:Assets/Resume.pdf' + Base64.encode(data);
      var win = window.open("", "My Resume", "width=1024,height=768,resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
      win.document.location.href = res;
  }
}

document.getElementById("Contact").addEventListener("click", Contact);

function Contact(){
  im1 = document.getElementById("im1");
  if (im1.display == true){
    im1.display == false;
    document.getElementById("c1").innerHTML = "here's my number";
    document.getElementById("c2").innerHTML = "Call me";
  } else {
    document.getElementById("c1").innerHTML = "here's my number";
    document.getElementById("c2").innerHTML = "Call me";
  }
}
