import { Producto } from "./producto";
export class Bebida extends Producto {
    
    _litrosUnidad : number
    _materialEnvase : string
    _vendido: number

    constructor(litrosUnidad : number, materialEnvase : string, vendido : number){
        super(50, 0.05, 12);
        this._litrosUnidad = litrosUnidad;
        this._materialEnvase = materialEnvase;
        this._vendido = vendido;
    }

    obtenerMaterial() {
        return `El material es: ${this._materialEnvase}`;
    }
    calcularLitros() {
        return `Litros en total: ${this._litrosUnidad * this._cantidad}`;
    }

    cantidadVendidos(): string{
        return `Se vendieron: ${this._vendido} de ${this._cantidad}`
    }
}
