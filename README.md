# Mobile Cross Platform Programming (IF670)

Repository for Mobile Cross Platform Programming assignments (IF670-A)

## Links

- [Ionic](https://ionicframework.com/)
- [Capacitor with Ionic](https://capacitorjs.com/docs/getting-started/with-ionic)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Capacitor Live Reload](https://capacitorjs.com/docs/guides/live-reload)
- [react-google-maps-api](https://react-google-maps-api-docs.netlify.app/#section-getting-started)
- chrome://inspect/#devices -> inspect device (debug Android app with JavaScript console log)

## What's inside this repo

- **AlvinMartinDjong_00000035733_IF670_AL_UTS (midterm exam) - Bosen Jomblo**
  
  Midterm exam application - Bosen Jomblo. Create a list of candidates user can swipe to add to their target list or remove their target. Contains usage of: react context, swiper.js, dark theme toggler, ionic list, ionic swiper, ionic loading, ionic action sheets, ionic toast, and other ionic stuffs.
  
  **Live demo**: [click here](https://bosen-jomblo.vercel.app/)
  
  **Note**: Open in mobile screen view for better experience.

- **Tugas Individu (Individual Project) - Joule Clone**
  
  First assignment for the theory class, create a Joule (mobile application) clone, including the splash screen, sidebar, home page, and search page. The search page is functioning with dummy data (hint: type 'chicken').
  
  **Live demo**: [click here](https://jouleclone.vercel.app/)
  
  **Note**: Please open it in mobile view, it's not yet optimized for large screen view :)

- **Week 01 - Understanding Ionic Basic**

  Working with Ionic CDN and vanilla JavaScript to create a simple BMI calculator.

- **Week 02 - Ionic & React.js & TypeScript (Part 1)**
  
  Working with Ionic, React.js and TypeScript to create a simple BMI calculator.

- **Week 03 - Ionic & React.js & TypeScript (Part 2)**
  
  Re-create a better project structure with components and add feature to change between cm/kg and ft/lbs to calculate the BMI.
  
- **Week 04 - Ionic Routing & Add BMR Calculator to the previous project**

  Upgrade the previous week project with a routing to move between pages (Home, BMI Calculator, BMR Calculator) and create a feature to calculate BMR.
  
- **Week 05 - Ionic Style & Theme & Grid Systems**

  Apply custom colors (primary, secondary, tertiary) created with Ionic color generator and utilize Ionic responsive grid systems.
  
- **Week 06 - Navigation**

  Working with React Router (dynamic routes), Ionic Tabs, Side Menu, and Swipeable Item.
  
- **Week 07 - Ionic Alert, Ionic Toast, Ionic Modal, React Context**

  Continue the previous week project to add conditional platform check (isPlatform), alert, toast, and form with modal box. Data stored within a react context, including functions to add, update, and delete friend.
  
- **Week 08 - Capacitor, Camera, Context**

  Working mostly with Ionic, React, and Capacitor to utilize camera functionality for mobile and PWA. User can takes photo using a mobile device or from web browser (PWA). Data, including the photo taken, managed within React context and stored locally inside local storage. Data from local storage will be called first when application starts (apply to both web and mobile).
  
- **Week 09 - Capacitor Geolocations & React Google Maps API**

  Continue previous week project to implement Google Maps when adding new memory and view memories. Also utilizes Capacitor geolocation package to locate current location.
  
  **Note**: copy ```.env.example``` to ```.env.local``` and setup the google maps API key.
  
  **Live demo**: [click here](https://ionic-camera-map-pwa.vercel.app/)

- **Week 10 - Fetch data from API (HTTP Request)**

  Refactoring code structure from week 8 project: remove contexts and local storage implementation, replaced with API fetching (GET & POST) and store data in database (MySQL).
  
  **Note**: Requires the [Project API & SQL file](https://github.com/alvinmdj/mobile-cross-platform-api-w10).

- **Week 11 - Firebase Firestore & Storage**

  Refactoring code structure from week 8 project: remove contexts and local storage implementation, replaced with Firebase services, such as Firestore to store memories data and Firebase Storage to store photo.
  
  **Note**: Requires [Firebase](https://firebase.google.com/) configs.

## Requirements

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/)

## Installation

- Clone this repo:

```sh
git clone https://github.com/alvinmdj/mobile-cross-platform-if670.git
```

- cd to root folder for specified week:

```sh
cd mobile-cross-platform-if670/Week<xx>_000000035733_AlvinMartinDjong
```

- Install dependencies:

```sh
npm install
```

- Run (development):

```sh
ionic serve
```

## Useful Commands

### General

- Install Ionic CLI (First Time Only):

```sh
npm i -g @ionic/cli
```

- Create Ionic Project:

```sh
ionic start
```

- Run Development Server:

```sh
ionic serve
```

- Create a build for web app, this command will run 'react-scripts build':

```sh
# same as 'npm run build'
ionic build
```

### For Android Development

- Create required file and folder for Android project:

```sh
ionic capacitor add android
```

- This command will run react-build script and copy the build result from Ionic-React into assets folder in the Android project:

```sh
ionic capacitor copy android
```

- Sync Android (use this command if you encounter error like 'could not read script capacitor.settings.gradle' when trying to open the Android project with Android Studio):

```sh
ionic capacitor sync android
```

- Open the created Android project in Android Studio:

```sh
ionic capacitor open android
```

- Run Android with VS Code

```sh
ionic build
npx cap run android
```
