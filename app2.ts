import  Carro  from './Carro'
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria'

let carroA = new Carro('dodge jurner', 4);
let carroB = new Carro('volester', 3);
let carroC = new Carro('corsa', 4);

let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

let cliente = new Pessoa('Lucas', 'corsa');

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());