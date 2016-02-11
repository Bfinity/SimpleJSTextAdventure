
var beginning = {
"text" : "Your alarm clock wakes you up. You go into the kitchen and see it went off an hour too early. ",
"follow" : f1,
"unfollow" : u1,
"snapchat" : s1
};

var follow1 = {
"text" : "While making breakfast you see a bright light flash through the kitchen window.",
"follow" : f2,
"unfollow" : u2,
"snapchat" : s3
};

var unfollow1 = {
"text" : "You're sitting on the couch watching television when you start to smell burning coffee. You head into the kitchen and see your mom must have started the pot and forgotten. She might have fallen back to sleep since she's been so tired lately.",
"follow" : f3,
"unfollow" : u3,
"snapchat" : s3
};

var follow2 = {
"text" : "You go out through the side door. While looking up at the vanishing light in the sky you trip over a house shoe abandoned in the driveway. You realize it's one of your mom's.",
"follow" : f4,
"unfollow" : u3,
"snapchat" : s4
};

var follow2a = {
"text" : "You go into your mom's room to check on her. The room is empty and her bed is messed up. You notice a bright light in the distance through her window.",
"follow" : f2,
"unfollow" : u3,
"snapchat" : f5
};

var unfollow2 = {
"text" : "After you're done getting dressed you realize that your mother still hasn't woken up.",
"follow" : f3,
"unfollow" : u4,
"snapchat" : s6
};

var follow3 = {
"text" : "You follow the light for many blocks until you arrive at a derelict building. You notice the door is cracked open.",
"follow" : f5,
"unfollow" : u5,
"snapchat" : s7
};

var unfollow3 = {
"text" : "On your way to the bus stop you notice your mom's slipper in the middle of the drive way.",
"follow" : f4,
"unfollow" : u6,
"snapchat" : f4
};

var follow4 = {
"text" : " Inside it's pretty dark. You can make out dim outlines of piles of stuff. You hear a crash upstairs.",
"follow" : f6,
"unfollow" : u5,
"snapchat" : s8
};

var unfollow4 = {
"text" : "You get to school and one of your friends tell you they saw a light in the sky. They're about to see if they can find the cause before first hour to go check it out. You're invited to tag along.",
"follow" : f7,
"unfollow" : u7,
"snapchat" : s9
};

var follow5 = {
"text" : "You creep up the stairs. Listening to what sounds like someone tearing apart the building. When you get to the landing you see a masked woman dressed up in a superhero costume fighting a 6 foot tall robot. In the moment the woman was distracted by your arrival the robot grabbed her and tossed her across the room. It headed towards you, creaking and leaking oil. Just as it was close enough to grab you the woman jumped up and with a single kick broke it in two. She tells you to leave.",
"follow" : f8,
"unfollow" : u8,
"snapchat" : s10
};

var unfollow5a = {
"text" : "You get to first hour and your friend rushes in. She tells you this crazy story about seeing your mom fighting a robot in a warehouse down the street. ",
"follow" : f9,
"unfollow" : u9,
"snapchat" : s11
};

var follow6 = {
"text" : "The superhero kicked the robot and sighed. She pulled off her mask. It's your mom!",
"follow" : f10,
"unfollow" : u10,
"snapchat" : s10
};

var follow6a = {
"text" : "She shows you a picture of your mom in a superhero costume beside a pile of robot parts.",
"follow" : f11,
"unfollow" : u11,
"snapchat" : s10
};

var unfollow5b = {
"text" : "You arrive at first hour completely out of breath but alive. Your friend asks you if you saw that flash of light this morning. She tells you she heard it was Flight, a superhero, flying to destroy a robot that escaped from a near by military testing installation. No one knows the superhero's true identity but thank goodness she managed to bring down that robot because it had been programmed for destruction. Your friend says no one believes her. I mean, it is a crazy story right?",
"follow" : e,
"unfollow" : e,
"snapchat" : e
};

var follow7 = {
"text" : "Your mom is shocked that you've discovered her hero identity. She admits that she's been fighting crime since you were a toddler. She had been born with the power of flight and super strength but never used it growing up. After you were born she decided that for your sake she had to do what she could to clean up the world for you. She really didn't think she it was going to take so long to put down one single robot or she would have left you a note so you wouldn't have worried. She swears you to secrecy. Not that anyone would believe such a crazy story anyway.",
"follow" : e,
"unfollow" : e,
"snapchat" : e
};

var unfollow5 = {
"text" : "You put the superhero tales out of your head and focus on your algebra test. You know your mom would have a super fit if you failed. You decide to call her after class to make sure she was okay. You're sure she is. It's not like she's exhausted from flying around beating up robot bad guys or anything.",
"follow" : e,
"unfollow" :e,
"snapchat" : e
};

function getAdventureSelectionText(selection){
  return selection.text;
};

function getAdventureSectionOption(selection, option){
  var option = selection[option];
  return option;
};

function getAdventureSectionFollowOption(selection){
  return getAdventureSectionOption(selection, "follow");
};

function getAdventureSectionUnfollowOption(selection){
  return getAdventureSectionOption(selection, "unfollow");
};

function getAdventureSectionSnapchatOption(selection){
  return getAdventureSectionOption(selection, "snapchat");
};
