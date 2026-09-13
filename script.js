let vida_orc = 100;
let dano_orc = 0;
let vida_mago = 100;
let dano_mago = 0;

let jogoTerminado = false;

let contador_orc = document.querySelector("#vidaOrc")
let contador_mago = document.querySelector("#vidaMago")

const botao_atacar = document.querySelector("#atacar")

botao_atacar.addEventListener("click", () =>{
    
    ataque_mago();
    ataque_orc();
})

function ataque_mago(){
    
    if(vida_orc >= 0){
        dano_mago = Math.floor(Math.random() * 20);
        vida_orc -= dano_mago;
        contador_orc.textContent = vida_orc;
        console.log("O mago sofreu " + dano_mago + " de dano")
    }
    verificarVencedor()
}

function ataque_orc(){

    if(vida_mago >= 0){
        dano_orc = Math.floor(Math.random() * 20);
        vida_mago -= dano_orc;
        contador_mago.textContent = vida_mago;
        console.log("O orc sofreu " + dano_orc + " de dano")
    }

    verificarVencedor()
}

function finalizar_jogo(){
    if(vida_orc <= 0){
        alert("O mago venceu")
    } else{
        alert("O orc venceu")
    }

}

function verificarVencedor() {
    if (vida_orc <= 0 && !jogoTerminado) {
        jogoTerminado = true;
        alert("O mago venceu!");
        botao_atacar.disabled = true;
        botao_atacar.textContent = "Mago venceu";
    }

    if (vida_mago <= 0 && !jogoTerminado) {
        jogoTerminado = true;
        alert("O orc venceu!");
        botao_atacar.disabled = true;
        botao_atacar.textContent = "Orc venceu";
    }
}
