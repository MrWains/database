# HealthatLUMS

This is a React/NodeJS app which models a management system for a university health center. It is functional for 3 types of users and offers features like adding students, doctors, scheduling appointments, etc..

## Technologies used
Back-end: NodeJS
Front-end: React
Database: MySQL

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
First ensure that you run a MySQL server on your computer and that NodeJS is installed. 

In the project directory, navigate to the `/client` folder. Here you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run the project locally import the `.sql` file into a local SQL tool like mySQL Workbench. Then navigate to the `/server` folder in the project directory. Here you can run:

### `Node Index.js`
Runs the server side of the project. 

## Credentials for Testing
Admin:  ID = 100  Password = 5429333ad1550e95e4b6323cae301d427b8924ef
        ID = 1007 Password = 380b9fa43ba0c9bbda68473435cdb2e9df93addf


Student:ID = 20014 Password = b01beb2136551ab2bbb7b08f3ec80169fe2b4926
        ID = 20009 Password = cae62d4a473cb4f275a6c33f63f92c83f5725995
        

Doctor: ID = 30012 Password = e1458ccba4db593ad60b2e8751286ef90a68c4bf
        ID = 30021 Password = d1198bfcc7861657d9748f9691da54120808f498

## Project Structure

The project is split in two parts : the root directory which is opened on the server side and the client directory which is opened on the client side.

Files opened on server side offer a PROMISE API `Axios` which communicates with the mySQL server : this PROMISE API offers basic CRUD (Create/Read/Update/Delete) services.

Files opened on client side offer an interface in order for the user to launch actions on the database or just in order to see the management system.

## Learn More

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Further Learning

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
