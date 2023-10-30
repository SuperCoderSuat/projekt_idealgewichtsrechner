/****************************************
 *      Projekt: Idealgewichtsrechner
 ***************************************/

function berechnen() {
    event.preventDefault();

    // input
    const koerperGroesse = document.body.querySelector("#input1").value;
    const alter = document.body.querySelector("#input2").value;
    const breite = document.body.querySelector("#input3");
    const schmale = document.body.querySelector("#input4");
    // const submit = document.body.querySelector("#input5");

    // output
    const output = document.body.querySelector("#output");

    if ((koerperGroesse <= 300 && koerperGroesse >= 30) && (alter <= 120 && alter >= 3)) {

        if (breite.checked) {

            // [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
            output.textContent = (((koerperGroesse - 100) + (alter / 10)) * 0.9 * 1.1).toFixed(1) + " kg.";
    
        } else if (schmale.checked) {
    
            //[(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9
            output.textContent = (((koerperGroesse - 100) + (alter / 10)) * 0.9 * 0.9).toFixed(1) + " kg.";
    
        } else {
    
            window.alert("Fehler")
    
        }

    } else {

        window.alert("Fehler")

    }
}