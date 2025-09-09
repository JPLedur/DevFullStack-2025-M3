import { Link } from "react-router-dom";

export default function NotFound(){

    return(
        <div>
            <h1>404</h1>
            <p>Pádina não encontrada!</p>
            <Link to={"/"}>Voltar ate a pagina principal.</Link>
        </div>
    )
}