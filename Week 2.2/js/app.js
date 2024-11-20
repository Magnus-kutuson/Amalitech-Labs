
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
    age : 36,
};
function info(homeTown, city){
    console.log(`His name is ${this.name} and he is ${this.age}, he comes from ${homeTown} and lives in ${city}`)
}


info.call(anotherPerson, "Obuasi", "Accra");
info.apply(anotherPerson, ["Obuasi", "Accra"]);

const infoPerson = info.bind(anotherPerson, 'Obuasi', 'Accra')

infoPerson()




let btn = document.getElementById('new-btn')
let btn2 = document.getElementById('new-btn')


btn.addEventListener('click', function handleClick() {  
    console.log(`${this.textContent}`);  
    
});

btn2.addEventListener('click', handleClick=() =>{  
    console.log(`${this.textContent}`);  
    
});



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



