let lista = document.querySelector("#lista")

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

            const itemTabela = document.createElement("li")
            

        }


   // console.log(dados.results)


    } catch (error) {
        console.log("O seguinte erro ocorreu: ", error)
        
    }
    
   
}

carregarDados()