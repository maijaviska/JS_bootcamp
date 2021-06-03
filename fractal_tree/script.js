let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

function draw(startX, startY, len, angle, branchWidth) {
    ctx.beginPath()
    ctx.save()

    ctx.lineWidth = branchWidth
    ctx.strokeStyle = 'darkgreen'
    ctx.fillStyle = 'green'
    ctx.shadowColor = 'rgb(0, 0, 0.8)'
    ctx.shadowBlur = 15

    ctx.translate(startX, startY)
    ctx.rotate(angle * Math.PI / 180)
    ctx.moveTo(0, 0)
    if (angle > 0) {
        ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len)
    } else {
        ctx.bezierCurveTo(-10, -len/2, -10, -len/2, 0, -len)
    }
    // ctx.lineTo(0, -len)
    ctx.stroke()

    

    if (len < 10) {
        ctx.beginPath()
        ctx.arc(0, -len, 10, 0, Math.PI / 2)
        ctx.fill()
        ctx.restore()
        return;
    }
    draw(0, -len, len * 0.8, -15, branchWidth * 0.8)
    draw(0, -len, len * 0.8, 15, branchWidth * 0.8)
    ctx.restore()


}

draw(400, 800, 150, 0, 5)

// for (let i = 1; i <=100; i++) {
//     console.log("Hello World!")
// }
// // recursive
// function printHelloWorld(n) {
//     if (n<1) {return}
//     console.log("Hello World!")
//     printHelloWorld(n - 1)
// }

// function greetPeople(name) {
//     if (names.length === 0) {return}

//     console.log("Hello " + names[0])
//     greetPeople(names.slice(1))
// }
