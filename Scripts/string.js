const myName = "Phuc An"
const myAge = 20;
console.log(`Heloo my name is ${myName} and my age is ${myAge}`)
const infor = `Hello my name is ${myName} and my age is ${myAge} and my gender is male`;
console.log(infor)
const water = new String ('Sting')
// 2.1 toUpperCase
const hobby = "Badminton is my life";
console.log(hobby.toUpperCase())
// hobby.toLowerCase();
console.log(hobby.toLowerCase())
console.log(hobby.includes('ton'))
console.log(hobby.length)
console.log(hobby[0])
console.log(hobby.indexOf('life'))
console.log(hobby.lastIndexOf('is'))
const repeat3Time = hobby.repeat(3)
console.log(repeat3Time)
const volleyball = hobby.replace('Badminton', 'Volleyball')
console.log(volleyball)
const changeLife = hobby.replaceAll('life', 'money')
console.log("🚀 ~ changeLife:", changeLife)
const copyStr = hobby.slice(10, 12) // Nếu k truyền start và end thì sẽ sao chép all chuỗi
console.log("🚀 ~ copyStr:", copyStr)
const strArr = hobby.split(' ')
console.log("🚀 ~ strArr:", strArr)
const dashStr = hobby.split(' ').join('-')
console.log("🚀 ~ dashStr:", dashStr)
console.log(hobby.startsWith('Badminton'))
console.log(hobby.endsWith('Badminton'))
const search = '      phone        '
console.log(search.trim())
console.log(search)
console.log(search.trimStart())
console.log(search.trimEnd())

