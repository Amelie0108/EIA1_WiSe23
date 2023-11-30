let playerName = prompt("Bitte deinen Namen angeben");

if (playerName) {
    let firstdecision = prompt("Hallo " + playerName + ", willst du den Wald (w) oder den Fluss (f) erkunden? Antwort mit w oder f");

    if (firstdecision === "w") {
        let forest = prompt("Im Wald triffst du auf ein Monster. Kämpfen (k) oder Fliehen (f)?");

        if (forest === "k") {
            console.log("Mutig! Du besiegst das Monster und findest einen Schatz.");
        } else if (forest === "f") {
            console.log("Kluge Entscheidung! Sicherheit geht vor.");
        } else {
            console.log("Das war keine gültige Entscheidung. Das Spiel endet hier.");
        }

    } else if (firstdecision === "f") {
        let river = prompt("Am Fluss triffst du einen weisen Mann. Reden (r) oder Weitergehen (w)?");

        if (river === "r") {
            console.log("Der weise Mann gibt dir einen wertvollen Rat für dein Leben.");
        } else if (river === "w") {
            console.log("Du verpasst die Chance, aber genießt einen schönen Spaziergang.");
        } else {
            console.log("Das war keine gültige Entscheidung. Das Spiel endet hier.");
        }

    } else {
        console.log("Das war keine gültige Entscheidung. Das Spiel endet hier.");
    }
} else {
    console.log("Kein Name eingegeben. Das Spiel endet hier.");
}