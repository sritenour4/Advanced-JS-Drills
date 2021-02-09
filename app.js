setName();

function setName() {
    var name = 'Shannon';
    console.log(name);
}

console.log('test1')
let avg = findAverage(2, 2)
console.log('test2', avg)
function findAverage(num1, num2) {
    console.log('test3');
    var answer = (num1 + num2) / 2;
    return answer;
}

const fruits = ['apple', 'orange', 'banana'];
//let favFruit;

function printFruits() {
    favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        let leastFavFruit = fruits[2];
        console.log(favFruit);
    }
}

//printFruits();
//printFavFruit();
//console.log(leastFavFruit);

printHello();
function printHello() {
    console.log('Hello!');
}

let sayHello = function alertHello() {
    alert('Hello!');
}
sayHello();