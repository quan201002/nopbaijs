function quiDoi(){
    var usd = document.getElementById("usd").value;
    if(usd <= 0){
        document.getElementById("result").innerText = " Số phải lớn hơn 0, tự xóa rồi nhập lại đi!"
    }else{
        var vnd = (usd*23500).toLocaleString();
        document.getElementById("result").innerText = `${usd} USD = ${vnd} VND`;
    }
}