led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
