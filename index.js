const dateBtn = document.getElementById('dateBtn');
const dateInput = document.getElementById('dateInput');
const birth = document.getElementById('birth');
const panel = document.getElementById('panel');
const container = document.getElementById('container');
dateBtn.addEventListener('click', function () {
    if (dateInput.valueAsDate) {
        console.log("go");
        if (new Date().getTime() > dateInput.valueAsDate.getTime()) {


            localStorage.setItem("birth", dateInput.valueAsDate.getTime());
            start();
        }
    }
});

function show() {

    panel.className = "panel show";
    setTimeout(function () {
        birth.style.display = "none";
        panel.className = "panel";
        container.style.display = "block";

    }, 500);
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function init(count) {
    const path = new Path2D();
    const fillPath = new Path2D();
    for (let i = 0; i < 66; i++) {
        for (let m = 0; m < 79; m++) {
            if (i * 79 + m < count) {
                fillPath.rect(m * 10 + 2, i * 10 + 2, 6, 6);
            } else {
                path.rect(m * 10 + 2, i * 10 + 2, 6, 6);
            }
        }
    }
    ctx.fill(fillPath);
    ctx.stroke(fillPath);
    ctx.stroke(path);
}

function start() {


    const birth = localStorage.getItem("birth");
    if (birth) {
        console.log("start");
        show();
        const day = Math.round((new Date().getTime() - birth) / 86400000);
        const week = Math.ceil(day / 7);
        init(week);
    }
}
start();