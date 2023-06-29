# REACT NATIVE BOILERPLATE

This project is a React Native boilerplate that can be used to kick-start a mobile application.
The boilerplate provides an architecture optimized for building solid cross-platform mobile applications through separation of concerns between the UI and business logic.

## Architecture
The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best.

Using modern Typescript So many Typescript features are indispensable now like hooks, functional component and really cool dependencies.

Presentational components are separated from containers.

Presentational components are small components that are concerned with how things look. Containers usually define whole application screens and are concerned with how things work: they include presentational components and wire everything together.

State is managed using global Redux stores.

When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.

With Redux, state is shared using global stores, and changes are predictable: actions are applied by reducers to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.

## Content
The boilerplate contains a clear directory layout to provide a base architecture for your application with some essential dependencies:

React Native (v0.71.4) application (in "ejected" mode to allow using dependencies that rely on native code)
Redux (v^8.0.5) to help manage state
Redux Toolkit (Query) (v^1.9.3) to improve redux api calls
Redux Persist (v^6.0.0) to persist the Redux state
React Native mmkv (v^2.6.2) which is an efficient, small mobile key-value storage
React Navigation (v^6.1.6) to handle routing and navigation in the app, with a splash screen setup by default
React I18Next (v^12.2.0) to handle internationalization in your app
prettier and eslint preconfigured for React Native
react-native-flipper (v^0.182.0) to debug react-native, 
redux-flipper (v^2.0.2) to debug redux, 
navigation devtool (v^6.0.18) to debug navigation

## Directory Layout

src/components: presentational components
src/hooks: hooks of the app, you will have the useTheme hook to access the theme
src/navigators: react navigation navigators
src/screens: container components, i.e. the application's screens
src/services: application services, e.g. API clients
src/stores: redux actions, reducers and stores
src/theme: base styles for the application
src/translations: application strings, you can add languages files and be able to translate your app strings

## Getting Started

### Environment Setup

- Please check this official document for environment setup [Link](https://reactnative.dev/docs/environment-setup)

To get a local copy of this project just do the following:

-   Clone the repository using `https://github.com/Hector096/React-Native-Boiler-Plate.git`
-   Browse into the project's directory using `cd React-Native-Boiler-Plate`
-   Install all the dependencies using `npm install`

### Android

- Setup Android studio (Required Java to be installed) with android emulator.
- Run `npm run android` or you can run from android studio itself.

### IOS

- Setup Xcode environment and IOS Simulator on MacOs.
- Run `npm run ios` or you can start from Xcode itself.


## Redux store 🗃️

This boilerplate use Redux-Toolkit and RTKQuery to deal with business side. We use them because they are often used by the community, very trendy and easy to debug.

RTKQuery is a powerful data fetching and caching tool. So we using it for asynchronous api calls.

Redux-Toolkit is intended to be the standard way to write Redux logic. So we using it for synchronous operations.

For the RTKQuery side, all is located in Services. You will find api.js file that contains the declaration of the fetchBaseQuery customized with an interceptor and the createApi with the fetchBaseQuery and empty endpoints.

Next to the Services/api.js file you have a modules folder. Each module corresponds to an entity type and will inject endpoints into the exported api const of Services/api.js


## Theme 🎨

The Theme folder, at the root of project, includes a nice kit for building and maintaining the UI of application. It helps with variables and reusable classes to create harmony between application screens.

By default, the boilerplate comes with a default theme and a default dark theme. The default theme is build around the different files at the root of src/Theme, by default:

Common.js
Fonts.js
Gutters.js
Images.js
Layout.js
Variables.js
the default dark theme is located in src/Theme/themes/default_dark.

The Boilerplate Theme system is based on layers overriding.
In other words, the default theme is the "base theme" of the application. On the top of it, if the darkMode is on, the base theme is overrided by style classes or variables of the default dark theme.

Moreover, if we add a new theme into src/Theme/themes, for example : custom. The theme system will override the default theme classes by the ones of custom theme. If the dark mode is activated, the theme system will try to get a custom_dark directory if exists, and override the theme too.

## Splash screen & loading data 💾

In many applications, you need to load data from API before displaying any content. To do that, we built a solid navigation based on a splash screen to load data before the content shows.

In StartupContainer, the init function is where you can create asynchronous tasks like fetching data.

## Add a lang translation 🌐

The boilerplate includes an i18n feature to store and translate String data. The package used is i18next you can use their documentation for not included functionnalities.

All languages files are located in src/Translations/resources. By default, there is the en.js file. To add a new language just cp en.js fr.js and export it in : src/Translations/resources/index

Change the language with i18n.changeLanguage('fr')

## Using Flipper 🐛
Flipper is a debugger for React native and, with a plugin, for redux too. All you have to do is [download](https://fbflipper.com/)Flipper.
