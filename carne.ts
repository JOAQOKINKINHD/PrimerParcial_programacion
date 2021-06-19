import { Producto } from "./producto";
export class Carne extends Producto {

    _corte : string 
    _origenAnimal : string 
    _vendido : number
    constructor(corte : string, origenAnimal : string, vendido : number){
        super(500, 0.15, 6);
        this._corte = corte;
        this._origenAnimal = origenAnimal;
        this._vendido = vendido
    }

    obtenerCorte() {
        return `El corte de carne es: ${this._corte}`
    }
    obetenerOrigen() {
        return `El orgien animal es: ${this._origenAnimal}`
    }
    cantidadVendidos(): string{
        return `Se vendieron: ${this._vendido} de ${this._cantidad}`
    }
}
