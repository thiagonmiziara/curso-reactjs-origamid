/*const menu = {
    selector: '.principal',
    active() {
        const menuElement = document.querySelector(this.selector);
        menuElement.classList.add('active');
    },
};

menu.selector; //".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty('class'); // metodo herdado */

function upperName(name) {
    return name.toUpperCase();
}
console.log(upperName('thiago'));

const lowerName = (name) => name.toLowerCase();
console.log(lowerName('THIAGO'));

function handleMouse({ clientX, clientY }) {
    // const { clientX, clientY } = event
    console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

const useQuagrado = [4, (lado) => {
    return 4 * lado;
}];

const [lado, perimetro] = useQuagrado;
console.log(lado);
console.log(perimetro(4));

// rest e spred

function showList(empresa, ...clientes) {
    clientes.forEach(cliente => {
        console.log(cliente, empresa);
    });
}
showList('Google', 'Thiago', 'Bell');

const numeros = [5, 50, 100, 600, 8, 9, 1, 3, 6, 7, 8, 101];
const numeros2 = [...numeros, 800, 900, 0]
const maior = Math.max(...numeros, ...numeros2);
console.log(maior);

const carro = {
    cor: 'azul',
    portas: 4
}

carro.ano = 2020;
console.log(carro);

const carroSedan = {...carro, portamalas: '500 litros' }
console.log(carroSedan);

// espressao

const grupoA = 500;
const grupoB = 200;

if (grupoA > grupoB) {
    console.log('Grupo A , venceu');
} else {
    console.log('Grupo B , venceu');
}

// mesma logica acima so que com o ternario

const vencedor = grupoA > grupoB ? "Grupo A , venceu" : "Grupo B , venceu";
console.log(vencedor);


// operador &&

const active = true;
const button = active && 'Botão está ativo';
console.log(button);