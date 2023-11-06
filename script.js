// let bienvenido = document.querySelector('#bienvenido').innerText;
// if (bienvenido == '¡Bienvenid@!') {
//     document.querySelector('#bienvenido').innerHTML = '¡Bienvenido!';
//     console.log('andó bien');
// } else {
//     console.log('no andó bien');
// }

let parrafo2 = document.querySelector('.parrafo2');

function cambiarParrafo2(nombre, profesion) {
    let texto = `Me llamo ${nombre}, soy ${profesion}, me gusta trabajar tanto solo como en equipo, ayudando a otras personas a cumplir sus objetivos mediante la eficiencia y la belleza del software. Me gusta tocar la guitarra, Volver al Futuro y la pizza.`;
    return texto;
}

//parrafo2.innerText = cambiarParrafo2('Juan', 'Desarrollador');
