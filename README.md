# Heal 🧘‍♀️
Heal is your personal companion on the journey to recovery. Whether you're bouncing back from an injury or working on overall wellness, Heal empowers you to track your injuries, log exercises tailored to your recovery, and monitor your pain levels. Take charge of your healing process with a personalized approach. Your path to well-being starts with Heal.

#### Main features

- <b>Pain tracker</b> [work in progress]: this feature allows you to register your pain levels on a daily basis and observe your progress over time.
- <b>Exercises</b> [coming soon]: in this section you'll be able to log the rehabilitation exercises you did for the day and how you felt while doing them.

## About this project
The technologies used so far are:
- ⚛️ [React Native](https://reactnative.dev/) with [Typescript](https://www.typescriptlang.org/) as the development framework. 
- 🎨 [React Native Paper](https://callstack.github.io/react-native-paper/) as design system.
- 🧪 [Jest](https://jestjs.io/) as the testing framework. 
- 🦉 [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) to help test component behaviour and not implementation.

### To run it 
For iOS you will need Xcode set up to launch the simulators, follow this [guide](https://reactnative.dev/docs/environment-setup?guide=native&platform=ios). Follow this other [guide](https://reactnative.dev/docs/running-on-device?platform=ios) if you want to run it on an actual device.
```
$ npm run ios
```

For Android you will need Android Studio set up to launch the simulators, follow this [guide](https://reactnative.dev/docs/environment-setup?platform=android). Follow this other [guide](https://reactnative.dev/docs/running-on-device?platform=android) if you want to run it on an actual device.
```
$ npm run android
```


### To run the tests
```
# unit tests
$ npm run test

# unit tests in watch mode
$ npm run tdd
```