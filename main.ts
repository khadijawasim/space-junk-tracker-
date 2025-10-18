radio.onReceivedNumber(function (receivedNumber) {
    doSomething("alarm ")
})
function doSomething (alarm_: string) {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
}
input.onSound(DetectedSound.Loud, function () {
    lightsOn = ["a", "b", "c"]
    if (true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("junk ahead ")
})
let lightsOn: string[] = []
input.setSoundThreshold(SoundThreshold.Loud, 150)
