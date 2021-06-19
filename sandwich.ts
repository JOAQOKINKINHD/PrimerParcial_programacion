import { Producto } from "./producto";

export class Sandwich extends Producto {

    _tamañoCm : number
    _vendido : number

    constructor(tamañoCm : number, vendido: number){
        super(300, 0.10, 4);
        this._tamañoCm = tamañoCm;
        this._vendido = vendido;
    }

    obtenerTamano() {
        return `El tamaño del sandwich es de: ${this._tamañoCm} Cm.`
    }
    cantidadVendidos(): string{
        return `Se vendieron: ${this._vendido} de ${this._cantidad}`
    }
}