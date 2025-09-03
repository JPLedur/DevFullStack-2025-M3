import { useState,useEffect } from "react";

// Função que faz a requisição
const FecthUser = () => {
    const [users,setUsers] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    const getUsers = async () => {
        try {
            // Realiza a requisição GET para obter os usuários usando fetch
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            // Verifica se a resposta não foi bem-sucedida
            if (!response.ok) {
                // Lança um erro caso a resposta não seja ok
                throw new Error('Falha na requisição.');
            }
            
            // Converte a resposta em formato JSON
            const data = await response.json();
            
            // Atualiza o estado 'users' com os dados recebidos da requisição
            setUsers(data);
            // Após os dados serem carregados, define 'loading' como false
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

export default FecthUser