// This works... but it actually compiles to a larger bundle size because when
// it is converted to regular JavaScript the Class has to be structured. We have
// another alternative in TypeScript (and in other Class based languages like
// C#, Java, etc.) and that is called Interfaces. Interfaces are essentially
// code contracts Interfaces allows us to enforce the shape of data expected
// (including optional properties - position in this example). set Interface
// with optional parameter 'position' by using '?'
interface Settings {
  title : string;
  color : string;
  position?: string;
}

// use Interface for Function parameters
function initialize(settings : Settings) {}

initialize({title: 'Blue', color: 'blue'});

// use Interface for Class (notice implements keyword)
class CustomerSettings implements Settings {
  title = 'Blue';
  color = 'blue';
}

// use Interface for Object
let settings : Settings = {
  title: 'Blue',
  color: 'blue'
}

// use Interface for Class parameters
class EmployeeSettings {
  constructor(settings : Settings) {
    const {
      title,
      color,
      position = 'first'
    } : Settings = settings;
    console.log(title, color, position);
  }
}

let empSettings = new EmployeeSettings(settings);

/*
[JS Code]
"use strict";
function initialize(settings) {
}
initialize({
    title: 'Blue',
    color: 'blue',
});
class CustomerSettings {
    constructor() {
        this.title = 'Blue';
        this.color = 'blue';
    }
}
let settings = {
    title: 'Blue',
    color: 'blue',
};
class EmployeeSettings {
    constructor(settings) {
        const { title, color, position = 'first' } = settings;
        console.log(title, color, position);
    }
}
let empSettings = new EmployeeSettings(settings);
[LOG]
"Blue",  "blue",  "first"
*/
