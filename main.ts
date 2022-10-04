input.onButtonPressed(Button.A, function () {
    if (player1 == "tails" && player2 == "tails") {
        music.playMelody("C D E F E D C - ", 120)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (player1 == "heads" && player2 == "heads") {
        music.playMelody("C D E F E D C - ", 120)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (player1 == "tails" && player2 == "heads") {
        music.playMelody("C D E F E D C - ", 120)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let player2 = ""
let player1 = ""
let coins = randint(0, 1)
coins = randint(0, 1)
if (coins == 0) {
    player1 = "heads"
} else {
    player1 = "tails"
}
if (coins == 0) {
    player2 = "tails"
} else {
    player2 = "heads"
}
basic.forever(function () {
	
})
