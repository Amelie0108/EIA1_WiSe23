const nameName = "Bitte deinen Namen angeben";
const noName = "Kein Name eingegeben. Das Spiel endet hier.";
const noDecision = "Das war keine gültige Entscheidung. Das Spiel endet hier.";
const decisionForest = "Im Wald triffst du auf ein Monster. Kämpfen (k) oder Fliehen (f)?";
const forestK = "Mutig! Du besiegst das Monster und findest einen Schatz.";
const forestF = "Kluge Entscheidung! Sicherheit geht vor.";
const decisionRiver = "Am Fluss triffst du einen weisen Mann. Reden (r) oder Weitergehen (w)?";
const riverR = "Der weise Mann gibt dir einen wertvollen Rat für dein Leben.";
const riverW = "Du verpasst die Chance, aber genießt einen schönen Spaziergang.";

// Start des Spiels, wenn ein Name eingegeben wird, startet das Spiel, indem die Funktion (makeFirstDecision) aufgerufen wird.
const playerName = prompt(nameName);
if (playerName) {
    makeFirstDecision(playerName);
} else {
    alert(noName);
}

// Diese Funktion ist der Ausgangspunkt, nachdem der Spieler seinen Namen eingegeben hat. Abhängig von seiner Antwort ("w" oder "f") wird die entsprechende Funktion (exploreForest oder exploreRiver) aufgerufen.
function makeFirstDecision(playerName) {
    const forestOrRiver = "Hallo " + playerName + ", willst du den Wald (w) oder den Fluss (f) erkunden? Antwort mit w oder f";
    const firstDecision = prompt(forestOrRiver);
    if (firstDecision === "w") {
        exploreForest(playerName);
    } else if (firstDecision === "f") {
        exploreRiver(playerName);
    } else {
        alert(noDecision);
    }
}

// Funktionen, die das Szenarion darstellt, wenn der Spieler sich für den Wald entscheidet
function exploreForest(playerName) {
    const forest = prompt(decisionForest);
    const outcomes = {
        k: forestK,
        f: forestF
    };
    alert(outcomes[forest] || noDecision);
}

// Funktionen, die das Szenarion darstellt, wenn der Spieler sich für den Fluss entscheidet
function exploreRiver(playerName) {
    const river = prompt(decisionRiver);
    const outcomes = {
        r: riverR,
        w: riverW
    };
    alert(outcomes[river] || noDecision);
}