import { Personagem } from "./character.js";

export class Guerreiro extends Personagem{
    static tipo = 'Guerreiro'
    static descricao = 'Um hábil lutador marcial que utiliza diversas armas.'

    constructor(nome, forca){
        super(nome);
        this.forca = forca;
    }
    obterInsignia() {
        if(this.level >= 7 && this.forca >= 5) {
            return `Guerreiro Mestre`
        }
        return super.obterInsignia();
    }
}