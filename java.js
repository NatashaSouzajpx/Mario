const formulario = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform(){
    formulario.style.left ="50%"
    formulario.style.top ="30%"
    formulario.style.transfor= "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform(){
    formulario.style.left ="-230px"
    formulario.style.top ="30%"
    formulario.style.transfor= "translatex(0)"
    mascara.style.visibility = "hidden"
}
