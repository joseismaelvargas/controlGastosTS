import "../components/style/gestor.css"

export const NuevaEntrada = () => {
    return (
        <div className="container">
            <h4>Nueva Entrada</h4>
               <input  type="text" placeholder="Introduce un Concepto" />
                <input type="text" placeholder="Introduce una Cantida" />
            <div className="opciones">
             <button className="ingreso">Añadir ingreso</button>
             <button className="gasto">Añadir gasto</button>
            </div>
        </div>
    )
}
