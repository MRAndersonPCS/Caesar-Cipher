// Adjust key with buttons A and B
input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    if (key > 0) {
        if (displaySwitch2Ltr == false) {
            key += -1
        }
    } else {
        key = 25
    }
    if (charCode > 0) {
        if (displaySwitch2Ltr == true) {
            charCode += -1
        }
    } else {
        charCode = 25
    }
})
function alphaArray (index: number) {
    return alphaList[index]
}
// Lock in the key by pressing A and B together
input.onButtonPressed(Button.AB, function () {
    if (displaySwitch2Ltr == false) {
        basic.showString("Key-Set")
    }
    if (displaySwitch2Ltr == true) {
        cipherText = "" + cipherText + shiftLetter(key, charCode)
    } else {
        cipherText = ""
    }
    displaySwitch2Ltr = true
})
input.onButtonPressed(Button.B, function () {
    basic.pause(200)
    if (key < 25) {
        if (displaySwitch2Ltr == false) {
            key += 1
        }
    } else {
        key = 1
    }
    if (charCode < 25) {
        if (displaySwitch2Ltr == true) {
            charCode += 1
        }
    } else {
        charCode = 0
    }
})
// When shaken, show the cipher text
input.onGesture(Gesture.Shake, function () {
    pause2 = true
    for (let index = 0; index <= 4; index++) {
        basic.showString(cipherText)
        basic.pause(200)
    }
    basic.pause(2000)
    charCode = 0
    key = 1
    displaySwitch2Ltr = false
    pause2 = false
})
// Function to shift a letter by the key in the Caesar cipher
function shiftLetter (shift: number, alphaIndex: number) {
    if (alphaIndex + shift > 25) {
        return alphaList[(alphaIndex + shift) % 26]
    } else {
        return alphaList[alphaIndex + shift]
    }
}
let pause2 = false
let cipherText = ""
let charCode = 0
let displaySwitch2Ltr = false
let alphaList: string[] = []
let key = 0
let currentLetter = ""
key = 1
alphaList = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
// Display the current key
basic.forever(function () {
    if (displaySwitch2Ltr == true) {
        if (pause2 == false) {
            basic.showString("" + (alphaArray(charCode)))
        }
    } else {
        if (pause2 == false) {
            basic.showNumber(key)
        }
    }
})
