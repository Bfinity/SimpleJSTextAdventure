
var storySectionObject;
function initGame(){
  updateStorySection("beginning");
  setButtonOnClick();
}

function updateStorySection(sectionToDisplay){
  var section = getStorySection(sectionToDisplay);
  setStorySection(section);
  setStorySectionFollowOption(section);
  setStorySectionUnfollowOption(section);
  setStorySectionSnapchatOption(section);
};

function setStorySection(storySection){
  var sectionText = getAdventureSelectionText(storySection);
  storySectionObject = storySection;
  document.getElementById("storySection").innerHTML = sectionText;
};

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
//  document.getElementById(id).addEventListener("click", onButtonClick);
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
