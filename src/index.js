const messages = [
    "Hello",
    "Hola",
    "Ni hao",
    "Hallo",
    "Bonjour",
    "Olá"
]

const randomMsg = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)]
    console.log(msg);
}

module.exports = {randomMsg}