let lista = document.querySelector("#lista")
let campoBusca = document.querySelector("#campo")
let btnFiltrar = document.querySelector("#filtrar")

async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"
    try {
        let resultado = await fetch(url)

    const dados = await resultado.json()

        for(elementos of dados.results){
            //console.log(` Oi, sou ${elementos.name} e nasci no ano ${elementos.birth_year}`)
            console.log(elementos)

            //Criando elementos HTML dinamicamente
            /*
            const itemLista = document.createElement("li")
            itemLista.classList.add("list-group-item")
            itemLista.textContent =  `Hi my name is ${elementos.name}, my gender sex is ${elementos.gender} and my hair color is ${elementos.hair_color}`
            

            
            
            lista.appendChild(itemLista)
            */

            const linha = document.createElement("tr")
            const tdNome = document.createElement("td")
            const tdPeso = document.createElement("td")
            const tdCorOlho = document.createElement("td")

            //CRIANDO O CONTEÚDO DAS TDS(COLUNAS)

            tdNome.textContent = elementos.name
            tdPeso.textContent = elementos.mass
            tdCorOlho.textContent = elementos.eye_color

            // ADICIONANDO OS ELEMENTOS EM SUAS RESPECTIVAS TAGS MÃE

            linha.appendChild(tdNome)
            linha.appendChild(tdPeso)
            linha.appendChild(tdCorOlho)

            tabela.appendChild(linha)
            

        }


   // console.log(dados.results)


    } catch (error) {
        console.log("O seguinte erro ocorreu: ", error)
        
    }
    
   
}

async function filtrarDados(idPersonagem){
    const url = `https://swapi.dev/api/people/${idPersonagem}/?format=json`
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        console.log(dados)

      
            
    } catch (error) {
        console.log("O erro é o seguinte: ", error)
        
    }
}

//carregarDados()

btnFiltrar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    if(campoBusca.value != "" && campoBusca.value >= 1 && campoBusca.value <= 82){
        filtrarDados(campoBusca.value)

    }
    else{
        alert("Insira em valor válido no campo indicado")

    }
})