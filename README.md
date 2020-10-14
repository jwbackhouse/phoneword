# Phonewords

A simple web application to generate a list of all possible letter combinations from the numbers on a T9 keyboard (i.e. an old mobile phone).<br />
For example, the numbers 23 correspond to all possible combinations of 'abc' and 'def'.


## Technology
Built using an Express server and React / Redux frontend.


## Commands
#### `npm run dev`
Run Express server and React web server concurrently.
Currently running on ports 8082 / 8080. These can be adjusted as follows:
- For server, export PORT environment variable
- For front end, update the `start` script in client/package.json

#### `npm test`
Run test scripts on Express server (see below for client side tests).
<br />
<br />
#### In /client directory
#### `npm run build`
Builds the app for production to the `build` folder.

#### `npm test`
Run test scripts for React app.

#### `npm eject`
One-way operation to allow you to adjust the configuration and build tools.<br />
See [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for details.