radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        总分 = 0
    } else if (receivedNumber == 200) {
        计分完毕 = 1
    } else if (receivedNumber == 1000) {
        control.reset()
    } else {
        led.plot(receivedNumber % 5, Math.idiv(receivedNumber, 5))
        总分 += 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (计分完毕 == 1) {
        总分 = 0
        计分完毕 = 0
        basic.showIcon(IconNames.Yes)
    }
})
let 计分完毕 = 0
let 总分 = 0
radio.setGroup(15)
总分 = 0
计分完毕 = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (计分完毕 == 1) {
        basic.showNumber(总分)
    }
})
