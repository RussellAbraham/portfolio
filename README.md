# Portfolio Website

## Description

## Getting Started

## Prerequisites

You need to have the following software installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Installing

1. Clone the repository:

    ```sh
    git clone https://github.com/RussellAbraham/portfolio.git
    cd backbone-requirejs-demo
    ```

2. To install node_modules - copies have been included in src/vendor/ to simplify the build:

    ```sh
    npm install
    ```

3. Test any changes made to the unbuilt application by running the development server

    ```sh
    npm start
    ```
    A taskrunner is included to restart the server when changes are made, the browser will still need to be refreshed for changes to display.

    ```sh
    npm run dev
    ```

4. Run the optimization script:

    ```sh
    npm run build
    ```

5. Open `index.html` in your browser to see the demo. After running build, a server should no longer be required to to load templates with `requirejs-text`

## Built With

- [Backbone.js](https://backbonejs.org/) - The JavaScript library used for building MV* applications
- [RequireJS](https://requirejs.org/) - The JavaScript file and module loader
- [r.js](https://requirejs.org/docs/optimization.html) - The optimizer used to compile the JavaScript files for production

## Notes

A note about `Underscore.js`. The version installed with npm will not be exposed to the global environment when included in `config.js`. 

You will have to define underscore as a dependency in all the modules you need to use the library in. This may have a better memory footprint. 

For ease, inside of src/vendor/underscore is a different version of underscore that will be scoped within the global environemt when add to the `congig.js` script. 


```javascript
/* Version Included in vendor */
define(['backbone'], function(Backbone) {

});
/* Version downloaded with NPM */
define(['backbone', 'underscore'], function(_) {

});
```
