# CHAT SIMULATION WITH REACT AND REDUX:

**Description**: This is a small toy application that simulates a chat between 2 people.

## Installation:

* Install [Docker](https://www.docker.com)

* Build the docker image:

    `docker build -t="chat-app" .`

* Run a docker container with the created image:

    `docker run -it -p 3000:3000 chat-app`

* Once you're inside the container, you can run npm start. This will execute both gulp and nodemon.:

    `npm start`

* To open the app in the browser, you'll need to get the docker machine ip with the command below and enter it in the address bar e.g. 192.168.99.100:3000:

    `docker-machine ip default`

* You can also execute unit tests by running the gulp test command:
    
    `gulp test`

* Other gulp commands:

    `gulp watch`
