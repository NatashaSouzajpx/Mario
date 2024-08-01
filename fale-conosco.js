const form = document.querySelector(".Formulário-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform() {
    form.style.left = "50%"
    form.style.top = "30%"
    form.style.transfor = "translatex(-50%)"
    mascara.style.visibility = "visible"

}
function esconderform() {
    form.style.left = "-230px"
    form.style.top = "30%"
    form.style.transfor = "translatex(0)"
    form.style.visibility = "hidden"
}