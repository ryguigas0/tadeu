const tormentoSelect = document.querySelector("#tormento")
updateSubtormentos(tormentoSelect)


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