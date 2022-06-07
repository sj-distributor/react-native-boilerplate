# React Native Boilerplate

## Getting started

Clone the repo

```
git clone -o seed -b main --single-branch https://github.com/sj-distributor/react-native-boilerplate.git
```

Install project dependencies

```
yarn
```

Launch the ios

```
yarn run ios
```

Launch the android

```
yarn run android
```

## Quick Start

The react native boilerplate project's structure will look similar to this:

```
reactnativeboilerplate
├── app
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── utils
│   ├── app.tsx
├── config.js
├── android
├── index.js
├── ios
├── package.json
└── README.md

```

**assets**
static assets

**components**
react public components

**hooks**
react public hooks

**models**
react model

**navigation**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
