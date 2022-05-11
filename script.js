//A script that prints out a randomly created message when run.

//const testMessage = "This is a test";

//Lists for the different components of the message to be randomized
const subjects = ["Death", "Light", "Skulls", "Blood", "Purity", "Truth"];
const verbs = ["becomes", "eats", "forgets", "for", "dances with", "plays with"];
const objects = ["you", "him", "them", "her", "it", "the Skull Throne", "the Blood God"];

//A function that picks a random element from a list
function getElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



//The function that creates the message
function message(arr1, arr2, arr3) {
    return `${getElement(arr1)} ${getElement(arr2)} ${getElement(arr3)}.`;
}


//Print function
function printMessage(message) {
    console.log(message);
}

/*Test loop
for (let i = 0; i <= 4; i++) {
    printMessage(message(subjects, verbs, objects));
}*/


function program(arr1, arr2, arr3) {
    let randomMessage = message(arr1, arr2, arr3);
    printMessage(randomMessage);
}
