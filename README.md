# Mobile Cross Platform Programming (IF670)
Repository for Mobile Cross Platform Programming assignments (IF670-A)

## Links
[Official Ionic Docs](https://ionicframework.com/docs/intro/cli)
[Capacitor with Ionic](https://capacitorjs.com/docs/getting-started/with-ionic)

## What's inside this repo

- **Tugas Individu**
  
  First assignment for theory class, create a Joule (mobile application) clone, including the splash screen, sidebar, home page, and search page. The search page is functioning with dummy data (hint: type 'chicken').
  
  **Live demo**: https://jouleclone.vercel.app/
  
  **Note**: Please open it in mobile view, it's not yet optimized for large screen view :)

- **Week 01 - Understanding Ionic Basic**

  Working with Ionic CDN and vanilla JavaScript to create a simple BMI calculator.

- **Week 02 - Ionic & React.js & TypeScript (Part 1)**
  
  Working with Ionic, React.js and TypeScript to create a simple BMI calculator.

- **Week 03 - Ionic & React.js & TypeScript (Part 2)**
  
  Re-create a better project structure with components and add feature to change between cm/kg and ft/lbs to calculate the BMI.

## Requirements
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/)

## Get Started
- Clone this repo:
```sh
git clone https://github.com/alvinmdj/mobile-cross-platform-if670.git
```

- cd to folder for specified week:
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

- Create a build folder for the project, run 'react-scripts build':
```sh
// same as 'npm run build'
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

- Open the created Android project in Android Studio:
```sh
ionic capacitor open android
```

- Sync Android (use this command if you encounter error like 'could not read script capacitor.settings.gradle' when trying to open the Android project with Android Studio):
```
ionic capacitor sync android
```
