let engl = ["hello", "what", "you", "me", "window", "class"];
let vietn = ["xin chào", "cái gì", "bạn", "tôi", "cửa sổ", "lớp"];
function dich() {
    let tu = document.getElementById("eng").value;
    // document.getElementById("viet").innerHTML = tu;
    let x = engl.indexOf(tu);
    // document.getElementById("viet").innerHTML = x;
    if (x >= 0) {
        document.getElementById("viet").innerHTML = vietn[x];
    } else { 
        document.getElementById("viet").innerHTML = "Chưa cập nhật !";
    }
}