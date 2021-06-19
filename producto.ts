export abstract class Producto {
    _precioUnidad : number
    _procentajeDescuento : number
    _cantidad : number
    _precioTotal : number
    _descuentoRealizado : number
    _precioDescuento : number

    constructor(precioUnidad : number, procentajeDescuento : number, cantidad : number){
        this._precioUnidad = precioUnidad
        this._procentajeDescuento = procentajeDescuento
        this._cantidad = cantidad
    }
    
    calcularPrecioTotal(vendidos: number) {
        return `Precio total = ${this._precioTotal = this._precioUnidad * vendidos}`
    }

    descuentoRealizado() {
        return `Descuento realizado = ${this._descuentoRealizado = this._precioTotal * this._procentajeDescuento}`
    }

    aplicarDescuento() {
        return `Precio con descuento = ${this._precioDescuento = this._precioTotal - this._descuentoRealizado}`
    }
    
    abstract cantidadVendidos() : string
       
     
}