function randomInt(number) {
    return Math.floor(Math.random() * number)
}

function randomColor() {
    let a = Math.ceil(Math.random() * 255)
    let b = Math.ceil(Math.random() * 255)
    let c = Math.ceil(Math.random() * 255)
    return `rgb(${a},${b},${c})`
}
function throttling(fn, delay) {
    flag = false
    return function (...arg) {
        if (flag) return;
        flag = true
        setTimeout(() => {
            fn.apply(this, arg)
            flag = false
        }, delay)
    }
}

function clear() {
    const context = document.getElementById('canvas').getContext('2d');
    context.clearRect(0, 0, 2000, 2000) // 清除画布 后两个参数分别为宽和高
}
function drawLine(s1, s2, e1, e2, color) {
    //获取元素
    const canvas = document.getElementById('canvas')
    //获取节点对象
    const context = canvas.getContext('2d') // canvas只能画2d，没有3d
    // 开启一条路径
    context.beginPath();
    // 确定开始点
    context.moveTo(s1, s2);
    // 确定结束点
    context.lineTo(e1, e2);
    //在着色之前设置颜色和线宽
    context.strokeStyle = color;
    context.lineWidth = 3;

    // 上色
    context.stroke();
    // 关闭路径
    context.closePath();
}
function drawRect(x, y, w, h, color, linewidth) {
    //获取元素
    const canvas = document.getElementById('canvas')
    //获取节点对象
    const context = canvas.getContext('2d') // canvas只能画2d，没有3d
    context.fillStyle = color;
    // context.fill();  用rect必须调用该方法，所以不建议用rect
    context.lineWidth = linewidth;
    context.stroke();
    context.fillRect(x, y, w, h); // 不知道为什么这里用rect会只显示一个颜色。
}
function drawStrokeRect(x, y, w, h, color, linewidth) {
    //获取元素
    const canvas = document.getElementById('canvas')
    //获取节点对象
    const context = canvas.getContext('2d') // canvas只能画2d，没有3d
    context.strokeStyle = color;
    context.lineWidth = linewidth;
    context.stroke();
    context.strokeRect(x, y, w, h); // 不知道为什么这里用rect会只显示一个颜色。
}
function drawCricle(x, y, r, s, e, flag, color, linewidth) {
    //获取元-素
    const canvas = document.getElementById('canvas')
    //获取节点对象
    const context = canvas.getContext('2d') // canvas只能画2d，没有3d
    context.beginPath();
    context.arc(x, y, r, Math.PI * s, Math.PI * e, flag); // 不知道为什么这里用rect会只显示一个颜色。
    context.strokeStyle = color;
    context.lineWidth = linewidth;
    context.stroke();
}
function licensing() {
    let licenses = [14, 15]
    let res = []
    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j < 4; j++) {
            licenses.push(i)
        }
    }
    for (let i = 0; i < 3; i++) {
        res.push([])
    }
    let people = 0
    let undercard = []
    let landlord = randomInt(3)
    console.log(landlord)
    for (let i = 53; i >= 0; i--) {
        let index = randomInt(i)
        if (i > 50) {
            let card = licenses[index]
            undercard.push(card)
            res[landlord].push(card)
            continue;
        }
        res[people++].push(licenses[index])
        licenses.splice(index, 1)
        people = people === 3 ? 0 : people;
    }
    console.log(undercard)
    res.map((arr) => {
        return arr.sort((a, b) => b - a)
    })
    res = res.map((arr) => {
        return arr.map((item) => {
            switch (item) {
                case 1:
                    item = 'A'
                    break;
                case 11:
                    item = 'J'
                    break;
                case 12:
                    item = 'Q'
                    break;
                case 13:
                    item = 'K'
                    break;
                case 14:
                    item = '大王'
                    break;
                case 15:
                    item = '小王'
                    break;
                default: item = item
                    break;
            }
            return item
        })
    })
    return res
}


// console.log(licensing())