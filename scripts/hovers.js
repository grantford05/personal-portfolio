window.onload = function()
{
  init();
}

function init()
{
	var rightcontent = document.getElementById("rightcontent");
  var rightTitle = document.getElementById("rightTitle");
  var about = document.getElementById("about");
  var education = document.getElementById("education");
  var work = document.getElementById("work");
  var contact = document.getElementById("contact");
  var aboutContent = document.getElementById("aboutContent");
  var educationContent = document.getElementById("educationContent");
  var workContent = document.getElementById("workContent");
  var contactContent = document.getElementById("contactContent");
  aboutHover();
}

function resetColors()
{
  about.style.color = "#bdbdbd";
  about.style.borderColor = "#bdbdbd";
  education.style.color = "#bdbdbd";
  education.style.borderColor = "#bdbdbd";
  work.style.color = "#bdbdbd";
  work.style.borderColor = "#bdbdbd";
  contact.style.color = "#bdbdbd";
  contact.style.borderColor = "#bdbdbd";
}

function aboutHover()
{
  resetColors();
	rightTitle.innerHTML = "ABOUT";
  rightcontent.style.backgroundColor = "Orchid";
  about.style.color = "Orchid";
  about.style.borderColor = "Orchid";
  aboutContent.style.display = "block";
  educationContent.style.display = "none";
  workContent.style.display = "none";
  contactContent.style.display = "none";
}

function educationHover()
{
  resetColors();
  rightTitle.innerHTML = "EDUCATION";
  rightcontent.style.backgroundColor = "LightSeaGreen";
  education.style.color = "LightSeaGreen";
  education.style.borderColor = "LightSeaGreen";
  aboutContent.style.display = "none";
  educationContent.style.display = "block";
  workContent.style.display = "none";
  contactContent.style.display = "none";
}

function workHover()
{
  resetColors();
  rightTitle.innerHTML = "WORK";
  rightcontent.style.backgroundColor = "Tomato";
  work.style.color = "Tomato";
  work.style.borderColor = "Tomato";
  aboutContent.style.display = "none";
  educationContent.style.display = "none";
  workContent.style.display = "block";
  contactContent.style.display = "none";
}

function contactHover()
{
  resetColors();
  rightTitle.innerHTML = "CONTACT";
  rightcontent.style.backgroundColor = "CornflowerBlue ";
  contact.style.color = "CornflowerBlue ";
  contact.style.borderColor = "CornflowerBlue ";
  aboutContent.style.display = "none";
  educationContent.style.display = "none";
  workContent.style.display = "none";
  contactContent.style.display = "block";
}