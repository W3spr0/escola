class Jogador{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.jogador=new Image()
        this.jogador.src="raquete.png"
        this.jogador.addEventListener('load',()=>{
            desenhar()
        })
    }
    actualizar(){
        if(this.teclado.esquerda){
            if(this.x >0)
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < this.ctx.canvas.width-this.jogador.width)
                this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y >0)
                this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height-this.jogador.height)
            this.y+=this.vel
        }
    }
    
    desenhar(){
        this.actualizar()
        this.ctx.drawImage(this.jogador,this.x,this.y)
    }
}