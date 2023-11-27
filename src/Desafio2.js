//definindo o saldo de vitórias.
let saldoVitorias = calcularSaldo(55 , 10)

//definindo o nível do herói.
let nivel = calcularNivel(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`)

function calcularSaldo(vitorias , derrotas){
	let somatorio = vitorias - derrotas
    return somatorio
}    
    
function calcularNivel(saldo){
	while (true) {
			switch (true) {
    			case (saldo < 10):
        		return "Ferro";
        		case (saldo >= 11 && saldo <= 20):
       			return "Bronze";
                case (saldo >= 21 && saldo <= 50):
                return "Prata";
                case (saldo >= 51 && saldo <= 80):
                return "Ouro";
                case (saldo >= 81 && saldo <= 90):
                return "Diamante";
                case (saldo >= 91 && saldo <=100):
                return "Lendário";
                case (saldo >=101):
                return "Imortal"
                break }
              }        
}   
