# Golf Club Calculator

### This tool personalizes the clubs in your bag and predicts the clubs needed given the remaining distance to the hole. It uses Java Spring for the API and React for the UI

## CURRENTLY UNDER CONSTRUCTION - PARDON THE DUST ##

## Backend

`/backend` contains the Java Spring app. Switch to this directory and follow the instructions below:

---

To launch the spring application, either select the ClubCalculatorApplication.java file in your IDE and select Run or use maven to start the application.

Spring Initializr uses maven wrapper so type this:

`./mvnw clean spring-boot:run` on windows or `mvn clean spring-boot:run` in a POSIX environment

Alternatively using your installed maven version you can type this:

`./mvn clean spring-boot:run` on windows or `mvn clean spring-boot:run` in a POSIX environment

When the app starts, we can immediately interrogate it.

`curl -v localhost:8080/clubs`

Or visit the url in a browser to see the returned value

This url may change depending on the avaiable ports on your computer and your machine's configuration

This Spring Boot app is currently hosted at http://3.16.31.165:8080/ on AWS Elastic Container Service but a SSL cert has not been purchased and Load Balancer has not been set up yet so this currently only works locally. You can see the API is working by visiting [here](http://3.16.31.165:8080/clubs). 

## Frontend

The top level folder contains the React app used for display and handling requests to the API. The backend is stored here and is deployed on AWS via a separate process.

---

This application was written using node v18.13.0 and may or may not work with later or earlier versions.

run `npm install`

Once the dependencies have been installed run `npm run dev` to start Vite and load the UI.

You should now be able to see the app running on port 5173.

**_Note_**: This is currently set up to make requests to localhost:5173 as the urls are currently hardcoded to use the api provided by the backend spring application and CORS has been enabled since this is a demo application.

Alternatively you can use the dockerfile present in the root folder for the frontend and the backend folder to use docker to spin up containers and corresponding images for these.

This is a simple proof of concept app and is not intended for production. It is currently under development so by no means is this a finished product.

## Distance Calculator

For convenience there is also a distance calculator that translates ball speed into a projected carry distance that has been included at the bottom of this application but the repository can be found [here](https://github.com/RoryDeken/golf-distance-calculator) and a live demo that lives on github pages can be found [here](https://rorydeken.github.io/golf-distance-calculator/)
