//Immediately Invoked Function Expressions (IIFE)
//IIFE is used to reduce pollution from global scope

function chai(){
    console.log(`DB Connected`)
}

// IIFE form

(function chaii(){
    console.log(`db connected`)
})();    //remember to put semicolon

//syntax....()();
