export const intro = 'Hello, World!';


// What is typescript? 
// TypeScript is a superset of JavaScript that compiles to plain JavaScript.
// It makes development a lot safer by providing type checking and type inference.

/*
Many other languages, such as the recently introduced C# have these features (int Name... for example), but javascript does not.
Hence, Microsoft created a type-safe version of the language called TypeScript.
*/


// Let's put this into practice.

// Plain javascript function

/*const addOne = (input) => {
    return input + 1; //Note that the + operator used on a number and string will return a string in JS;
}*/

// Can you spot a possible problem that can arise when the function is being called? (and why typescript complains?)












// Typescript function
/**
 * Using typescript we can create a blueprint telling the function what type to expect
 * and what type to return. If the conditions are not met, typescript complains,
 * preventing the code from running in the first place. The javascript seen above would ignore this issue,
 * which would lead to catastrophic errors.
 * @param input Here we are using the type annotation to tell the compiler that the input parameter is of type number.
 * @returns 
 */

const addOne = (input: number)=> {


    return input + 1;


    
}


console.log(addOne(1));




// Assigning types

/**
 * Assigning types in typescript is done using : (type annotation)
 * You can also assign values on the same line
 */

let myRandomNumber: number = 5;




/**
 * Lets try assigning the wrong type intentionally
 */

//myRandomNumber = "s" // This will not compile
myRandomNumber = 2.5 // This WILL compile



// Creating your custom types


/**
 * Sometimes, you may want to use more complex data types like objects. How does that work knowing type annotation is necessarry?
 * You can create a custom type using the interface (or type) keyword. Which is a blueprint for creating objects with those attributes.
 */


type Person = {

    name: string;
    age: number;
    height: number;
    gender: 'Male' | 'Female' | 'Non-binary' // You can also set values as types in cases like gender where you don't want to generalize with string
}


// Create an object of type person

const Ayonete: Person = { name: 'Ayonete', age: 20, height: 160, gender: 'Female'}

//console.log(Ayonete.name)


// Less common primitive types

let arrayType: number[] = [1,2] // You could use the [] symbol to depict an array type or...

let arrayType2: Array<any> = [] // You could use the 'Array' inbuilt type which is similar to the person type we created above behind the scenes.

// You can also use the 'any' type to denote that you don't know what type of data you are going to be working with (not advised unless absolutely necessary)

// Handling null and undefined

/**
 * Sometimes, you may expect null or undefined values.
 * Typescript has special types to help you handle this. null and undefined are the two types.
 * You can use the '?' symbol to denote that a value is optional when calling it.
 */

let possiblyNull: string | null = 'Ayodeji'; // the value can be string or null (null is a primitive type)


possiblyNull = null; // no complaint here because it's one of the expected types

// values inside objects may also be null or undefined. How do we handle this?

type PossiblyNullPerson = {
    name: {firstName: string, lastName?: string} | null ;
    age: number;
    height: number;
    gender:'Male' | 'Female' | 'Non-binary'| null 
    //assume null here is for when the user does not specify
    // Undefined possibility can be set by adding a question mark, just like with lastName above/
}


let joseph: PossiblyNullPerson = {
    name: {firstName:'Joseph', lastName:undefined},
    age: 20,
    height: 160,
    gender: null
}


//console.log(joseph.name.lastName) // Why does this not work??

// When we're answering possibly null values that contain data, we can tell typescript that we expect it to be possibly null by adding a question mark.

console.log(joseph.name?.lastName) // This will work.


// Type inference: Typescript has the ability to predict or assume the type of a variable based on its usage. The type remains constant even if the value changes.

let TypeInferred = 'This is a string';

// Hover over typeInferred and see what happens

// Try to reassign to a new type

 // This will not compile because the type is constant.






