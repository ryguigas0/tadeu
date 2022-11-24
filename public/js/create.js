setHabilidades()

function handleNextSection(nextIndex) {
    const beforeTabIndex = nextIndex - 1;

    const beforeSection = document.querySelector(`#section${beforeTabIndex}`)

    hideSection(beforeSection)

    const nextSection = document.querySelector(`#section${nextIndex}`)

    showSection(nextSection)

}

function handleBackSection(nextIndex) {
    const beforeTabIndex = nextIndex + 1;

    if (nextIndex <= 0) {
        window.location.href = "../characters"
        return
    }

    let beforeSection = document.querySelector(`#section${beforeTabIndex}`)

    hideSection(beforeSection)

    let nextSection = document.querySelector(`#section${nextIndex}`)

    showSection(nextSection)

}

function showSection(section) {
    section.classList.add("show", "active")
    section.classList.remove("invisible")
}

function hideSection(section) {
    section.classList.remove("show", "active")
    section.classList.add("invisible")
}

let processando = false;

async function enviarForm() {
    if (processando) {
        alert("Processando, aguarde!")
        return;
    }

    let formData = new FormData(document.getElementById("section1"));
    for (let i = 2; i <= 5; i++) {
        let temp = new FormData(document.getElementById("section" + i));
        for (let par of temp.entries()) {
            formData.append(par[0], par[1]);
        }
    }

    try {
        let url = "/create/criarPersonagem"
        let message = "Erro criando personagem"
        let opcoes = {
            method: "post",
            body: formData
        }

        if (personagem && personagem.habilidades) {
            url = "/create/updatePersonagem"
            message = "Erro atualizando personagem"
            opcoes.method = "put"
            opcoes.body.set("character-id", personagem.id)
            opcoes.body.set("character-icon", personagem.icon)
        }

        processando = true;
        const response = await fetch(url, opcoes);
        processando = false;

        if (response.ok) {
            let json = await response.json()
            window.location.href = `/characters/${json.characterId}`
        } else {
            alert(message)
        }

        return

        // OK!
    } catch (ex) {
        processando = false;
        /// ...
    }
}

function setHabilidades() {
    const habilidadesDiv = document.querySelector("#habilidades")

    const habilidades = new Array(24).fill(0).map((val, i, arr) => {
        let nome = ""
        let descr = ""
        switch (i) {
            case 0:
                nome = "Light my fire";
                descr = "+1 para testes com revólver";
                break;
            case 1:
                nome = "LETS DANCE";
                descr = "2 tiros por ação com - 1 nos testes.";
                break;
            case 2:
                nome = "FORTUNATE SON";
                descr = "ao chegar a ZERO retorne com 3 PVs.";
                break;
            case 3:
                nome = "DONT STOP BELIEVING";
                descr = "+ 1 para testes com rifles ou arcos longos.";
                break;
            case 4:
                nome = "IMMIGRANT SONG";
                descr = "+ 1 ponto de Antecedente.";
                break;
            case 5:
                nome = "GIMME SHELTER";
                descr = "dano extra para ataques surpresa com facas.";
                break;
            case 6:
                nome = "ANOTHER ONE BITES THE DUST";
                descr = "manobras de combate corpo a corpo.";
                break;
            case 7:
                nome = "RIDERS ON THE STORM";
                descr = "+ 1d6 no dano para cada 3 PVs perdidos.";
                break;
            case 8:
                nome = "BORN TO BE WILD";
                descr = "+ 1 para testes de furtividade ou percepção.";
                break;
            case 9:
                nome = "SMOKE ON THE WATER";
                descr = "+ 1 em testes com armas rústicas + 1 dano / Físico.";
                break;
            case 10:
                nome = "UNDER PRESSURE";
                descr = "+ 1 para testes de Atributo.";
                break;
            case 11:
                nome = "HEARTBREAKER";
                descr = "- 1 para ações contra 1 alvo à escolha.";
                break;
            case 12:
                nome = "BARRACUDA";
                descr = "+ 1 em testes para obter informações.";
                break;
            case 13:
                nome = "SWEET EMOTION";
                descr = "inspirações e bônus para outros personagens.";
                break;
            case 14:
                nome = "CRAZY TRAIN";
                descr = "+ 1d6 no dano da arma até o fim do combate.";
                break;
            case 15:
                nome = "CARRY ON MY WAYWARD SON";
                descr = "personagem pode refazer um teste falho.";
                break;
            case 16:
                nome = "WAR PIGS";
                descr = "+ 1 para testes que envolvem explosivos.";
                break;
            case 17:
                nome = "ACE OF SPADES";
                descr = "+ 1 para testes em jogos e trapaças.";
                break;
            case 18:
                nome = "A HORSE WITH NO NAME";
                descr = "+ 1 para testes com montaria.";
                break;
            case 19:
                nome = "I WANT TO HOLD YOUR HAND";
                descr = "+ 1d6 PVs curados durante o descanso.";
                break;
            case 20:
                nome = "PARANOID";
                descr = "+ 1 nos testes de Iniciativa.";
                break;
            case 21:
                nome = "RAMBLE ON";
                descr = "2 movimentos com 1 ação / +1 em testes de fuga.";
                break;
            case 22:
                nome = "AQUALUNG";
                descr = "+ 1 para testes atléticos.";
                break;
            case 23:
                nome = "MORE THAN A FEELING";
                descr = "a personagem pode fazer 2 perguntas à Juíza.";
                break;
        }
        return {
            nome: nome,
            descricao: descr
        }
    })

    habilidades.forEach((hab, i, arr) => {
        let checked = "";

        if (personagem && personagem.habilidades) {
            for (let i = 0; i < personagem.habilidades.length; i++) {
                if (hab.nome === personagem.habilidades[i].nome) {
                    checked = 'checked="checked"';
                    break;
                }
            }
        }

        habilidadesDiv.innerHTML += `
        <div class="row">
                <div class="col-4">
                    <input type="checkbox" class="form-check-input" id="character-habilidade-${i}" name="character-habilidades" value="${i}" ${checked}/>
                </div>
                <div class="col-8">
                    <label class="form-check-label" for="character-habilidade-${i}">
                        <div>${hab.nome}</div>
                        <div>${hab.descricao}</div>
                    </label>
                </div>
        </div>`
    })
}