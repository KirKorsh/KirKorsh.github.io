function f() {
    let price = document.getElementsByName("price");
    let c = document.getElementsByName("count");
    let r = document.getElementById("result");
    let s = price[0].value * c[0].value;
    if (s.isNaN()) {
        r.innerHTML = "Ошибка";
    } else {
        r.innerHTML = s;
    }
    return false;
}
