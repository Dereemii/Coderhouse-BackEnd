const fs = require('fs')

fs.writeFileSync('./fyh.txt', 'let date = new Date(); console.log(`Hoy es ${date.toLocaleDateString()} y la hora es ${date.getHours()}:${date.getMinutes()}`)')

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
}

