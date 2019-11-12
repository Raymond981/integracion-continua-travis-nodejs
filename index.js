class Metodos{
    constructor(numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.numero3 = 0
    }

    get suma(){
        this.numero3 = this.numero1+this.numero2;
        return {
            value: this.numero3,
            text: `La suma de ${this.numero1} + ${this.numero2} = ${this.numero3}`
        }
    }

    get resta(){
        this.numero3 = this.numero1 - this.numero2;
        return {
          value: this.numero3,
          text: `La resta de ${this.numero1} - ${this.numero2} = ${this.numero3}`
        }
    }
}


module.exports = Metodos;