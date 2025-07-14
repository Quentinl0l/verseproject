export const persos = [
    {
        name: "Karl",
        description: "C'est le personnage principal du jeu ! \n" +
                    "Il vient d'un monde encore inconnu à ce jour. Souffrant d'amnésie, il doit trouver l'endroit d'où il viens !",
        capacite1: "Attaque combo: Effectue une série d'attaques sur un ennemie. (stat : attaque)",
        capacite2: "Coup surpuissant: Effectue une grosse attaque. (stat : attaque)"
    },
    {
        name: "Myriam",
        description: "C'est la chef de la région de Daboo. \n" +
                    "Elle veille sur le village pour empêcher l'Outre-Monde de l'envahir.",
        capacite1: "Jet de pierre : Lance une pierre sur un ennemie et baisse sa défense. L'ennemie peut être étourdis. (stat : défense)",
        capacite2: "Soins rocheux : Recouvre les alliées d'une protection pour les soignés et augmenter leurs défense. (stat : défense)"
    },
    {
        name: "Tessa",
        description: "C'est une fermière qui vit dans la région de Mongti. \n" +
                    "Elle a un fort caractère mais n'arrive pas à se faire obéir par ses animaux.",
        capacite1: "Jet de terre : Jette de la terre pour étourdir un ennemie. Ne fait aucun dégats.",
        capacite2: "Invasion d'insectes : Baisse l'attaque et la défense d'un ennemie. (stat : attaque)"
    },
    {
        name: "Ernest",
        description: "C'est un habitant du monde de la plage. \n" +
                    "Il déborde d'énergie et adore faire la fête ! Son rêve est de voir un volcan de près.",
        capacite1: "Brûlure : Lance une flamme sur l'ennemie pour le brûler. (stats : attaque + défense)",
        capacite2: "Erruption volcanique : Fait apparaitre des jets de flammes sur tous les ennemis et les brûles. (stats : attaque + défense)"
    },
    {
        name: "Al",
        description: "C'est un chasseur de trésor. \n" +
                    "Son grand père lui a offert une chasse au trésor géante avant de mourrir.",
        capacite1: "Trésor piégé : Piège un trésor afin de drainer les pv de l'ennemis. (stats : pv + attaque)",
        capacite2: "Tsunami : Envoi une vague géante sur un ennemi. (stats : pv + attaque)"
    },
    {
        name: "Paulette",
        description: "C'est une grande prêtresse. \n" +
                    "Elle a été bannie par les personnes de son propre village.",
        capacite1: "Vent guérisseur : Enlève tous les malus d'un alliés.",
        capacite2: "Tempête de livres : Invoque une tempête pour attaquer les ennemies. (stats : pv)"
    },
    {
        name: "Kain",
        description: "C'est le plus grand soigneur de son monde. \n" +
                    "Il est vu comme un monstre à cause de la malédiction qui pèse sur lui.",
        capacite1: "Sacrifice de feu : Sacrifie ses PV et soigne les PV et PM d'un alliés pendant 3 tours. (stats : attaque)",
        capacite2: "Rituel brulant : Soigne les PV et PM de tous alliés, même KO pendant 3 tours. (stats : attaque)"
    }
]

export default class Data{
    dataId;
    constructor() {
        this.dataId = 0;
    }

    setData(){
        document.querySelector('.personnages .name').innerHTML = persos[this.dataId].name;
        document.querySelector('.personnages .img').setAttribute('src', `img/persos/${persos[this.dataId].name.toLowerCase()}.png`)
        document.querySelector('.personnages .description').innerHTML = persos[this.dataId].description;
        document.querySelector('.personnages .c1').innerHTML = persos[this.dataId].capacite1;
        document.querySelector('.personnages .c2').innerHTML = persos[this.dataId].capacite2;
    }

    findData(name){
        for (let i = 0; i < persos.length; i++){
            const perso = persos[i];
            if(perso.name === name){
                this.dataId = i;
            }
        }
    }
}