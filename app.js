// ===== Question No.1 =====

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let principalDiagonal = 0;
let secondaryDiagonal = 0;

function sum(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        principalDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1]
    }
}
sum(matrix);
document.write("Principal Diagonal = " + principalDiagonal + "<br/>");
document.write("Secondary Diagonal = " + secondaryDiagonal);


// ===== Question No.2 =====

let matrixA = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
]

let matrixB = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
]

function multiply(a, b) {
    var result = [];
    for (var i = 0; i < b.length; i++) {
        result[i] = [];
        for (var j = 0; j < a[0].length; j++) {
            var sum = 0;
            sum += a[i][j] * b[i][j]
            result[i].push(sum);
        }
    }
    return result
}

console.log(multiply(matrixA, matrixB))


// ===== Question No.3 =====

let array = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"];
let obj = {
    parent_Name: 'Father',
    child1: 'Sumair'
}
let objResult = {};
for (let i = 0; i < array.length; i++) {
    objResult["child" + (i + 2)] = array[i]
}

let merged = { ...obj, ...objResult }

console.log(merged)


// ===== Question No.4 =====

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        document.write(data.map((user) => user.name + "<br/>" + user.email + "<br/>"));
    })
