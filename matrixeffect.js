const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
let str = "AkuO js5Hu RstS Tecza Wysock op87BF !mt ]oJHY6 @XXX (^ sezon htu* 2023 TĘCZA WYSOCK /sakfIG &ksuU";
let matrix = str.split("");
let font = 14;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++){
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());