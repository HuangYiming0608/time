let cnt = 0
input.onPinPressed(TouchPin.P0, function () {
    cnt = 3
})
input.onPinPressed(TouchPin.P2, function () {
    cnt = 60
})
input.onPinPressed(TouchPin.P1, function () {
    cnt = 10
})
basic.forever(function () {
    basic.showNumber(cnt)
    basic.pause(1000)
    cnt += -1
})
