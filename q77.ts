//Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetuser(name: string ="anonymous") {
    console.log(`Hello,${name}!`);
}

greetuser("Sara");     // Outputs: Hello, Sara!
greetuser();          // Outputs: Hello, anonymous!

