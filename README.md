# Hello Let's get Your Stick!

## What is Our Goal

<br>

### Mobility aid rental service for the elderly

<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148254757-748c71a5-748b-4de1-9a0e-e0cd361be6e8.png" width="200" height="400">
</p>
<br>

### You can easily log in through KakaoTalk.

<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148666233-3a9bb7b0-7297-402c-ab18-c55f8bb806f2.png" width="1250" height="600">
</p>

### If you are properly logged in, you will see your KakaoTalk profile picture and profile name in the upper left corner.

<br>

### You can rent equipment by clicking the start button.

<br>
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148666177-45d63feb-288b-4151-80f9-9b36b0424dc0.png" width="1250" height="600">
</p>

### If your equipment rental is done normally, the green light comes on along with the Working symbol in the upper right corner.

<br>

### The current cost is displayed in the upper right corner.

<br>

### And at the bottom, the current location on the map and information about the sensors attached to the device are displayed.

<br>

### Below the information display window, there is a temperature control button for the hand warmer attached to the equipment.

<br>

### The last screen shows real-time data of various sensor information.

<br>
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148666209-f7fe3482-51b1-4311-9c53-7278f91d547a.png" width="1250" height="600">
</p>

### Just like the photo above, it shows real-time data for the rest of the sensors.

<br>

## How did we make this?

<br>

We made this service using low power communication called mqtt. If you use mqtt, you can send and receive information on a specific topic to multiple devices on the same network with very little power.

<br>

In our service, a total of 3 mqtt clients are attached to one network.One is a board with STM MCU attached to a mobility device, the other is a Raspberry Pi board that acts as a main server, and the other is a Web Application developed with React.js.

<br>

## What would we use?

<br>

First of all, we applied AWS IOT to use the mqtt service.

https://aws.amazon.com/iot/

This service is very well explained, and it was easy to apply to various MCUs and SBCs, and there were even libraries applicable to React.js.

The structure of our service is as follows.

<br>
<br>

in TwoHandSword Repository
<br>
<br>

### ㄴ STM32_BasedOnDemoMqtt_App <br>

### ㄴ STM32_BasedOnDemoMqtt_Bsw

<br>

### ㄴ webApp_iot

<br>

### ㄴ RasberryPi_withAWSIot

<br>
<br>

<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148669316-f39ae2b4-a3b9-4164-b8f0-24973066f7e0.png" width="1250" height="400
">
</p>

- System Architecture

<p align="center">
<img src="https://user-images.githubusercontent.com/41497254/148669612-ccf50c1a-ec22-45e8-a117-7d874e5b7928.png" width="1250" height="400
">
</p>

- Flow Chart
