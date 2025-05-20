import "../components/style/gestor.css"
import { Cartera } from "./Cartera"
import { NuevaEntrada } from "./NuevaEntrada"
export const Gestor = () => {
    return (
       <main >
         <h3 className="text-center text-white">GESTOR DE GASTOS</h3>
         <p className="text-center text-white">CARTERA PRINCIPAL</p>
         <Cartera></Cartera>
         <NuevaEntrada></NuevaEntrada>
       </main>
    )
}
