import { Personagem } from "./modules/character.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroArcano } from "./modules/arqueiro-arcano.js";
import { Guerreiro } from "./modules/guerreiro.js";

const gandalf = new Mago('Gandalf, o Cinzento', 'Fogo', 6, 8);
const eleanor = new Mago('Eleanor, a Branca', 'Gelo', 7, 10);

const legolas = new Arqueiro('Legolas, o Elfo', 8);

const fendal = new ArqueiroArcano('Fendal, o Vento', 4, 'Vento', 5, 6)

const aragorn = new Guerreiro('Aragorn, o Afiado', 8)

const personagens = [gandalf, eleanor, legolas, fendal, aragorn];

new PersonagemView(personagens).render();