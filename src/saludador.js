function saludar(nombre, genero, edad) {
    let msg
    let sus
    if (genero == "masculino") {
        msg = "Bienvenido "
    }
    else if (genero == "femenino") {
        msg = "Bienvenida "
    }
    if (edad < 35) {
        sus = "joven "
    }
    else if(genero == "femenino" && edad >= 35){
        sus = "señorita "
    }
    else {
        sus = "señor "
    }
    return msg + sus + nombre
}

export default saludar