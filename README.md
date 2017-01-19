# A demo with Progress bars in React Js


##Tools/Libraries used :

React Js for ui framework

Webpack for bundling assets : Javascript/ CSS

Jest for testing

Axios for ajax calls

Eslint for linting

##Instructions to build and run the demo

npm install

npm build

npm start

###To run lint:
npm run lint

##Notes
All UI Components except ProgressBarControl are dumb, which gets all its data via props and just renders the ui. ProgressBarControl component acts as the container component 
which encapsulates all child components and manages the state (this can be useful to later move the state management and transitions to a library like redux).

Node JS version used : v6.9.4

##Screenshot

![Alt text](https://cloud.githubusercontent.com/assets/134557/22097978/09da8e30-de78-11e6-875b-99ad297b7495.png "Optional title")
