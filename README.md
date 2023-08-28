# Find a coach app

Welcome to the Coach Registration project! This is a web application that allows users to register as coaches, submit applications, and maintain their coach status. The project utilizes Firebase for data storage, including user registrations and mentor applications. Below, you will find an overview of the project, installation instructions, and explanations of its features.

## Project Overview

The Coach Registration project is designed to provide a platform for coaches to register, submit applications, and manage their mentorship journey. Registered mentors can access their dashboard, view their application status, and check for your requests. Firebase Realtime Database is used to securely store user data, ensuring that mentorship applications are preserved even after page refreshes.

## Features

- User Registration and Login:
  - New users can register to become mentors.
  - Existing coaches can log in to access their dashboard.

- Coaches Dashboard:
  - Coaches can view new requests.
  - Mentorship progress and details are displayed in an intuitive interface.

- Mentorship Application:
  - Users can submit applications to ask for coach help.
  - Submitted applications are stored in Firebase Realtime Database.

- Data Persistence:
  - User registrations, coach applications, and profile updates are saved on Firebase.
  - Data remains intact even after page reloads.

- Route Guards:
  - Implemented route guards to protect restricted routes, ensuring only authenticated coaches can access certain pages.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
