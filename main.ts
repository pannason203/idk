input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    music.play(music.stringPlayable("D E F G A B C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    music.play(music.stringPlayable("D E F G A B C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    music.play(music.stringPlayable("D E F G A B C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("D E F G A B C5 C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
