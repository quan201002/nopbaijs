document.querySelector(".btn").onclick = function tinhLuong(){
    var ngayEl = document.getElementById("so-ngay-lam");
    var luong = ngayEl.value * 100000;
    // document.getElenmentById("luong").innerText= `${ngayEl.value * 100000}`;
    document.getElementById("luong").innerText= ` luong la:${luong}`;
    if(ngayEl.value <= 0){
        document.getElementById("luong").innerText= `Ngày làm lớn hơn 0 , tự xóa rồi nhập lại đi`;
    }else{
        var luong = ngayEl.value * 100000;
        document.getElementById("luong").innerText= `luong la:${luong}`;
    }
}