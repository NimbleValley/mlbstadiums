const stadiumContainer = document.getElementById("stadium-container");
const overlay = document.getElementById("overlay");
const viewer = document.querySelector("model-viewer");

overlay.style.display = "none";

var abb = `LAA
HOU
OAK
TOR
ATL
MIL
STL
CHC
ARI
LAD
SF
CLE
SEA
MIA
NYM
WSH
BAL
SD
PIT
PHI
TEX
TB
CIN
BOS
COL
KC
DET
MIN
CWS
NYY`

var names = `Angels
Astros
Athletics
Blue Jays
Braves
Brewers
Cardinals
Cubs
Diamondbacks
Dodgers
Giants
Guardians
Mariners
Marlins
Mets
Nationals
Orioles
Padres
Pirates
Phillies
Rangers
Rays
Reds
Red Sox
Rockies
Royals
Tigers
Twins
White Sox
Yankees`;

var teamNames = names.split("\n");
var teamAbb = abb.split("\n");


addTiles();

function addTiles() {
    for(var i = 0; i < 30; i ++) {
        var temp = document.createElement("div");
        temp.className = "stadium-tile";
        var description = document.createElement("div");
        description.innerText = teamNames[i];
        description.className = "stadium-label";
        temp.appendChild(description);
        temp.id = i;
        temp.onclick = function() {show(this.id)}
        stadiumContainer.appendChild(temp);
    }
}

function show(i) {
    console.log(i)
    viewer.src = `https://www.mediafire.com/file/u7idps0rocv66hs/Stadium_ARI.glb`
    overlay.style.display = "block";
}

function hide() {
    overlay.style.display = "none";
}