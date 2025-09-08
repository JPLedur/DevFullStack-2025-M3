import { useState,useEffect } from "react";
import axios from 'axios'

// Função que faz a requisição
const AxiosUser = () => {
    const [users,setUsers] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    const getUsers = async () => {
        try {
            // Realiza a requisição GET para obter os usuários usando fetch
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data)
            setLoading(false);
        } catch (err) {
            // Se ocorrer um erro, define a mensagem de erro no estado
            setError('Erro ao carregar usuários: ' + err.message);
            // Define 'loading' como false após o erro
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <div>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email} </li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosUser