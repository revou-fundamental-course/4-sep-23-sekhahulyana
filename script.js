function changeShape() {
    var shape = document.getElementById("shape").value;
    var rumusLuas = document.getElementById("rumusLuas");
    var rumusKeliling = document.getElementById("rumusKeliling");

    if (shape === "square") {
        rumusLuas.textContent = "Luas = s x s";
        rumusKeliling.textContent = "Keliling = 4 x s";
        document.getElementById("sideBLabel").style.display = "none";
        document.getElementById("sideB").style.display = "none";
        document.getElementById("sideB").value = "0";
    } else if (shape === "rectangle") {
        rumusLuas.textContent = "Luas = panjang x lebar";
        rumusKeliling.textContent = "Keliling = 2 x (panjang + lebar)";
        document.getElementById("sideBLabel").style.display = "block";
        document.getElementById("sideB").style.display = "block";
        document.getElementById("sideB").value = "0";
    }
}

function calculateAreaAndPerimeter() {
    var shape = document.getElementById("shape").value;
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var area = 0;
    var perimeter = 0;

    if (shape === "square") {
        area = sideA * sideA;
        perimeter = sideA * 4;
    } else if (shape === "rectangle") {
        area = sideA * sideB;
        perimeter = 2 * (sideA + sideB);
    }

    document.getElementById("area").innerHTML = "Luas = " + area.toFixed(0) + " cm<sup>2</sup>";
    document.getElementById("perimeter").innerHTML = "Keliling = " + perimeter.toFixed(0) + " cm";
}
