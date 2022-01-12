//Asincronismo y callbacks
//Realizar un programa no bloqueante utilizando timers y callbacks
const mostrarLetras = (palabra, intervalo) => {
    let i = 0;

    const fin = () => console.log("terminé")

    let interval = setInterval(function () {
        console.log(palabra.charAt(i))
        i++;
        if (i > palabra.length) {
            clearInterval(interval);
            fin()
        }
    }, intervalo);
}

mostrarLetras("Hola", 0)
mostrarLetras("Hola", 250)
mostrarLetras("Hola", 500)

