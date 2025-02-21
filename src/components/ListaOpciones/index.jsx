import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const equipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"];

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return (
        <div className="lista-opciones">
            <label>{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option> )} 
            </select>
        </div>
    );
}

export default ListaOpciones;