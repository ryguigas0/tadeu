const tormentoSelect = document.querySelector("#tormento")

if (tormentoSelect) {
    updateSubtormentos(tormentoSelect)
}

setHabilidades()

let currFormIndex = 1

const maxFormIndex = 5


function updateSubtormentos(tormentoSelect) {
    const subtormentoSelect = document.getElementById("subtormento")
    const tormentoValue = Number.parseInt(tormentoSelect.value)

    subtormentoSelect.innerHTML = ""

    let subtormentoList = []

    switch (tormentoValue) {
        case 1:
            subtormentoList = [
                "de uma família poderosa.",
                "de uma família poderosa.",
                "de uma família poderosa.",
                "de uma família poderosa.",
                "de uma família poderosa.",
                "de uma família poderosa."
            ]
            break;

        case 2:
            subtormentoList = new Array(6).fill("pelos meus filhos")

            break;
        case 3:
            subtormentoList = new Array(6).fill("por minha terra roubada")

            break;
        case 4:
            subtormentoList = new Array(6).fill("pela morte de um parceiro")
            break;

        case 5:
            subtormentoList = new Array(6).fill("pela minha tribo")

            break;

        case 6:
            subtormentoList = new Array(6).fill("pelo fim da minha gangue")
            break;

        default:
            subtormentoList = []
            break;
    }


    subtormentoList.forEach((subtormento, index) => {
        subtormentoSelect.innerHTML += `<option value="${tormentoValue}-${index + 1}">${subtormento}</option>`
    })
}

function handleNextSection() {
    const beforeTabIndex = currFormIndex;
    currFormIndex += 1;

    if (currFormIndex > maxFormIndex) {
        window.location.href = "/characters/1"
        return
    }


    const beforeSection = document.querySelector(`#section${beforeTabIndex}`)

    beforeSection.classList.remove("show", "active")
    beforeSection.classList.add("invisible")

    const nextSection = document.querySelector(`#section${currFormIndex}`)

    nextSection.classList.add("show", "active")
    nextSection.classList.remove("invisible")



}

function handleBackSection() {
    const beforeTabIndex = currFormIndex;
    currFormIndex -= 1;

    if (currFormIndex <= 0) {
        window.location.href = "/characters"
        return
    }

    let beforeSection = document.querySelector(`#section${beforeTabIndex}`)

    beforeSection.classList.remove("show", "active")
    beforeSection.classList.add("invisible")

    let nextSection = document.querySelector(`#section${currFormIndex}`)

    nextSection.classList.add("show", "active")
    nextSection.classList.remove("invisible")



}

function setHabilidades() {

    const hab1 = document.querySelector("#character-hab-1")
    const hab2 = document.querySelector("#character-hab-2")

    const habilidades = new Array(24).fill({
        nome: "Carry on my wayward son",
        descricao: "Inspirações e bônus para outros personagens"
    }).map((val, i, arr) => {
        val["index"] = i
        return val
    })

    habilidades.forEach((val, i, arr) => {
        hab1.innerHTML += `<option value="${i}">${val.nome} ${val.descricao}</option>`
    })

    habilidades.forEach((val, i, arr) => {
        hab2.innerHTML += `<option value="${i}">${val.nome} ${val.descricao}</option>`
    })
}