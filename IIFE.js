// Immediately Invoked Function Expression

// When writing scripts (especially in the browser), global variables can clash. IIFE keeps variables local.
// Useful when building modules or features that should not expose internal variables.
// You might want to run initialization logic as soon as your script loads.
// Before let existed, IIFEs were used to preserve the loop variable’s value inside closures:

// Declaration of IIFE

(function fun() { // this is also known as named IIFE
    console.log("ABCDSHJFGK")
})(); // semiclon is necessary to indicate where the IIFE finction should stop

( () => {
    console.log("ABSCDSEF") // IIFE in form of arrow function
})();