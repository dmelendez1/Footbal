"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  selectFootbalTeam();
  document.getElementById('teamInfoBtn').onclick = teamInfo
};



function selectFootbalTeam() {
  let select = document.getElementById(teamSelect);
  for (let team of teams) {
    
    let option = new Option(team.name, team.code);
    select.add(option);
  }
}


document.getElementById("showInfoBtn").onclick = function() {
    let select = document.getElementById("teamSelect");
    let selectedValue = select.value;
    let teamInfo = document.getElementById("teamInfo");

    for(let team of teams) {
        if(team.code === selectedValue) {
            teamInfo.textContent = `Team Name: ${team.name}, Location: ${team.plays}`;
            break;
        }
    }
};