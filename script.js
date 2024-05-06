
// Initial party checklist
let partyChecklist = ["Music Playlist", "Snacks", "Decorations", "Games", "Invitations"];

console.log("Initial Party Checklist:", ... partyChecklist);

// Add 3 new items to the partyChecklist using a loop
let party = ["Gift" , "Cake" , "Candles"]
for (let i = 0; i < 3; i++){
  partyChecklist.push(party[i]);
}
console.log("push: " + partyChecklist);
// Remove 2 items from the partyChecklist using a loop
for (let j = 0; j < 2; j++) {
  partyChecklist.pop();
}
console.log("pop: " + partyChecklist)
// Sort the partyChecklist in alphabetical order using a loop
/* 
for (let i =0; i < partyChecklist.length; i++) {
  partyChecklist[i] = partyChecklist[i].toLocaleLowerCase();
}
partyChecklist.sort();
console.log([...partyChecklist]); 
^  cuz i forgot to capitalize the new variables before */

console.log("sort: " + partyChecklist.sort())
