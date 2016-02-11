var storySectionObject;

function initGame(){
  // var beginning = getStorySection("beginning");
  // var beginningText = getAdventureSelectionText(beginning);
  // var followoption = getAdventureSelectionFollowOption(beginning);
  // var followoptiontext = getAdventureOptionText(followoption);
  // var unfollowoption = getAdventureSelectionUnfollowOption(beginning);
  // var unfollowoptiontext = getAdventureOptionText(unfollowoption);
  // var snapchatoption = getAdventureSelectionSnapchatOption(beginning);
  // var snapchatoptiontext = getAdventureOptionText(snapchatoption);
  // document.getElementById("storySection").innerHTML = beginningText;
  // document.getElementById("followText").innerHTML = followoptiontext;
  // document.getElementById("unfollowText").innerHTML = unfollowoptiontext;
  // document.getElementById("snapchatText").innerHTML = snapchatoptiontext;

  // var beginning = getStorySection("beginning");
  // setStorySection(beginning);
  // setStorySectionFollowOption(beginning);
  // setStorySectionUnfollowOption(beginning);
  // setStorySectionSnapchatOption(beginning);
  updateStorySection("beginning");
  console.log("initGame being hit");
};

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
  var followoption = getAdventureSectionFollowOption(storySection);
  var followoptiontext = getAdventureOptionText(followoption);
  document.getElementById("followText").innerHTML = followoptiontext;
};

function setStorySectionUnfollowOption(storySection){
  var unfollowoption = getAdventureSectionUnfollowOption(storySection);
  var unfollowoptiontext = getAdventureOptionText(unfollowoption);
  document.getElementById("unfollowText").innerHTML = unfollowoptiontext;
};

function setStorySectionSnapchatOption(storySection){
  var snapchatoption = getAdventureSectionSnapchatOption(storySection);
  var snapchatoptiontext = getAdventureOptionText(snapchatoption);
  document.getElementById("snapchatText").innerHTML = snapchatoptiontext;
};

function setButtonOnClick(id){
  document.getElementById(id).addEventListener("click", onButtonClick);
};

function onButtonClick(){
  var id = event.target.id;
  var sectionOption = getAdventureSectionOption(storySectionObject, id);
  var action = getAdentureOptionAction(sectionOption);
  if(action === "theEnd"){
    alert("The End!")
  }else{
  updateStorySection(action);
};
};
