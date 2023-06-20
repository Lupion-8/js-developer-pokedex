const inseto  = "O nome desse bicho é #NOME#, ele é um inseto intrigante e peculiar. Apesar de seu tamanho pequeno, o #NOME# possui características e comportamentos que o tornam fascinante e, às vezes, até assustador. Com seu corpo minúsculo e suas múltiplas pernas, o #NOME# é ágil e rápido em seus movimentos. Ele possui uma capacidade impressionante de se camuflar e se esconder em seu ambiente, tornando-se quase invisível aos olhos desatentos."
const hibridos = "O nome desse bicho é #NOME#, ele é híbrido e eu não sei o que ele faz, mas é um bicho muito perigoso. Sua natureza intrigante e única torna-o uma criatura fascinante e ao mesmo tempo amedrontadora. O #NOME# é uma combinação de características de diferentes seres, resultando em uma mistura surpreendente. Sua aparência exótica e singular chama a atenção de todos que o veem. Seus atributos e habilidades são um verdadeiro mistério, pois ainda não foram completamente compreendidos."
const fogo =  "Conheça o #NOME#, o senhor das chamas! Com seu poder ardente sobre o elemento do fogo, ele é capaz de controlar e manipular as chamas com maestria. Seu espírito flamejante e determinação incendiária o tornam uma presença imponente nos cenários em que ele se encontra."
const aquatico = "Conheça o #NOME#, o mestre das águas! Com seu poderoso domínio sobre o elemento aquático, ele é capaz de controlar e moldar a água ao seu redor. Seu estilo elegante e fluido faz dele uma presença impressionante nos ambientes aquáticos. O #NOME# é conhecido por sua habilidade em criar poderosos jatos d'água, formar bolhas de sabão gigantes e até mesmo fazer chover em dias ensolarados. Sua presença traz uma sensação refrescante e revigorante, como se estivesse sempre perto de uma cachoeira exuberante.";

const desconhecido = ((tipo)=>{
    const pokemonTypes = [ 'normal','fire','electric','grass', 'ice','fighting','poison','ground','flying', 'psychic', 'rock','ghost', 'dragon', 'dark','steel', 'fairy'];
    for (let index = 0; index < pokemonTypes.length; index++) {
        if(pokemonTypes[index] === tipo){
            return "O Pokémon #NOME# ainda é desconhecido pelo desenvolvedor. Talvez um dia ele estude essa espécie. Logo mais informações."
        }else{return " "}
    }
});