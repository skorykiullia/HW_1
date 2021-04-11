
// zadanie 1
const Employer = function ({id, name, surname, salary, workExperience, isPrivileges, gender }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}
const employeeObj = new Employer(emplyeeArr[1]);
 
console.log(employeeObj); 

/// 2 sposob


class Employer1{
    constructor({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.workExperience = workExperience;
        this.isPrivileges = isPrivileges;
        this.gender = gender;
        
    }
}
const employeeObj5 = new Employer1(emplyeeArr[1]);
 
 console.log(employeeObj5); 



//zadanie 2


Employer.prototype.getFullName = function () {
    return console.log(this.surname + ' ' + this.name); 
}
const employeeObj1 = new Employer(emplyeeArr[3]);

employeeObj1.getFullName();


///2 sposob

class Employer2{
    constructor({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.workExperience = workExperience;
        this.isPrivileges = isPrivileges;
        this.gender = gender;
        
    }
    getFullName1(){
        return this.surname + ' ' + this.name;
    }
}
const employeeObj6 = new Employer2(emplyeeArr[3]);

console.log(employeeObj6.getFullName1());




 
//zadanie 3



let createEmployesFromArr = (myArray) => {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++){
    const employeeObj3 = new Employer(myArray[i]);
        newArray[newArray.length] = employeeObj3;
    }
    return (newArray);
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
 console.log(emplyeeConstructArr);


//zadanie 4


let getFullNamesFromArr = (myArray) => {
    let newArray1 = [];
    for (let i = 0; i < myArray.length; i++){
        const employeeObj4 = new Employer(myArray[i]);
        const string = `${employeeObj4.name}  ${employeeObj4.surname}`;
        newArray1[newArray1.length] = string;
    }
    return console.log(newArray1);
};
getFullNamesFromArr(emplyeeConstructArr) 

// zadanie 5

const getMiddleSalary = (myArray) => {
    let middleSalary = 0;
    let generalSalary = 0;
    for (let i = 0; i < myArray.length; i++){
        const employeeObj4 = new Employer(myArray[i]);
        generalSalary += employeeObj4.salary;
        }
    middleSalary = generalSalary / myArray.length;
    return console.log( middleSalary);
    
}

getMiddleSalary(emplyeeConstructArr)


// zadanie 6

const getRandomEmployee = (myArray) => {
    let rand = Math.floor(1 + Math.random() * (myArray.length));
    console.log(rand);
    for (let i = 0; i < myArray.length; i++) {
        const employeeObj4 = new Employer(myArray[i]);
        if (rand === employeeObj4.id) {
            console.log(employeeObj4);
        }
        
    }

}
getRandomEmployee(emplyeeConstructArr)


//zadanie 7

class Employer3{
    constructor({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.workExperience = workExperience;
        this.isPrivileges = isPrivileges;
        this.gender = gender;
        
    }
    get fullInfo() {
        
        
     return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}, salary - ${this.salary}, workExperience - ${this.workExperience}, isPrivileges - ${this.isPrivileges},  gender - ${this.gender}.`;
        
    
    };
   set fullInfo({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
       if (id !== undefined) { this.id = id };
       if (name !== undefined) { this.name = name };
       if (surname !== undefined) { this.surname = surname };
       if (salary !== undefined) { this.salary = salary };
       if (workExperience !== undefined) { this.workExperience = workExperience };
       if (isPrivileges !== undefined) { this.isPrivileges = isPrivileges };
       if (gender !== undefined) { this.gender = gender };
    }

}

const employeeObj7 = new Employer3(emplyeeArr[0]);
console.log(employeeObj7.fullInfo);
employeeObj7.fullInfo = { name: 'Vasya',  salary: 9000, gender: 'ttttt',email: 'nnnn', tel: 67788 };
console.log(employeeObj7); 