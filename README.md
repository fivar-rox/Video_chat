# NoobMeet - A Video chat web application
<h3> Intro </h3> 
This is a webRTC based video chatting web application. The users can register and get logged in to their user page. They can either create a new room or use their previous rooms to join a call and chat. This implementation also consists of a real time chat and file share functionality.

# Deployed link
[noobmeet.herokuapp.com](https://noobmeet.herokuapp.com/)<br /> 
(Calls and chats are functional, but a small bug while deploying, becasue of NO "Access-Control-Allow-Origin" on icon package script, fonts-awesome is blocked. So u won't be able to access any incall-features in the deployement. To use all the features, follow the steps in "Getting Started" and run it on a local machine.)

# Features and Functionalities
* Unlimited number of rooms 
* Unlimited duration calls 
* Multiple participants 
* Copy the link and share it with your friends 
* Toggling your audio/video stream 
* Mute and Hide Everyone 
* Chat and File Share in real-time 
* Chat before and after the meeting 
* Send individual messages to the participants online in the room 
* Screen Sharing 
* Recording your stream, audio and video 
* Full Screen Mode on double click on the video  

# Demo (Not functional yet)
* Open https://noobmeet.herokuapp.com/
* Create an account
* Set a meeting name to create your room
* Click on call button and give access to camera and microphone to join call
* Click on chat button to chat before the meeting starts and as well as after the meeting ends
* Share the room link for others to join 

# ScreenShots
* Login and Register page

![image](https://user-images.githubusercontent.com/72460532/177010820-11f827e8-895b-4274-b568-d997184240d3.png)

![image](https://user-images.githubusercontent.com/72460532/177010848-5471e60c-3261-49a3-9195-a380e0085db2.png)

* Main Page
  * Contains all the past rooms in sorted according to the time of thier last update.
  
  ![image](https://user-images.githubusercontent.com/72460532/177010985-a214ddf7-6ddb-42d7-8a66-a71e065fa1c4.png)
  
  * Creating a new room
  
  ![image](https://user-images.githubusercontent.com/72460532/177011685-74a216e6-e020-4a17-906c-763c3d3c6682.png)

* Call page
  * Call Page (videos are just turned off, it is functional)
  
  ![Screenshot (1074)](https://user-images.githubusercontent.com/72460532/177011233-1c00902c-9047-41ef-9f7f-f220a4bd9d9f.png)
  
  * Automatic pop up of chat box upon recieving an message. The chat box is draggable (hold the body instead of the bar). 
  
  ![image](https://user-images.githubusercontent.com/72460532/177011335-d0d75476-c963-435b-9c38-a67f9439aab1.png)

* Chat page - Contains all the chats form previous meetings.

![image](https://user-images.githubusercontent.com/72460532/177011551-15db10a1-ece1-4b9e-af36-86899d273424.png)

A more detailed description and ScreenShots will be uploaded soon. (With video turned on too :-)).

# Getting Started
* You need to have Node.js installed
* clone this repo
  * git clone https://github.com/fivar-rox/Video_chat.git
  * cd video-call

* Install dependencies
  * npm init
  * npm install
* Start the server
  * npm start
* open http://localhost:4000 in your browser

# Tech Stack
* Node.js 
* Web RTC 
* Socket.io 
* ngrok and stun-turn server
* Firebase - for database 
* Heroku - for hosting
