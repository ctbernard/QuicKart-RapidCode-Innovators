![modified](https://img.shields.io/github/last-commit/KWilliams-dev/QuicKart)
![contributors](https://img.shields.io/github/contributors/KWilliams-dev/QuicKart)
![topLanguage](https://img.shields.io/github/languages/top/KWilliams-dev/QuicKart?label=top%20language)
![languageCount](https://img.shields.io/github/languages/count/KWilliams-dev/QuicKart?label=language%20count)

# QuicKart
This GitHub repository belongs to the 'RapidCode-Innovators' team, currently working on the QuicKart mobile android application. Our primary goal is to revolutionize the shopping experience for users by providing them with a powerful app that offers two key benefits:

**1. Optimized Shopping Routes:**<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Provide users the fastest route to their items within the store.<br>
**2. Time-Saving Features:**<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Beyond just navigation, our app incorporates an array of innovative features designed to reduce overall shopping time.
       
The project repository can be found [here](https://github.com/ctbernard/QuicKart-RapidCode-Innovators).

## Build Instructions
 
<strong>1.</strong> Clone the repository into your local machine.
<strong>2.</strong> If you dont have node or npm installed then type the following commands: 
```
node install 16.20.2 
```
```
npm install 7.24.2
```
<strong>2.</strong> To ensure that you have nodejs and npm installed enter the following commands: (You should see something like "v16.13.2")
```
node -v
```
```
npm -v
```
- ### <em><strong>Note</strong></em>
&nbsp; &nbsp; &nbsp; If your running a different version of node and run into issues with this project. I'm currently running NodeJS v16.13.2 and npm v8.12.1. Installing those specific versions may help.


<strong>3.</strong> Use the cd command in the terminal of your project directory to get into src and then view. 
Ex:
```
cd src/view
```
<strong>4.</strong> This will take you into where the front end portion of the project lives. At this point run
```
npm install 
```
<strong>5.</strong> After that, you'll need to set up the back end portion of project following similar steps
```
cd src/model
npm install
```
<strong>6.</strong> Update Expo Go using Git Bash
```
npm install expo@^48.0.0
```
- ### <em><strong>Note</strong></em>
&nbsp; &nbsp; &nbsp; After completing these steps, the project will not be running but you will have node_modules directory built and the dependencies that the
project relies on ready to go.

# Running the project

## Front End

- ### <em><strong>Note</strong></em>
&nbsp; &nbsp; &nbsp; I recommend going over some of the docs on this website https://docs.expo.dev/ and also testing out expo in the browser here https://snack.expo.dev/ to familiarize yourself with the technology. There will be some account creation involved.

To run the front end of the project, make sure you're in the view directory in your terminal and then run the command.
```
npm run web
```
Make sure to create an account with Expo Go and sign into it on your phone. (We used our phones to sign in, however we used a android emulator to access the app.)

<em>Screenshot</em>

![image](https://user-images.githubusercontent.com/74102531/199377266-36155398-a05e-4406-a16d-ccb360cfcfe3.png)

You'll see a QR code pop up in your terminal and commands on where you want to open the project. 

<em>Screenshot</em>

![5db94518-4863-4a74-b5cb-a7c6e1f93270](https://github.com/ctbernard/QuicKart-RapidCode-Innovators/assets/106941331/88cb2beb-19d1-49a1-a65a-6a79b3ac3a2e)


To run it on android emulator, run the command 
```
a
```

Within your terminal and emulator, Expo Go will begin installling and building the project.

<em>Resources</em>:  
- React docs: https://reactjs.org/docs/getting-started.html 
- React-native docs: https://reactnative.dev/docs/getting-started

## Backend

The backend of the project uses MongoDB, GraphQL and Apollo server. Much of the set up is already done, you'll just need to make sure to follow the build
instructions first and run ``` npm install ``` in the src/model directory first.

- ### <em><strong>Note</strong></em> 
Please look over the docs but note that some of them will give you instructions for setting up a new project, which are not needed in this case. The docs are a good source for understanding the basics of how this tech is used.

- Apollo docs: https://www.apollographql.com/docs/apollo-server/getting-started/
- GraphQL docs: https://graphql.org/learn/
- MongoDB docs: https://www.mongodb.com/docs/manual/

You may also want to reference some of the same YouTube tutorials we followed. Our strategy was to build the app from the tutorial first and then use what we
learned to begin building QuickKart.

- YouTube tutorial Part 1 (Backend): https://www.youtube.com/watch?v=hPBVIET5coo&list=RDCMUCYSa_YLoJokZAwHhlwJntIA&index=2
- YouTube tutorial Part 2 (Frontend): https://www.youtube.com/watch?v=GFQDJlVEXRg&list=RDCMUCYSa_YLoJokZAwHhlwJntIA&index=1

## Usage
This app is intended to be used by consumers who enjoy shopping in a physical grocery store but don't enjoy how long it takes. Our app is based off a store map with coordinates and each item in inventory belongs to a coordinate on the map. Our algorithm uses the coordinates to determine the fastest shopping route the user can take, starting from the entrance. Once calculated, we display those items to the user in a user friendly manner.

![welcome](https://github.com/ctbernard/QuicKart-RapidCode-Innovators/assets/103677691/3f9a6c2b-e76f-47c1-aa83-e3c6e0901eaa)

## Communications
The team used JIRA as our project progess tracking tool alongside Discord and Microsft Teams as our primary communication tool and meeting platform.

## Authors
1. ReAnn Hollins 🕴️
   - _**Team Manager**_
   - _**UX/UI Lead**_
2. Benjamin Caron :computer:
   - _**Code Architect**_
3. Christopher Bernard :computer:
   - _**Code Architect**_
4. Dion Del Rosario :mag:
   - _**Testing Lead**_
5. TreMya Sheats 📝
    - _**Documentation Lead**_
6. Anthony Wallace :bar_chart:
    - _**Data Modelist**_
    - _**Code Architect**_
7. Luke Akridge :mag:
    - _**Testing Lead**_
## License
