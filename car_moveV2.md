# Programming the Smart Car to Move
## Step 1
### Step 1
To begin we need to add the yahboom extension. Go to extensions and type in the url https://github.com/lzty634158/yahboom_mbit_en to get the needed blocks.

## Step 2
### Step 2
We will be using the same code for the micro:bit remote and the micro:bit attached to the car. So we need to start our code by setting up a radio group. Go to the radio blocks aand take the **radio group block** and place it into the start function. Then choose a number to use as your radio group.
```blocks
radio.setGroup(42)
```
## Step 3
### Step 3
Now we are going to set up Button A to send a signal. We need to go to the input menu and get an **on button A pressed block**. Then we are going to go to the radio menu and get a **radio send number block** and place it into the **on button A pressed block**. Set the number to 10.
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
})
```

## Step 4
### Step 4
Button A is sending a signal and we want something to happen when the signal is received. In this case we want the car to move forward and have the large LED lights turn green. First go to the radio menu and get an **on radio received rumber block**. Then we are going to get an **if block** from the logic menu and place it in the **on radio received number block**. Next we are going to get a **CarCtrlSpeed block** in the Mbit_Robot Menu and set it to 40. Also go get a **RGB_Car_Big2 Block**in the Mbit_Robot Menu and set it to green. Place both in the **if block**. We need the if statement to check when for the case that the received number is equal to 10. So get **equal block** from math and place it into the **if condition slot**. Grab the **recievednumber variable** and place it in the first slot and 10 in the other slot of the **equal block**.
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 40)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    }
})
```
## Step 5
### Step 5
We are going to set up Button B this time to send a signal. We need to go to the input menu and get an **on button B pressed block**. Then we are going to go to the radio menu and get a **radio send number block** and place it into the **on button B pressed block**. Set the number to 20.
```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
})
```

## Step 6
### Step 6
Button B is sending a signal and we want something to happen when the signal is received. In this case we want the car to move backward and have the large LED lights turn red. Click on the + sign on **if block** and add an elseif section. Next we are going to get a **CarCtrlSpeed block** in the Mbit_Robot Menu, make sure it is set to back and the number is set it to 40. Also go get a **RGB_Car_Big2 block** in the Mbit_Robot Menu and set it to red. Place both in the elseif section of the if block. We need the elseif statement to check for the case that the received number is equal to 20. So get equal from math and place it into the **elseif condition slot**. Grab the **recievednumber variable** in the first slot and 20 in the other slot of the **equal block**.
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 40)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    } else if (receivedNumber == 20) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 40)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    } 
})
```
## Step 7
### Step 7
Finally we are going to set up Button AB to send a signal. We need to go to the input menu and get an **on button AB pressed block**. Then we are going to go to the radio menu and get a **radio send number block** and place it into the **on Button AB pressed block**. Set the number to 30
```blocks
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(30)
})
```

## Step 8
### Step 8
Button AB is sending a signal and we want something to happen when the signal is received. In this case we want the car to stop moving and have the large LED lights turn off. Click on the + sign on if block and add an elseif section again. Next we are going to get a **CarCtrl block** in the Mbit_Robot Menu, make sure it is set to stop. Also go get a **RGB_Car_Big2 block** in the Mbit_Robot Menu and set it to off. Place both in the new elseif section. We need this elseif statement to check for the case that the received number is equal to 30. So get **equal block** from math and place it into the new elseif condition slot. Grab the **recievednumber variable** in the first slot and 30 in the other slot of the **equal block**.
```blocks
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
```
## Finished
### Congratulations! 
You are done. Download the code to both the remote and receiver micro:bit. Then test your code.
