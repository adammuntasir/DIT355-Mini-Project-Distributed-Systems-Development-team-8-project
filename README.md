# Dentistimo

[[_TOC_]]

## What?

A software that keeps track of the availaiblity of free time-slots for dentists in Gothenburg, where the client uses a browser-based application to visualize the locations of the dentists and book a specific dentist by clicking on the marker on the map. A confirmation of the booking will be displayed to the client according to the availablity otherwise a rejection will be displayed.

## Why?

In order to automatically get a list of available dentists according to the time window set by the client.

## How?

The visualiser recieves the dentists registry over the MQTT-protocol.

## Project requirements <br />

[ SRS ](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/team-8-project/-/blob/main/SRS.pdf) <br />

## Technologies used

- MQTT with HiveMQ broker
- MapBox
- Node.js

## Developers <br />

[Leila Bencheikh ](https://git.chalmers.se/leilab) <br />
[Maab Mohammedali ](https://git.chalmers.se/maabm) <br />
[Mila Mehrvarz ](https://git.chalmers.se/mehrvarz) <br />
[Muntasir Adam ](https://git.chalmers.se/adammu) <br />
[Ramzi Abu Zahra ](https://git.chalmers.se/sramzi) <br />

## Project Development Process <br />

We have used Agile development methodology for our project management. We have identified the project requirements and broke them down into tasks which we included in the sprint backlog. Furthermore, in our project development process we had sprint planning and sprint review meetings to consolidate the team’s efforts by unifying our vision and demonstrate our results to each other. In addition to defining the nature of our meetings, the team members have been assigned to different roles such as Scrum master, Developers and Product owner (TA) which helped us in organizing our contributions more clearly. During each sprint we set deadlines for the tasks that need to be completed individually, as a subgroup and as team. The communication between team members has been conducted via Discord, Zoom and Slack. In this project, Trello was the main management and planning tool that has been used. Moreover, we decided to use software which allows online collaboration such as Draw.io for creating various software diagrams, and Google drive for easy collaboration on project documents and assignments

## Project Managment tools <br />

- Trello
- Slack
- Discord
- Google drive
- Draw.io
- Zoom

## Software Architecture style

### Publish-Subscribe Architecture Style

publish/subscribe is one of the architecture style that we have considered to implement in our project in order to exchange messages between two components in our system. In this architecture style one component subscribes to a message that has been
published by a publisher(another Component). The publish and subscribe will make use of the MQTT Paho
technology which is one of the core requirements of the project.

### Pipe and Filter Architecture Style

We decided to use the Publish-Subscribe architecture style and the Pipe-Filter style. Using
the pipe and filter will allow more components to be added later on during the course when
the requirements add up over time

## Diagrams describing our project:

### **Components** <br />

[ Visualizer ](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/visualizer) <br />
[ TimeValidator ](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/dataHandler) <br />
[ FormatChecker ](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/formatChecker) <br />
[ BookingHandler ](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/extractData) <br />
[ RequestGenerator](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/requestGenerator) <br />
[ CircuitBreaker](https://git.chalmers.se/courses/dit355/test-teams-formation/team-8/circuitBreaker) <br />

### Component Diagram

![Component Diagram](./images/Component.png)

### Use-Case Diagram

![Use Case Diagram](./images/Use_Case_Diagram.png)

### Sequence Diagram

![Sequence Diagram](./images/Sequence_diagram.png)

### Activity Diagram

![Activity Diagram](./images/activity diagram.png)

### Functional Decomposition Diagram <br>

![Functional Decomposition Diagram](./images/Functional decomposition diagram.png)

### Deployment Diagram

![Deployment Diagram](./images/Deployment diagram.png)

## Technical Overview
### Quality of service

**FromClient: QoS:1**

This topic will get published when the client wants to book a timeslot. So we need to guarantee that it will get delivered at least once to the next component in our system which is the circuitBreaker. The choice of clinic for booking purposes is also carried to the next component from Visualizer and will be delivered at least once, making the QoS of 1 crucial for assuring that the clients choices are registered and sent at least once. 

**SendToCircutBreaker: QoS:0-1**
          
The reason behind our choice for this quality of service can relate to the type of message that will be published by requestGenerator as we are considering the most reasonable cost imposed on the MQTT broker. Since the requestGenerator will be publishing at high speed fictional data for testing purposes, the assurance that each one is sent once is not of high importance. This topic will also get subscribed by the circuitBreaker component, so we need to make sure that it will get delivered at least once by this component as our system circuitBreaker will be triggered at the exact threshold of 20 messages sent at very high frequency.

**SendToFormatChecker: Qos:1-1**
            
This topic will be published by circuitBreaker and will be subscribed to by formatChecker. We need to make sure that message can be delivered at least once to the MQTT broker and get subscribed by formatChecker as we have to fulfill the requirement of having the booking request and the date request formats checked and validated before being received by the timeValidator component.

**SendToDataHandler(TimeValidator): Qos:1-1**
     
This topic will be published from formatChecker to MQTT and will be subscribed by timeValidator. This component will validate that the date and time chosen by the user is within the correct range, as per our project requirements. We have considered using quality of services 1 for this topic so that the next component can process the message accordingly.

**SendToExtractData(BookingHandler): Qos:1-1**
            
Once the booking date and time got validated, a message with the topic of SendToExtractData will be published by TimeValidator and will be subscribed by the bookingHandler component to confirm or reject the booking. So it is crucial for this action that data will be sent by the sender and received by the receiver immediately at least once.

**SendToClient: Qos:1-1**
          
Once the booking request has been checked and the availability of the clinic has been chosen, the booking confirmation or rejection will be published by bookingHandler and subscribed by Visualizer. The quality of service 1 is the most suitable option for this topic as this is a guarantee that the message will finally reach the client.



## Setup and running

### Dependencies

1. Node.js & Npm (https://nodejs.org/en/download/)
2. Git (https://git-scm.com/downloads)

### Setup

1. Move the file Global_values in the Documentations folder to the parent directory
2. Move the file registry in the Documentations folder to the parent directory
3. The components (dataHanlder, extractData, formatChecker) can all be setup with command (npm i mqtt)
4. The component (Visualizer) can be setup with command (npm init) then (npm i serve)
5. Go to package.json and add under scripts property, above the test subproperty the following line "dev": "serve .",

### Running

1. Run each component except for the Visualizer using Node.js by typing the following command: (node index.js)
2. Go to Visualizer and run it by typing (npm run dev)
3. Open the port that will be displayed in the console
4. Choose website.html from the choices in the web browser
