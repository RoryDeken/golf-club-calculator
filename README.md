# Golf Club Calculator

### This tool personalizes the clubs in your bag and predicts the clubs needed given the remaining distance to the hole. It uses Java Spring for the API and React for the UI

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

## Frontend

`/frontend` contains the React app used for display and handling requests to the API

---

This is a simple proof of concept app and is not intended for production
