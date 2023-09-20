function tongKyso(){
    var so = document.getElementById("so").value;
    if(so < 10){
        document.getElementById("result").innerText = `Số phải lớn hơn 9 ,tự xóa nhập lại đi`;
    }
    else{
        var tong = so % 10 + Math.floor(so / 10);
        document.getElementById("result").innerText = `Tổng ký số là: ${tong}`;
    }
}