const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        addEventClick();
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


function addEventClick() {
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index++) {
      li[index].addEventListener('click', (e) => {
        if (e.currentTarget === li[index]) {
            const imglElement = e.currentTarget.querySelector('.detail').querySelector('img').getAttribute('src');;
            const nameElement = e.currentTarget.querySelector('.name').textContent;
            const numberElement = e.currentTarget.querySelector('.number').textContent;
            const typeElements = e.currentTarget.querySelector('.detail').querySelectorAll('.type');
            let typeCalc
            


            if(typeElements.length == 1){ 
                typeCalc =  typeElements[0].innerText;
            }
            if(typeElements.length == 2){
                typeCalc = [typeElements[0].innerText, typeElements[1].innerText];
            }

            document.querySelector('.dlt').innerHTML = details(nameElement, numberElement, imglElement, typeCalc)
            addModalDetalhe();

        }
      });
    }
  }
  
function details(a,b,c,d){
    const n = desconhecido(d);
    console.log(n)
return `
    <div class="controlls">
        <p>Ficha tecnica do pokemon</p><p>x</p>
    </div>

    <div class="infos">
        <h2>${a}</h2>
        <p style="font-size:1vw;">Número do bicho: ${b}</p>
        <h3> ${d.length == 2 ? `<p class="${d[0]}">${d[0]}</p> <p class="${d[1]}">${d[1]}</p>` : `<p class="${d}">${d}</p>`}</h3>
    </div>
    <div class="detalhesBicho">
    ${n != ' ' ? `<p class="desciption">${n.replace(/#NOME#/g, a)}</p>` : ` `}</p>
    ${d == 'water' ? `<p class="desciption">${aquatico.replace(/#NOME#/g, a)}</p>` : ` `}</p>
    ${d == 'fire' ? `<p class="desciption">${fogo.replace(/#NOME#/g, a)}</p>` : ` `}</p>
    ${d == 'bug' ? `<p class="desciption">${inseto .replace(/#NOME#/g, a)}</p>` : ` `}</p>
    ${d.length == 2 ? `<p class="desciption">${hibridos.replace(/#NOME#/g, a)}</p>` : ` `}</p>
   
    
       
        <img  class="ftb" src="${c}"/>
    </div>`
}



function addModalDetalhe(data) {
    const layout_view = document.querySelector('.content').classList;
    if (layout_view[1] == 'pokes') {
        layout_view.remove('pokes');
        layout_view.add('ficha');
        setTimeout(() => {
           document.querySelector('.dlt').style.visibility = 'visible' 
           document.querySelector('html').style.overflow = "hidden";
        }, 300);

    }
    document.querySelector('.controlls > :nth-child(2)').addEventListener('click', ()=>{
        layout_view.remove('ficha');
        layout_view.add('pokes');
        setTimeout(() => {
           document.querySelector('.dlt').style.visibility = 'hidden';
           document.querySelector('html').style.overflow = "auto";
        }, 300);
    });
}


window.addEventListener('scroll', function() {
    var div = document.querySelector('.dlt');
    var windowHeight = window.innerHeight;
    var divHeight = div.offsetHeight;
    var scrollY = window.scrollY || window.pageYOffset;
  
    var topOffset = (windowHeight - divHeight) / 2-20;
    var targetTop = scrollY + topOffset;
  
    div.style.top = targetTop + 'px';
  });