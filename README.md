# ASPIRE-APP - Prashant Shekhar Singh


# Getting Started

- open a terminal & move to the root directory of the project
- run `npm install`to install the deps
- run `npm start` to start the server
- visit [http://localhost:3000](http://localhost:3000/) to see the app running

# Deployment

- Any changes pushed will automatically be deployed through netlify
- visit [Aspire App](https://aspire-app-challenge.netlify.app/) to see the app in action.

# Functional specifications

- Created a simple single-page application as shown in the screenshot image
- Created a navigation sidebar which has different options like Dashboard logo and links like Home, Cards etc.
- Add new card using a modal form - form takes all information about the card
- User can Freeze/Unfreeze card 
- Made Cards as the default route
- Created placeholder pages for other routes and a 404 page

# Non Functional specifications

- Tested on different browsers(Chrome, Firefox, Edge) and OS (Mac, Windows) to ensure it is working fine
- Use of React Hooks: Used React hooks like useEffect, useState etc.
- Clean code: Tried to write a clean and indented code (which follows Prettier code formatting)
- Add required validation for form
- Mock data usage wherever possible and use local storage for initial rendering of cards
- proper naming conentions 

# Code Structure

The project has the following directory structure:

- `aspire-app/`
  - `node_modules/`: Contains all the dependencies of the project.
  - `public/`: Contains static files and assets.
  - `src/`: Contains all the source code for the project.
    - `components/`: Contains reusable components like Accordion, AppLayout, Modal, SideBar, and Tabs.
    - `icons/`: Contains all the icon files used in the project. Icons not uploaded to cdn goes here.
    - `pages /`: Contains different pages like Cards, Credit, Home, Payments, and Settings.
    - `core /`: Contains core files required for project like constants, helper functions, api calls, etc
    - `App.css`: Contains global styles.
    - `App.tsx`: The main App component. Contains routes.
    - `index.css`: Contains styles for the index file.
    - `index.tsx`: The entry point of the project.
  - `.gitignore`: Tells git which files it should not track nor maintain a version history for.
  - `package.json`: Lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rules.
  - `README.md`: The file you are currently reading.
  - `tsconfig.json`: Specifies the root files and the compiler options required to compile the project.


# Techs used

- Used React.js functional components
- Used react-router v6 for routing for navigating through different pages.
- Used styled-components for styling needs
- Used Typescript for static typing, better IDE support, ESNext features, interfaces
- Used Netlify for deployment

# Unit testing

- Not included due to time constraints.

# Further Improvements/Changes which could be done later

- Add unit test cases
- add integration tests
- add husky hooks 
- Add more robust validation for forms.
- Move inline styles to styled component
- error handling like 404, 500 pages, api error handling
- add eslint, prettier config
- use tailwind for css (initially thought of using it but could not due to time constraint)

