import { Sandwich } from "./sandwich";
import { Bebida } from "./bebida";
import { Carne } from "./carne";

const p1 = new Carne('Vacío', 'Vacuno',3);
const p2 = new Bebida(2,'plastico',4);
const p3 = new Sandwich(30,2);

console.info("----------------------------------------------------------")
console.info("Ejemplo Polimorfismo")
console.info("----------------------------------------------------------")
console.info(p1.calcularPrecioTotal(p1._vendido),'|', p1.descuentoRealizado(),'|', p1.aplicarDescuento(),'|', p1.obetenerOrigen(),'|', p1.obtenerCorte(), '|', p1.cantidadVendidos());
console.info("----------------------------------------------------------")
console.info(p2.calcularPrecioTotal(p2._vendido),'|', p2.descuentoRealizado(),'|', p2.aplicarDescuento(),'|', p2.obtenerMaterial(),'|', p2.calcularLitros(),'|', p2.cantidadVendidos());
console.info("----------------------------------------------------------")
console.info(p3.calcularPrecioTotal(p3._vendido),'|', p3.descuentoRealizado(),'|', p3.aplicarDescuento(),'|', p3.obtenerTamano(),'|', p3.cantidadVendidos());
console.info("----------------------------------------------------------")