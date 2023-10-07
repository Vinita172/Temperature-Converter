

function converter() {
    var cel = parseFloat(document.tempform.celsius.value);
    var far = parseFloat(document.tempform.fahrenheit.value);
    var kel = parseFloat(document.tempform.kelvin.value);

    if (cel == 0 && far == 0 && kel == 0) {
        document.getElementById("alert1").style.display = "block";
        setTimeout(function () { document.getElementById("alert1").style.display = "none" }, 3000);
    }
    else {
        if (far == 0 && kel == 0) {
            var c = (cel * 9 / 5) + 32;
            document.tempform.fahrenheit.value = c;
            var d = cel + 273.15;
            document.tempform.kelvin.value = d;
        }
        else if (cel == 0 && kel == 0) {
            var e = (far - 32) * 5 / 9;
            document.tempform.celsius.value = e;
            var f = (far - 32) * 5 / 9 + 273.15;
            document.tempform.kelvin.value = f;

        }
        else {
            var g = kel - 273.15;
            document.tempform.celsius.value = g;
            var h = (kel - 273.15) * 9 / 5 + 32;
            document.tempform.fahrenheit.value = h;

        }
    }
}

function reset(){
    document.tempform.celsius.value=0;
    document.tempform.fahrenheit.value=0;
    document.tempform.kelvin.value=0;
}