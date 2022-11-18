function findNeedle(haystack) {
    let num = 0
    for (let i = 0; i < haystack.lenght; i++) {
        haystack[i] === "needle" ? num += i : num +=0
    }
    return `found the needle at position ${num}`
}
//поиск "needle" в массивах
let str = ['needle', 'qazfc', 'fpoxn', 'mjhzm', 'adfbg', 'mqqbz', 'wwhip', 'nxssq']// тестируем.. позиция 0 количество в массиве 1

console.log(findNeedle(str))

let str1 = ['needle', 'qazfc', 'needle', 'mjhzm', 'needle', 'mqqbz', 'wwhip', 'nxssq']// первое вхождение 0 количество 3
console.log(findNeedle(str1))
let str2 = ['qazfc', 'fpoxn', 'mjhzm', 'needle', 'mqqbz', 'wwhip', 'nxssq']// позиция 3 количество 1
console.log(findNeedle(str2))
let str3 = ['needle', 'adfbg', 'adfbg', 'adfbg', 'adfbg', 'mqqbz', 'wwhip', 'needle']// вхожденеи 0 количество 2
console.log(findNeedle(str3))
let str4 = ['qazfc', 'qazfc', 'fpoxn', 'mjhzm', 'adfbg', 'mqqbz', 'wwhip', 'nxssq']// слова нет
console.log(findNeedle(str4))
