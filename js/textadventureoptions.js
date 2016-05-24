
var f1 = {
"text" : "Stay up and make breakfast",
"action" : "follow1"
};

var u1 = {
"text" : "Stay up and chill out",
"action" : "unfollow1"
};

var s1 = {
"text" : "Go back to bed and take a snapchat of you catching more zzzs",
"action" : "beginning"
};

var f2 = {
"text" : "Go outside to investigate",
"action" : "follow3"
};

var u2 = {
"text" : "Finish making breakfast",
"action" : "unfollow1"
};

var s2 = {
"text" : "Grab your phone to snap a picture",
"action" : "beginning"
};

var f3 = {
"text" : "Head up stairs to check on her",
"action" : "follow2a"
};

var u3 = {
"text" : "Shrug it off and go get dressed",
"action" : "unfollow2"
};

var s3 = {
"text" : "Snapchat the picture of the blacken pot ",
"action" : "beginning"
};

var f4 = {
"text" : "Pick it up and follow the disappearing light",
"action" : "follow3"
};

var u4 = {
"text" : "Shrug it off. She must have been really tired and you've got to get to first hour",
"action" : "stay3"
};

var s4 = {
"text" : "Snapchat the abandoned shoe",
"action" : "beginning"
};

var f5 = {
"text" : "Go inside",
"action" : "follow4"
};

var u5 = {
"text" : "Turn around and head to school",
"action" : "unfollow3"
};

var s5 = {
"text" : "Snapchat the messy bed",
"action" : "beginning"
};

var f6 = {
"text" : "Go upstairs",
"action" : "follow5"
};

var u6 = {
"text" : "Shrug it off. You've got a test this morning",
"action" : "unfollow4"
};

var s6 = {
"text" : "Take a snapchat of your outfit",
"action" : "beginning"
};

var f7 = {
"text" : "You agree to go",
"action" : "follow3"
};

var u7 = {
"text" : "Not this time. You need the time to study",
"action" : "unfollow5"
};

var s7 = {
"text" : "Snapchat in front of the building",
"action" : "beginning"
};

var f8 = {
"text" : "Go. But hide in the stairwell so you can see who the hero is",
"action" : "follow6"
};

var u8 = {
"text" : "Go. You were almost killed! And you're already late for first hour",
"action" : "unfollow5b"
};

var s8 = {
"text" : "Snapchat the clutter",
"action" : "beginning"
};

var f9 = {
"text" : "Ask if she took a picture",
"action" : "follow6a"
};

var u9 = {
"text" : "Shrug her off. She's obviously messing with your head",
"action" : "unfollow5"
};

var s9 = {
"text" : "Take a snapchat of the two of you",
"action" : "beginning"
};

var f10 = {
"text" : "Rush back in to demand and explanation.",
"action" : "follow7"
};

var u10 = {
"text" : "Rush to school before the office's calls to report you missed first hour.",
"action" : "unfollow5b"
};

var s10 = {
"text" : "Snapchat a picture of your super mom.",
"action" : "beginning"
};

var f11 = {
"text" : "Call your mom and demand an explanation.",
"action" : "follow7"
};

var u11 = {
"text" : "Shrug it off for now and ask her to send you the picture. You'll definitely bring this up later.",
"action" : "unfollow5"
};

var s11 = {
"text" : "Snapchat the teacher.",
"action" : "beginning"
};

var end = {
  "text" : " ",
  "action" : "end"
}

function getAdventureOptionText(option){
  return option.text;
};

function getAdentureOptionAction(option){
  return option.action;
};
