
function tinhTrungBinh(){
    const so1 = document.getElementById("so1").value;
    const so2 = document.getElementById("so2").value;
    const so3 = document.getElementById("so3").value;
    const so4 = document.getElementById("so4").value;
    const so5 = document.getElementById("so5").value;
    var trungbinh = (so1*1 + so2*1 + so3*1 + so4*1 + so5*1) / 5;
    document.getElementById("result").innerText = `Trung binh la: ${trungbinh}`;
}
