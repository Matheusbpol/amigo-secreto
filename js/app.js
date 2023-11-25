let listaComTodosOsNomes = []
let listaDeNomes
let adicionarNome = document.getElementById('nome-amigo');

function deixarMaiusculo(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function adicionar(){
    let listaDeNomes = document.getElementById('lista-amigos');
    let nomeEstranho = deixarMaiusculo(adicionarNome.value);
    if (adicionarNome.value == '' && listaDeNomes.textContent == ''){
        return adicionar;
    } else if(listaComTodosOsNomes.includes(nomeEstranho)){
        return adicionar;
    }   else if(adicionarNome.value != '' && listaDeNomes.textContent == ''){
        listaDeNomes.textContent = nomeEstranho;  
    } else if(adicionarNome.value != '' && listaDeNomes.textContent != ''){
        listaDeNomes.textContent = listaDeNomes.textContent + ', ' + nomeEstranho;
    }
    if (adicionarNome.value !=''){
        listaComTodosOsNomes.push(nomeEstranho);
        console.log(nomeEstranho);
    }
    document.getElementById('nome-amigo').value = '';    
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    embaralhar (listaComTodosOsNomes);
    for(i = 0; i < listaComTodosOsNomes.length; i++){
        if(i == listaComTodosOsNomes.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaComTodosOsNomes[i] + ' --> ' + listaComTodosOsNomes[0] + '<br>';
    } else{
        listaSorteio.innerHTML = listaSorteio.innerHTML + listaComTodosOsNomes[i] + ' --> ' + listaComTodosOsNomes[i + 1] + '<br>';
    }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    listaComTodosOsNomes = [];
    document.getElementById('lista-sorteio').innerHTML = '';
}   