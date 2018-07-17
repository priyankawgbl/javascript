

var greetObject = {
    message: "welcome to my blog",
    /*this keyword in the greeting function
      point to greetObject when called using greetObject
    */

    greeting: function(lang){
       console.log("Lang is ", lang);
           return this.message;
    }
}

greetObject.greeting.call(greetObject, "javascript" );

greetObject.greeting.apply(greetObject, ["ruby","javascript"] );

var greetObject = {
    message: "welcome to my blog",
    /*this keyword in the greeting function
      point to greetObject when called using greetObject
    */

    greeting: function(lang1,lang2){
       console.log("Lang is ", lang1,lang2);
           return this.message;
    }
}

var binding = greetObject.greeting.bind(greetObject, "javascript" );
binding("python")