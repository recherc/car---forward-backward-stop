radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 40)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    } else if (receivedNumber == 20) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 40)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    } else if (receivedNumber == 30) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(30)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
})
radio.setGroup(1)
