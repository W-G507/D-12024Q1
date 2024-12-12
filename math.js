function nthterm(first, n, c){
    return first + n * c
}

console.log(nthterm(1, 2, 3)); // 7
console.log(nthterm(2, 2, 2)); // 6
console.log(nthterm(5, 2, 3)); // 13
console.log(nthterm(0, 5, 1)); // 5
console.log(nthterm(10, 2, 3)); // 19
console.log(nthterm(10, 2, 1)); // 12
console.log(nthterm(10, 2, 0)); // 10
console.log(nthterm(10, 2, -1)); // 9
console.log(nthterm(10, 2, -2)); // 8
console.log(nthterm(10, 2, -3)); // 7
console.log(nthterm(10, 2, -4)); // 6
console.log(nthterm(10, 2, -5)); // 5
console.log(nthterm(10, 2, -6)); // 4
console.log(nthterm(10, 2, -7)); // 3
console.log(nthterm(10, 2, -8)); // 2
console.log(nthterm(10, 2, -9)); // 1
console.log(nthterm(10, 2, -10)); // 0