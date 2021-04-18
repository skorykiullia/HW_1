// zadanie 1


 
const citiesAndCountries1 = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
const otvet1 = [];
for (let key in citiesAndCountries1) {
    let string = `${key} eto ${citiesAndCountries1[key]}`;
    otvet1[otvet1.length] = string
}
console.log(otvet1);



const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
const otvet = [];
for (let [key, value] of Object.entries(citiesAndCountries)) {
    let string = `${key} eto ${value}`;
    otvet.push(string);
    
   
}
console.log(otvet);


// zadanie 2
function getArray(amount) {
    if (amount % 3 === 0) {
        let mass1 = [];
    for (let i = 0; i < amount / 3; i++){
        let mass2 = [];
        for (let j = 0; j < 3; j++){
            mass2[j] = j + 3 * i + 1;
            
        }
        mass1[i] = mass2;
    }
        console.log(mass1);
    }
    else {console.log('oshibka');}
    }
getArray(12);



// zadanie 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
}
function getNameOfDay(lang, day) {
    
    
    if ((lang === 'ru' || lang === 'en') && (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6 || day === 7)) {
        if (lang === 'ru') { 
            
            console.log(`'${namesOfDays.ru[day-1]}'`);
        }
        else {
          console.log(`'${namesOfDays.en[day-1]}'`);  
        }
         
    }
    else {console.log('vveli nedopustimye dannye');}
 }
getNameOfDay('en', 4)


// zadanie 4 


let mass4 = [];
function min(mass4) {
    let res = mass4[0];
    let res1 = mass4[mass4.length - 1];
    for (let u = 0; u < mass4.length; u++) {
        for (let i = u + 1; i < mass4.length; i++) {
            if (mass4[u] === mass4[i]) {
                res = 'osh';
                res1 = 'ibka';
                break;
            }
        }
        
        if (mass4[u] < 0 || mass4[u] % 1 !== 0) {
            res = 'osh';
            res1 = 'ibka';
            break;
                
        }
        else if (mass4[u] < res) {
            res = mass4[u];
            for (let i = mass4.length - 1; i >= 0; i--) {
                 
                if ((mass4[i] > res) && mass4[i] < res1) {
        
                    res1 = mass4[i];
                    }
                else if (res === res1) {
                    res1 = mass4[i-1];
                     }
                     }
            }
        }
    let res2 = res + res1;
    //  console.log(res);
    //  console.log(res1);
    //  console.log(res2);
    return res2
    
}

console.log(min([5, 47, 2, 34, 76]));

// zadanie5

function degree(a, n) {
    let b = a;
    if (n === 0)
    {
        b = 1
    }
    
    for (let k = 1; k < n; k++) {
        b *= a;
        
        }
        
            return b      
}
let mass5 = [];
        
function number(mass5) {
    let res3 = 0;
    for (let i = 0, j = (mass5.length - 1); i < mass5.length, j >= 0; i++, j--){
    
    if (mass5[i] === 1) {
        
        res3 += degree(2, j); 
        
        
    }
}
    return res3
}

console.log(number([1, 1, 1, 0, 0, 1]));

            