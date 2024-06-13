let btJg1 =  document.getElementById("btJg1");
let btJg2 =  document.getElementById("btJg2");
let btJg3 =  document.getElementById("btJg3");

let alugueis = 0
let devoluções = 0

function botao3() {
    temCeteza(btJg3);
}

function botao2() {
    temCeteza(btJg2);
}

function botao1() {
    temCeteza(btJg1);    
}

function temCeteza(id){
    if (id.textContent === "Devolver"){
        let devolvo = prompt("Tem certeza que quer devolver esse jogo?");
        let devolver = devolvo.toLocaleUpperCase();
            if (devolver !==  "SIM"){
                alert("Ok, escolha outro jogo!");
            } else {
                alternar(id);   
                devoluções = devoluções + 1;
                console.log(`Devoluções = ${devoluções}`); 
            }
    } else if (id.textContent === "Alugar"){
        let certeza = prompt("Você tem certeza que quer alugar este jogo?");
        let certezaCaps = certeza.toLocaleUpperCase();
            if (certezaCaps !==  "SIM"){
                alert("Ok, escolha outro jogo!");
            } else {
                alternar(id); 
                alugueis = alugueis + 1 ;
                console.log(`Alugueis = ${alugueis}`);
            }
    }
}

function alternar(id) {
    if (id.classList.contains("dashboard__item__button--return")){
        id.classList.remove("dashboard__item__button--return");
        id.classList.add("dashboard__item__button");
        id.textContent = "Alugar";
        id.classList.remove("dashboard__item__img--rented");
    } else if (id.classList.contains("dashboard__item__button")) {
        id.classList.remove("dashboard__item__button");
        id.classList.add("dashboard__item__button--return");
        id.textContent = "Devolver";
        id.classList.add("dashboard__item__img--rented");
    } 
}