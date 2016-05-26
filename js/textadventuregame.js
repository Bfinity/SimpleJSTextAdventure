
var storySectionObject;
function initGame(){
  updateStorySection("beginning");
  setButtonOnClick();
  var name = prompt("What is your name?");
  document.getElementById("name").innerHTML = name;
}

function updateStorySection(sectionToDisplay){
  var section = getStorySection(sectionToDisplay);
  setStorySection(section);
  setStorySectionSubtitle(section);
  setStorySectionFollowOption(section);
  setStorySectionUnfollowOption(section);
  setStorySectionSnapchatOption(section);
};

function setStorySection(storySection){
  var sectionText = getAdventureSelectionText(storySection);
  storySectionObject = storySection;
  document.getElementById("storySection").innerHTML = sectionText;
  if(storySectionObject === follow6){
    console.log("worked");
    document.getElementById("image").src = "images/supermom.jpg";
  }
  else{
    document.getElementById("image").src = "";
  }
};

function setStorySectionSubtitle(storySection){
  var subtitleText = getAdventureSelectionSubtitle(storySection);
  document.getElementById("subtitle").innerHTML = subtitleText;
}

function setStorySectionFollowOption(storySection){
  var followoption = getAdventureSelectionFollowOption(storySection);
  var followoptiontext = getAdventureOptionText(followoption);
  document.getElementById("followText").innerHTML = followoptiontext;
};

function setStorySectionUnfollowOption(storySection){
  var unfollowoption = getAdventureSelectionUnfollowOption(storySection);
  var unfollowoptiontext = getAdventureOptionText(unfollowoption);
  document.getElementById("unfollowText").innerHTML = unfollowoptiontext;
};

function setStorySectionSnapchatOption(storySection){
  var snapchatoption = getAdventureSelectionSnapchatOption(storySection);
  var snapchatoptiontext = getAdventureOptionText(snapchatoption);
  document.getElementById("snapchatText").innerHTML = snapchatoptiontext;
};

function setButtonID(currentId, updatedId){
  document.getElementById(currentId).id = updatedId;
};

function setButtonOnClick(){
  var buttons = document.getElementsByClassName("button");
  console.log(buttons);
  console.log(buttons.length);
  for (var button in Array.from(buttons)){
    console.log(button);
    buttons[button].addEventListener("click", onButtonClick);
  };
};

function onButtonClick(){
  var id = event.target.id;
  var sectionOption = getAdventureSelectionOption(storySectionObject, id);
  var action = getAdentureOptionAction(sectionOption);
  if(action === "end"){
    alert("The End!")
  }else{
  updateStorySection(action);
};
};
