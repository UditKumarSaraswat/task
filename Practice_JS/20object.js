// Object:
const users = [
    {
        firstName: "Udit",
        lastName: "Kumar Saraswat",
        age: 19      
    },
    {
        firstName: "Vaibhav",
        lastName: "singh",
        age: 20
    },
    {
        firstName: "Mohit",
        lastName: "Sharma",
        age: 19   
    },
    {
        firstName: "Deepak",
        lastName: "Thakur",
        age: 21    
    },
    {
        firstName: "Shiva",
        lastName: "Chaudhary",
        age: 21    
    },
    {
        firstName: "Sagar",
        lastName: "Chaudhary",
        age: 25        
    },
    {
        firstName: "Priyanshu",
        lastName: "Tomar",
        age: 18
    },
    {
        firstName: "Ram",
        lastName: "Bansal",
        age: 23    
    },
    {
        firstName: "Prashant",
        lastName: "Tomar",
        age: 24   
    },
    {
        firstName: "Manoj",
        lastName: "Saraswat",
        age: 22    
    },
    {
        firstName: "Ashish",
        lastName: "Kumar",
        age: 23       
    },
    {
        firstName: "Harish",
        lastName: "Chaudhary",
        age: 26
    },
    {
        firstName: "Mohit",
        lastName: "Upadhay",
        age: 25    
    },
    {
        firstName: "Abhay",
        lastName: "Jadon",
        age: 22    
    },
    {
        firstName: "Yash",
        lastName: "Upadhay",
        age: 20    
    },
    {
        firstName: "Mayank",
        lastName: "Saraswat",
        age: 22        
    },
    {
        firstName: "Rahul",
        lastName: "singh",
        age: 23
    },
    {
        firstName: "Tushar",
        lastName: "Sharma",
        age: 26   
    },
    {
        firstName: "Shivam",
        lastName: "Sharma",
        age: 21    
    },
    {
        firstName: "Manish",
        lastName: "Sharma",
        age: 20
   
    }

]


// NAME OF THE USERS

const names = users.map(users => users.firstName);
console.log(names);

// full name of Users

const output = users.map(user => user.firstName + " " + user.lastName);
console.log(output);

//average age of users:

const output2 = users.reduce(function(acc,curr){
    acc = acc+curr.age
    return acc
},0)
console.log(output2/users.length);

//Name of users age less than 20

const outputFilter = users.filter (user => user.age <20).map((namee)=> namee.firstName);

console.log(outputFilter);


