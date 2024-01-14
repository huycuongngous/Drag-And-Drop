# What is Drag And Drop Application for Content Management System?

Implementing drag-and-drop functionality in a Content Management System (CMS) can enhance the user experience and make it easier for users to organize and manage content. 

## What did I apply to make it the best?

* Clean Architecture. I create folders as well as files based on the specific function to make a whole clean project. For instance, component folders for storing components in project, constants folder for storing constant variables, pages folder for storing pages with specific routes, redux folder for creating redux core, utils folder for saving reused utility functions
* Principle. I try to apply the "S" in SOLID principle to every ReactJS-NextJS project. The "S" stands for "Single Responsibility" and means each component should only take on one specific responsibility.
* Design Pattern. I apply Redux-Core pattern for managing global state in this project

## How do you setup and run this project?

I recommend you use nvm to manage many NodeJS version in you machine

1. Download and install NodeJS version 18.18.0 or later. In this project, I am using Node 18.18.0 [Nodejs download](https://nodejs.org/en/download).

1. Pull my project to your machine [https://github.com/huycuongngous/Drag-And-Drop](https://github.com/huycuongngous/Drag-And-Drop).

1. Install the dependencies package

        $ npm install

1. Run the project in dev mode

        $ yarn dev

This will start a local web server and open a browser tab to the local server.