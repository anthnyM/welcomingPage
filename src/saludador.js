function saludar(nombre, genero) {
    let msg
    if (genero == "masculino") {
        msg = "Bienvenido "
    }
    else if (genero == "femenino") {
        msg = "Bienvenida "
    }
    return msg + nombre
}

export default saludar