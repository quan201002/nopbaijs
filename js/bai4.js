function tinh(){
    var x = document.getElementById("x").value*1;
    var y = document.getElementById("y").value*1;
    if(x <= 0 || y <= 0){
        document.getElementById("result").innerText = " số đo phải lớn hơn 0, tự xóa rồi nhập lại đi!"
    }else{
        var c = (x + y) * 2;
        var s = x*y;
        document.getElementById("result").innerText = `Chu vi la: ${c}
        Dien tich la: ${s}`;
    }
}