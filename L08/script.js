// Ein Array mit den Texten der verschiedenen Schritte des Spiels.
let story = [
    "Bitte deinen Namen angeben",
    "Hallo {playerName}, willst du den Wald (w) oder den Fluss (f) erkunden? Antwort mit w oder f",
    "Im Wald triffst du auf ein Monster. Kämpfen (k) oder Rennen (r)?",
    "Mutig! Du besiegst das Monster und findest einen Schatz.",
    "Kluge Entscheidung! Sicherheit geht vor.",
    "Am Fluss triffst du einen weisen Mann. Reden (r) oder Weitergehen (w)?",
    "Der weise Mann gibt dir einen wertvollen Rat für dein Leben.",
    "Du verpasst die Chance, aber genießt einen schönen Spaziergang."
];

// Eine Variable zur Speicherung des Spielernamens.
let playerName = "";

// Eine Variable, die den aktuellen Schritt im Spiel repräsentiert.
let currentStep = 0;

// Zugriff auf das Eingabefeld.
const input = document.getElementById("inputForm_field");

// Zugriff auf das Element, das die Geschichte anzeigt.
const output = document.getElementById("output");

// Fügt dem Eingabefeld einen Event Listener hinzu, der auf Tastendruck reagiert.
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Überprüft, ob die gedrückte Taste die Enter-Taste ist.
        if (currentStep === 0) {
            playerName = input.value; // Speichert den eingegebenen Namen.
            story[1] = story[1].replace("{playerName}", playerName);
            output.innerHTML = story[1];
            currentStep = 1; // Geht zum nächsten Schritt über.
        } else if (currentStep === 1) {
            if (input.value === "w") {
                output.innerHTML = story[2];
                currentStep = 2;
            } else if (input.value === "f") {
                output.innerHTML = story[5];
                currentStep = 3;
            }
        } else if (currentStep === 2) {
            if (input.value === "k") {
                output.innerHTML = story[3];
                currentStep = 0;
            } else if (input.value === "r") {
                output.innerHTML = story[4];
                currentStep = 0;
            }
        } else if (currentStep === 3) {
            if (input.value === "r") {
                output.innerHTML = story[6];
                currentStep = 0;
            } else if (input.value === "w") {
                output.innerHTML = story[7];
                currentStep = 0; // Nach jeder Entscheidung wird currentStep auf 0 zurückgesetzt, was bedeutet, dass das Spiel von vorne beginnt.
            }
        }
        input.value = ""; // Leert das Eingabefeld nach jeder Eingabe.
    }
});