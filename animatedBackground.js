var canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
window.setInterval(draw, 5);

class Star {
    constructor(x, y, color, speed, direction, size, ftime) {
        this.speed = speed;
        this.color = color;
        this.direction = direction;
        this.ftime = ftime;
        this.x = x;
        this.y = y;
        this.size = 1 + size * Math.random();
    }
}
const star = [];
for (i = 0; i < 200; i++) {
    star[i] = new Star(canvas.width * Math.random(), canvas.height * Math.random(), 'rgba(0, 0, ' + (15 + 260 * Math.random()) + ', 1)', (Math.random() + 0.1) / 20, 135 + 90 * Math.random(), 2, 5);
}


function draw() {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgba(15, 15, 15, 1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (i = 0; i < 200; i++) {
        ctx.fillStyle = star[i].color;
        star[i].x = star[i].x + star[i].speed * Math.cos(star[i].direction * Math.PI / 180) * star[i].ftime;
        star[i].y = star[i].y + star[i].speed * Math.sin(star[i].direction * Math.PI / 180) * star[i].ftime;
        ctx.fillRect(star[i].x, star[i].y, star[i].size, star[i].size);
        if (
            star[i].x < -5 ||
            star[i].x > ctx.canvas.width + 5 ||
            star[i].y < -5 ||
            star[i].y > ctx.canvas.height + 5
        ) {
            star[i].x = ctx.canvas.width;
            star[i].y = (ctx.canvas.height) * Math.random();
            star[i].direction = 135 + 90 * Math.random();
            star[i].speed = (Math.random() + 0.1) / 20;
        }
    }

}