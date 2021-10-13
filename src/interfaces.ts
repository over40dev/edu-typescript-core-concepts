// This works... but it actually compiles to a larger bundle size because when it is converted to regular JavaScript the Class has to be structured.
// We have another alternative in TypeScript (and in other Class based languages like C#, Java, etc.) and that is called Interfaces.
// Interfaces are essentially code contracts
// Interfaces allows us to enforce the shape of data expected (including optional properties - title in this example).
interface Settings {
  title?: string;
  color: string;
}

function initialize(settings: Settings) {
console.log(settings);
}

initialize({
  title: 'Blue',
  color: 'blue',
});

/*
[JS Code]
"use strict";
function initialize(settings) {
    console.log(settings);
}
initialize({
    title: 'Blue',
    color: 'blue',
});
[LOG]
{
  "title": "Blue",
  "color": "blue"
} 
*/

