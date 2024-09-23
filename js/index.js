let boton = document.getElementById("buttonText");
let input = document.getElementById("inputText");

function get_the_data() {
    let datos = input.value;
    localStorage.setItem("datos", datos)
    input.value = ''
}

boton.addEventListener('click', function (e) {
    get_the_data();
})

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        get_the_data();
    }
})