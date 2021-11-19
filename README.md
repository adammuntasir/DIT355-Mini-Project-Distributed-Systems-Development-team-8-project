# Dentistimo

## What?
A software that keeps track of the availaiblity of free time-slots for dentists in Gothenburg, where the client uses a browser-based application to visualize the locations of the dentists and book a specific dentist by clicking on the marker on the map. A confirmation of the booking will be displayed to the client according to the availablity otherwise a rejection will be displayed.

## Why?
In order to automatically get a list of available dentists according to the time window set by the client.

## How?
The visualiser recieves the dentists registry over the MQTT-protocol.

## Technologies used
*  MQTT with HiveMQ broker
*  MapBox
*  Node.js

## Developers
* Leila Bencheikh
* Maab Mohammedali
* Mila Mehrvarz
* Muntasir Adam
* Ramzi Abu Zahra

## Software Architecture


<br>
<img src="./Component.png"><br>
*Component Diagram*

## Setup and running

### Dependencies
1. Node.js & Npm (https://nodejs.org/en/download/)
2. Git (https://git-scm.com/downloads)

### Setup
1. Move the file Global_Keys in the Documentations folder to the parent directory
2. The components (DataHanlder, DataExtractor, Pipe) can all be setup with command (npm i mqtt)
3. The component (Visualizer) can be setup with command  (npm init) then (npm i serve)
4. Go to package.json and add under scripts property, above the test subproperty the following line "dev": "serve .",



### Running

1. Run each component except for the Visualizer using Node.js by typing the following command:  (node index.js)
2. Go to Visualizer and run it by typing (npm run dev)
3. Open the port that will be displayed in the console
4. Choose website.html from the choices in the web browser

