// Object Methods and this

const Person={
    name : "Magnus",
    age : 56,
    greet(){
        console.log(`Hello, my name is  ${this.name}   and i'm ${this.age}   years Old`);
        
    }
}

Person.greet()

const anotherPerson = {
    name : "James",
    age : 36
};


console.log(Person.greet.call(anotherPerson));
// console.log(Person.greet.apply(secondPerson));

const greetperson = Person.greet.bind(anotherPerson)

greetperson()


// Event Handlers and this

let btn = document.getElementById('#new-btn')
let btn2 = document.getElementById('#new-btn')


btn.addEventListener('click', function handleClick() {  
    console.log(`${this.textContent}`);  
    
});

btn2.addEventListener('click', handleClick=() =>{  
    console.log(`${this.textContent}`);  
    
});

// Private Data with closures and this

function createCounter() {  
    let count = 0; 

    return {  
        increment() {  
            count++;  
            console.log(`Increase ${count}`);  
        },    
        getCount() {  
            console.log(count);  
        }  
    };  
}  

const counter = createCounter();  
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount())



