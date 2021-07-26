function calculateInterest() {
    var p = Number(document.getElementById("a").value);
    var r = Number(document.getElementById("b").value);
    var t = Number(document.getElementById("c").value);
    var a = document.getElementById("d").value;
    var mt = 0;
    if (a == "Yearly");
        mt = t * 1;
    if (a == "Half Yearly");
        mt = t * 2;
    if (a == "Quarterly");
        mt = t * 3;
    if (a == "Monthly");
        mt = t * 12;

    var total=(p*Math.pow(1+(r/(t*100)),mt));
    var ci=total-p;
    window.alert("Total Amount "+total.toFixed(2)+ "\nCompound Interest"+ ci.toFixed(2));
} 