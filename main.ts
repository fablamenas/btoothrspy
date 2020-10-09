bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # # # #
        # . . . .
        # . . . .
        # . . . .
        . # # # #
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startMagnetometerService()
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
