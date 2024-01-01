var guncelKur = 30;

function kurGetir() {
    document.getElementById("kur").innerHTML = guncelKur;
}


function hesapla() {
    var girilenDeger = document.getElementById("input").value;
    console.log("girilenDeger", girilenDeger);
    var sonuc = girilenDeger * guncelKur;
    document.getElementById("sonuc").innerHTML = sonuc;
}