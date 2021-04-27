class Student {
  constructor(enrolee) {
    for (let key in enrolee) {
      if (key === 'course') {
        continue;
      }
      this[key] = enrolee[key];
    }
    this.id = Student.id++;
    Student.listOfStudents.push(this);
    this.isSelfPayment = '';
    this.bjudjet();
    this.getSelfPayment();
  }
  static id = 1;
  static listOfStudents = [];
  bjudjet() {
    Student.listOfStudents.sort(function (a, b) {
      return (b['ratingPoint'] - a['ratingPoint'] || b['schoolPoint'] - a['schoolPoint'])
    })
  }
  getSelfPayment() {
    for (let key in Student.listOfStudents) {
      if (Student.listOfStudents[key].ratingPoint >= 800 && key < 5) {
        Student.listOfStudents[key].isSelfPayment = false;
      }
      else {
        Student.listOfStudents[key].isSelfPayment = true;
      }
    }
  }

}
const stud = new Student(studentArr[0]);
const stud1 = new Student(studentArr[4]);
console.log(Student.listOfStudents);
console.log(stud);

//2 zadanie



class CustomString {
  constructor() { }
  reverse(String) {
    let reverseString = '';
    for (let i = String.length - 1; i >= 0; i--) {
      reverseString += String[i];
    }

    return reverseString;
  }
  ucFirst(String) {
    let ucFirstString = '';
    ucFirstString = String.charAt(0).toUpperCase() + String.slice(1);

    return ucFirstString;
  }
  ucWords(String) {
    let ucWordsString = [];
    let ucWordsString1 = [];
    ucWordsString = String.split(' ');

    for (let i = 0; i < ucWordsString.length; i++) { ucWordsString1[ucWordsString1.length] = ucWordsString[i].charAt(0).toUpperCase() + ucWordsString[i].slice(1) }

    return (ucWordsString1.join(' '));


  }

  ucWords1(String) {
    let ucWordsString = '';
    for (let i = 0; i < String.length; i++) {
      if (String[i - 1] === ' ' || i === 0) {
        ucWordsString += String.charAt(i).toUpperCase();
      } else {
        ucWordsString += String[i];
      }
    }
    return ucWordsString;
  }
}

const myString = new CustomString("qwerty");
console.log(myString);
console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));
console.log(myString.ucWords1("qwerty qwerty qwerty"));

// 3 zadanie

class Validator {
  constructor() { }
  checkIsEmail(string) {
    if (
      string.length >= 16 &&
      (string.endsWith('@gmail.com') ||
        string.endsWith('@mail.ru') ||
        string.endsWith('@hotmail.ru') ||
        string.endsWith('@yandex.ru')) //и так далее
    ) {
      let a = [];
      if (string.endsWith('@gmail.com') === true) {
        for (let i = 0; i < string.length - 10; i++) {
          if (
            string[i] === '@' ||
            string[i] === '&' ||
            string[i] === '=' ||
            string[i] === '+' ||
            string[i] === ',' ||
            string[i] === '_' ||
            string[i] === '<' ||
            string[i] === '>' ||
            string[i] === '-'
          ) {
            a[a.length] = 1;
          }
        }
        if (a.length === 0) {
          return console.log(true);
        } else {
          return console.log(false); // и таким образом надо проверить на валидность имя ящика для каждого почтового сервиса
        }
      }
    } else {
      return console.log(false);
    }
  }
  checkIsDomain(string) {
    if (string.endsWith('.com')) {
      //через || можем перечислить еще имена доменов, на принадлежность к которым надо проверить.
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
  checkIsDate(string) {
    if (
      string.length === 10 &&
      string[2] === '.' &&
      string[5] === '.' &&
      (string[0] === '0' ||
        string[0] === '1' ||
        string[0] === '2' ||
        string[0] === '3') &&
      (string[3] === '0' || string[3] === '1')
    ) {
      let substr1 = '';
      let substr2 = '';
      let substr3 = '';
      substr1 = string[0] + string[1];
      substr2 = string[3] + string[4];
      substr3 = string[6] + string[7] + string[8] + string[9];
      let num1 = Number(substr1);

      let num3 = Number(substr3);

      if (substr2 === '02' && num3 % 4 === 0 && num1 > 0 && num1 <= 29) {
        return console.log(true);
      } else if (substr2 === '02' && num3 % 4 !== 0 && num1 > 0 && num1 <= 28) {
        return console.log(true);
      } else if (
        (substr2 === '01' ||
          substr2 === '03' ||
          substr2 === '05' ||
          substr2 === '07' ||
          substr2 === '08' ||
          substr2 === '10' ||
          substr2 === '12') &&
        num1 <= 31 &&
        num1 > 0
      ) {
        return console.log(true);
      } else if (
        (substr2 === '04' ||
          substr2 === '06' ||
          substr2 === '09' ||
          substr2 === '11') &&
        substr1 === '30'
      ) {
        return console.log(true);
      } else {
        return console.log(false);
      }
    } else {
      return console.log(false);
    }
  }

  checkIsDate1(string) {
    let arrData = string.split('.');
    arrData[1] -= 1;
    let d = new Date(arrData[2], arrData[1], arrData[0]);

    if (
      d.getFullYear() == arrData[2] &&
      d.getMonth() == arrData[1] &&
      d.getDate() == arrData[0]
    ) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
  checkIsPhone(string) {
    let arrPhone = string
      .split(' ')
      .join(',')
      .split('(')
      .join(',')
      .split(')')
      .join(',')
      .split('-')
      .join(',')
      .split(',');
    console.log(arrPhone);
    if (
      string.length === 17 &&
      (string[3] === ' ' ||
        string[3] === '-' ||
        string[3] === '(') &&
      (string[7] === ' ' ||
        string[7] === '-' ||
        string[7] === ')') &&
      (string[11] === ' ' ||
        string[11] === '-' ||
        string[11] === '(' ||
        string[11] === ')') &&
      (string[14] === ' ' ||
        string[14] === '-' ||
        string[14] === '(' ||
        string[14] === ')') &&
      Number(arrPhone[1]) !== NaN &&
      Number(arrPhone[2]) !== NaN &&
      Number(arrPhone[3]) !== NaN &&
      Number(arrPhone[4]) !== NaN &&
      arrPhone[0] === '+38'
    ) {
      if (
        arrPhone[1] === '099' ||
        arrPhone[1] === '057' ||
        arrPhone[1] === '039' ||
        arrPhone[1] === '067' ||
        arrPhone[1] === '068' ||
        arrPhone[1] === '096' ||
        arrPhone[1] === '097' ||
        arrPhone[1] === '098' ||
        arrPhone[1] === '050' ||
        arrPhone[1] === '066' ||
        arrPhone[1] === '095' ||
        arrPhone[1] === '063' ||
        arrPhone[1] === '093' ||
        arrPhone[1] === '073' ||
        arrPhone[1] === '091' ||
        arrPhone[1] === '092' ||
        arrPhone[1] === '094' // перечисляем все операторы и коды городов
      ) {
        return console.log(true);
      } else {
        return console.log(false);
      }
    } else {
      return console.log(false);
    }
  }
}
const validator = new Validator();

validator.checkIsEmail("va&ya.pkin@gmail.com"); // true
validator.checkIsDomain("google.com"); // true
validator.checkIsDate("51.01.2020"); // true
validator.checkIsDate1("28.02.2021");

validator.checkIsPhone("+38 057 525 78 06"); //
