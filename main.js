class Usuario {
  constructor(nombreUsuario, contrasena, nombre, edad, 
    correo, rol, ciudad, colorfav, cel) {
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.rol = rol;
    this.ciudad = ciudad;
    this.colorfav = colorfav;
    this.cel = cel;
  }}

  
  const usuarios = [
    new Usuario ("mafe", "1234", "María Tibocha", "25", "mafetibocha@gmail.com",
     "admin", "Medellín", "rojo", "3118181732"),
    new Usuario ("naty", "1234", "Natalia", "21","natytibocha@gmail.com", "cliente", "Bogota", "colores pasteles", "3192837243"),
    new Usuario("lucia", "pass1", "Lucía Fernández", "28", "lucia@correo.com", "editor",  "Cali", "negro"),
    new Usuario("pedro", "9999",  "Pedro Sánchez", "58",  "pedro@correo.com", "cliente", "Barranquilla", "fucsia")
];

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombreUsuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;


    console.log("Usuario", nombreUsuario)
    console.log("Contraseña:", contrasena)

});

function validarCredenciales(user, pass) {
   
    const encontrado = usuarios.find(function(i) {
        return i.nombreUsuario === user && i.contrasena === pass;
    });
    return encontrado; 
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombreUsuarioInput = document.getElementById("usuario").value;
    const contrasenaInput = document.getElementById("contrasena").value;


    const usuarioValido = validarCredenciales(nombreUsuarioInput, contrasenaInput);

    if (usuarioValido !== undefined) {
        mostrarExito(usuarioValido);
    } else {
        mostrarError();
    }
});

function mostrarExito(usuario) {
    console.log(`
INICIO DE SESIÓN EXITOSO

 Nombre         : ${usuario.nombre}
 Usuario        : ${usuario.nombreUsuario}
 Edad           : ${usuario.edad} años
 Correo         : ${usuario.correo}
 Rol            : ${usuario.rol}
 Ciudad         : ${usuario.ciudad}
 Celular        : ${usuario.cel}
 Color Favorito : ${usuario.colorfav}

 Bienvenido(a), ${usuario.nombre}`);
}

function mostrarError() {
    console.error("ERROR: Usuario o contraseña incorrectos");
}


