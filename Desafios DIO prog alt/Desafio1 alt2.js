//Usando JSON para condensar tudo em um lugar sóe ficar melhor para caso precise atualizar com novos dados.
//if e else if,  
class meuHeroi{
	constructor(nome, xp){
    	this.nome = nome
        this.xp = xp
      	}
    experiencia(){
    	let nivel;
		if (this.xp <= 1000) {
    		nivel = "ferro"
            }
        else if (this.xp >= 1001 && this.xp <= 2000){ 
        	nivel = "bronze"
            }
        else if (this.xp >= 2001 && this.xp <= 5000){
        	nivel = "prata"
            }
        else if (this.xp >= 5001 && this.xp <= 7000){
        	nivel = "ouro"
            }
        else if (this.xp >= 7001 && this.xp <= 8000){
        	nivel = "platina"
            }
        else if (this.xp >= 8001 && this.xp <= 9000){
        	nivel = "ascendente"
            }
        else if (this.xp >= 9001 & this.xp <= 10000){
        	nivel = "imortal"
            }
        else if (this.xp >= 10001){
        	nivel = "radiante"
			}      
		console.log("O herói de nome " + this.nome + " está no nível de " + nivel)
	}
}

let nivelDoMeuHeroi = new meuHeroi("Miguell", 7500)
nivelDoMeuHeroi.experiencia()
