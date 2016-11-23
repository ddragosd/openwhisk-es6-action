OpenWhisk Action with ECMAScript6
==================================

This is a sample OpenWhisk project showing how to write actions using ES6 standard.
 
It comes with:
 - ES6 support through [Babel](https://babeljs.io)
 - Concatenation logic if the action has multiple files via [Babel](https://babeljs.io) and [Browsify](https://github.com/substack/node-browserify)
 - Unit Testing support with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
 - Code coverage with [Istanbul](http://gotwarlost.github.io/istanbul/)
 
## Installing

 ```bash
 npm install
 ```
 
 This command installs the node modules and generates the source code for the action at `openwhisk-es6-action-0.0.1.js`.
 
 The ES6 code for the action is found in [src/action/hello-world.js](src/action/hello-world.js) and the other files that are bundled with the code of the action are defined in the [modules](src/modules) folder.
  Only the modules defined in the `src` folder *should* be concatenated. 
  
  The bundle eventually [exposes](package.json#12) the `main` variable/function in order for OpenWhisk to invoke the action correctly:
  ```javascript
  var main=/**concatenated code**/;
  ```
  
 
## Running the tests locally
 
 ```bash
  npm test
  ```
  
  Should print 
  
  ```text
  Say hello
    with name parameter
      ✓ should say Hello, ECAMEscript6


  1 passing (8ms)

================================================================================
Writing coverage object [/Projects/openwhisk/openwhisk-es6-action/coverage/coverage.json]
Writing coverage reports at [/Projects/openwhisk/openwhisk-es6-action/coverage]
================================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 37/37 ), 2 ignored
Branches     : 93.75% ( 15/16 ), 5 ignored
Functions    : 100% ( 10/10 )
Lines        : 100% ( 10/10 )
================================================================================
  ```
  
  
## Running the action in OpenWhisk

First create the action:

 ```bash
 > wsk -i action create hello-es6 ./openwhisk-es6-action-0.0.1.js

 ok: created action hello-es6
 ```

Then invoke the action:

```bash
> wsk -i action invoke hello-es6 --blocking --result --param name ECMAScript6

  {
      "payload": "Hello, ECMAScript6!"
  }
```

 To delete the action:
  
  ```bash
  > wsk -i action delete hello-es6
   
 ok: deleted action hello-es6
  ```
  
