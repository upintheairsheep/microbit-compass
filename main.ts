input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    input.calibrateCompass()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.lightLevel())
    basic.showNumber(input.acceleration(Dimension.X))
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
    basic.clearScreen()
})
