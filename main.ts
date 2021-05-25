input.onGesture(Gesture.ScreenDown, function () {
    dice = 0
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    shake = true
})
let shake = false
let dice = 0
dice = 0
shake = false
basic.forever(function () {
    if (dice > 0) {
        basic.showNumber(dice)
        if (shake) {
            soundExpression.giggle.play()
            shake = false
        }
    } else {
        basic.clearScreen()
    }
})
