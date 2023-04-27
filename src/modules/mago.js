import { Personagem } from "./character.js";

export class Mago extends Personagem { 
    static tipo = 'Mago'
    static descricao = 'Um mestre das artes arcanas dos elementos.'

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    } 

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia();
    }
}