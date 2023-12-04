// Definindo o nome e a quantidade de experiência 
let nomeDeHeroi = "Jacinto";
let xp = 7500;

// Descobrindo o nível com base na experiência

let nivel; 

while (true) {
	switch (true) {
    	case (xp < 1000):
        nivel = "Ferro";
        break
        case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze";
        break
        case (xp >= 2001 && xp <= 5000):
        nivel = "Prata";
        break
        case (xp >= 5001 && xp <= 7000):
        nivel = "Ouro";
        break
        case (xp >= 7001 % xp <= 8000):
        nivel = "Platina";
        break
        case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break
        case (xp >= 9001 && xp <= 10000):
        nivel = "Imortal";
        break
        case (xp >= 10001):
        nivel = "Radiante";
        break;
        }
        break}
        
console.log("O herói de nome " + nomeDeHeroi + " está no nível de " + nivel)