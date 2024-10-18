function nameAge(name, age) {
    if (age >= 18) {
        return 'Hola ' + name + ', eres mayor de edad';
    }

    return 'Hola ' + name + ', eres menor de edad';
  
}

const checkAge1 = nameAge('Fernando', 38);
const checkAge2 = nameAge('Carlos', 16);

console.log(checkAge1);
console.log(checkAge2);



function topNumber(numberA, numberB) {
    if (numberA > numberB) {
        return numberA;
    }
       
    return numberB;
    
}

const checkNumber1 = topNumber(23, 35);
const checkNumber2 = topNumber(65, 32);

console.log(checkNumber1);
console.log(checkNumber2);



function numberType(numberC) {
    if (numberC > 0) {
        return 'Es un número positivo';
    } else if (numberC < 0) {
        return 'Es un número negativo';
    }
    return 'Es cero';
    
}

const checkType1 = numberType(38);
const checkType2 = numberType(-18);
const checkType3 = numberType(0);

console.log(checkType1);
console.log(checkType2);
console.log(checkType3);


function averageGrade(gradeA,gradeB,gradeC) {
    const average = ((gradeA + gradeB + gradeC) / 3);
    if (average < 5) {
        return 'Suspenso';
    } else if (average >= 5 && average < 8) {
        return 'Aprobado';
    }
    return 'Matrícula de honor';
    
}

const average1 = averageGrade(2, 3, 5);
const average2 = averageGrade(5, 6, 7);
const average3 = averageGrade(9, 10, 9);

console.log(average1);
console.log(average2);
console.log(average3);


function topOfThree(numberD, numberE, numberF) {
    if (numberD > numberE && numberD > numberF) {
        return numberD;
    } else if (numberE > numberD && numberE > numberF) {
        return numberE;
    } else if (numberF > numberD && numberF > numberE) {
        return numberF;
    }
    return 'Son todos iguales';
}

const top1 = topOfThree(2, 3, 5);
const top2 = topOfThree(5, 6, 7);
const top3 = topOfThree(9, 10, 9);
const top4 = topOfThree(9, 9, 9);

console.log(top1);
console.log(top2);
console.log(top3);
console.log(top4);


function multipleOf(numberG) {
    if (numberG % 5 === 0 && numberG % 3 === 0) {
        return 'Es divisible por 3 y por 5';
    } else if (numberG % 5 === 0) {
        return 'Es divisible por 5';
    } else if (numberG % 3 === 0) {
        return 'Es divisible por 3';
    }
        
    return numberG;
    
}

const multiple1 = multipleOf(3);
const multiple2 = multipleOf(5);
const multiple3 = multipleOf(15);
const multiple4 = multipleOf(19);


console.log(multiple1);
console.log(multiple2);
console.log(multiple3);
console.log(multiple4);

function oddNumber(numberH) {
    if (numberH % 2 === 0) {
        return 'Es un número par';
    }
        
    return 'Es un número impar';
    
}

const odd1 = oddNumber(19);
const odd2 = oddNumber(20);

console.log(odd1);
console.log(odd2);


function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 'Es un año bisiesto';
    }
        
    return 'No es un año bisiesto';
    
}

const year1 = leapYear(2024);
const year2 = leapYear(100);
const year3 = leapYear(500);
const year4 = leapYear(400);
const year5 = leapYear(1986);

console.log(year1);
console.log(year2);
console.log(year3);
console.log(year4);
console.log(year5);