import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./character.js";
import { Mago } from "./mago.js";

export class ArqueiroArcano extends Personagem {
    arqueiro
    arcano
    static tipo = 'ArqueiroMago'
    static descricao = 'Um poderoso arqueiro aprendiz de magia.'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.arqueiro = new Arqueiro(nome, destreza)
        this.arcano = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.arqueiro.obterInsignia()} e ${this.arcano.obterInsignia()}`
    }
}