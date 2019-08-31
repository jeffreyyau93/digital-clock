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

    document.getElementById("time").textContent = `${check(n_hour)}:${check(n_min)}:${check(n_sec)}`;
    document.getElementById("date").textContent = `${n_year}-${check(n_moth + 1)}-${check(n_date)} ${dotw[n_day]}`;
}

updateTime();
