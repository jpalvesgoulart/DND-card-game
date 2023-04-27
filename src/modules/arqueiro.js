import { Personagem } from "./character.js";

export class Arqueiro extends Personagem{
    static tipo = 'Arqueiro'
    static descricao = 'Um esguio patrulheiro com flechas afiadas.'

    constructor(nome, destreza) {
        super(nome);
        this.destreza = destreza;
    }

    obterInsignia(){
        if(this.destreza >= 5 && this.level >= 5){
            return `Dominador de Flechas`
        }
        return super.obterInsignia()
    }
}