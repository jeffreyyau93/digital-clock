let dotw = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function check(num) {
    return num < 10 ? "0" + num : num;
}
function updateTime() {
    setTimeout(updateTime, 1000);

    let nt = new Date();
    let n_hour = nt.getHours();
    let n_min = nt.getMinutes();
    let n_sec = nt.getSeconds();

    let n_year = nt.getFullYear();
    let n_moth = nt.getMonth();
    let n_date = nt.getDate();
    let n_day = nt.getDay();

    /* pic-clk start */
    //時分秒的個位數 by pic-clk
    let n_hx = n_hour % 10;
    let n_mx = n_min % 10;
    let n_sx = n_sec % 10;

    //時分秒的十位數 by pic-clk
    let n_ht = Math.floor(n_hour / 10);
    let n_mt = Math.floor(n_min / 10);
    let n_st = Math.floor(n_sec / 10);

    document.getElementById("ck1").className = "c" + n_ht;
    document.getElementById("ck2").className = "c" + n_hx;
    document.getElementById("ck3").className = "c" + n_mt;
    document.getElementById("ck4").className = "c" + n_mx;
    document.getElementById("ck5").className = "c" + n_st;
    document.getElementById("ck6").className = "c" + n_sx;

    document.getElementsByClassName("cc")[0].style.opacity = 1;
    document.getElementsByClassName("cc")[1].style.opacity = 1;

    //兩行DOM延遲500毫秒執行
    setTimeout(function () {
    document.getElementsByClassName("cc")[0].style.opacity = 0;
    document.getElementsByClassName("cc")[1].style.opacity = 0;
    }, 500);
    /* pic-clk end */

    /* digi-clk start */
    document.getElementById("time").textContent = `${check(n_hour)}:${check(n_min)}:${check(n_sec)}`;
    document.getElementById("date").textContent = `${n_year}-${check(n_moth + 1)}-${check(n_date)} ${dotw[n_day]}`;
    /* digi-clk end */
}

updateTime();
