var canvas = document.getElementById('game')
var ctx=canvas.getContext('2d') // ctx(CanvaContexto)
let pj1 = 0
let pj2 = 0


const teclado={
    cima:false,
    baixo:false,
    esquerda:false,
    direita:false,
}

const jogador=new Pad(ctx, teclado)
const bola=new Bola(ctx, jogador)
const cpu=new Cpu(ctx, bola)
const placar=new Placar(ctx)

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

window.addEventListener('keydown',(event)=>{
    if(event.keyCode==37 || event.keyCode==65){ //Esquerda
        teclado.esquerda = true
    }else if(event.keyCode==39 || event.keyCode==68){ //Direita
        teclado.direita = true
    }
    if(event.keyCode==38 || event.keyCode==87){ //Cima
        teclado.cima = true
    }else if(event.keyCode==40 || event.keyCode==83){ //Baixo
        teclado.baixo = true
    }
})
window.addEventListener('keyup',(event)=>{
    if(event.keyCode==37 || event.keyCode==65){ //Esquerda
        teclado.esquerda = false
    }else if(event.keyCode==39 || event.keyCode==68){ //Direita
        teclado.direita = false
    }
    if(event.keyCode==38 || event.keyCode==87){ //Cima
        teclado.cima = false
    }else if(event.keyCode==40 || event.keyCode==83){ //Baixo
        teclado.baixo = false
    }
})

const game=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    jogador.desenhar()
    bola.desenhar()
    cpu.desenhar()
    placar.desenhar()
    requestAnimationFrame(game)
}
requestAnimationFrame(game)

function testar(){'use strict';document.addEventListener('keydown',(event)=>{const keyName = event.keyCode;alert('keydown event\n\n'+'key: '+keyName);});}
//testar()