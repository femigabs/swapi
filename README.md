# SWAPI

A SWAPI appplication that provides API endpoints for listing names of Star Wars movies along with their opening crawls and comment counts, adding and listing anonymous comments for a movie, and getting the character list for a movie.

---

## Getting Started

To get a copy of this project up and running on your local machine for testing and development, you would need to have a minimum of the listed prerequisites installed on your local machine.

## Prerequisites

1. Node.js (v8.12.0 or higher) and npm (6.4.1 or higher) installed on your local machine. Run node -v and npm -v in your terminal to confirm that you have them installed

2. GIT and Bash

### Node
- #### Node installation on Windows

Go to [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might might be dependent on it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, by running the following command.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.0

    $ npm --version
    6.9.0

To update your `npm`, run the following command.

    $ npm install npm -g

---

## Project Install

    $ git clone https://github.com/femigabs/swapi.git
    $ cd swapi
    $ npm install

## Configure app

Create a `.env` file and add the environment variables described in the `.env.example` file.



## Running the project

    $ npm run dev (development)
    $ npm start (production)

## Running migrations

    $ npm run migrate:up
    $ npm run migrate:down

## Running tests

    $ npm run test

## Technologies

- Node JS
- Express
- Postgres
- Supertest and mocha
- Postman

## API
The API is currently in version 1 (v1) and it is hosted on heroku at [Base URL](https://swapi-starwar.herokuapp.com/api/v1/)

## API Documentation
- postman: https://documenter.getpostman.com/view/11087517/UVREmkcA
- swagger doc: https://swapi-starwar.herokuapp.com/api/v1/docs/

## Copyright

Copyright (c) 2021 Femi Babayemi
