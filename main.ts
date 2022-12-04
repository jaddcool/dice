input.onGesture(Gesture.Shake, function () {
    Drawnumber = randint(1, 6)
    if (Drawnumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            `)
        basic.pause(300)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . #
            # # . . #
            # # # # #
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            `)
    } else {
        if (Drawnumber == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . # .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.showNumber(2)
        } else {
            if (Drawnumber == 3) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . # . .
                    . . . # .
                    . . . . .
                    `)
                basic.pause(500)
                basic.showNumber(3)
            } else {
                if (Drawnumber == 4) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        `)
                    basic.pause(500)
                    basic.showNumber(4)
                } else {
                    if (Drawnumber == 5) {
                        basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . # . .
                            . # . # .
                            . . . . .
                            `)
                        basic.pause(500)
                        basic.showNumber(5)
                    } else {
                        basic.showLeds(`
                            . . . . .
                            . # # # .
                            . . . . .
                            . # # # .
                            . . . . .
                            `)
                        basic.pause(500)
                        basic.showNumber(6)
                    }
                }
            }
        }
    }
})
let Drawnumber = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
music.playMelody("C E - G - E - G ", 199)
basic.forever(function () {
	
})
