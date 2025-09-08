import { useState, useEffect } from "react";
import axios from "axios";

// Função que faz a requisição
const AxiosPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    event.preventDefault(); // ⛔ evita o reload da página

    const newUser = {
      name: name,
      email: email,
    };

    try {
      setLoading(true);
      // Realiza a requisição GET para obter os usuários usando fetch
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      setMensagem(response.data);
      setLoading(false);
    } catch (err) {
      // Se ocorrer um erro, define a mensagem de erro no estado
      setError("Erro ao carregar usuários: " + err.message);
      // Define 'loading' como false após o erro
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Criar novo Usuario</h1>

      <div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button type="button" onClick={createUser} disabled={loading}>
        {loading ? "Enviando..." : "Criar Usuário"}
      </button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default AxiosPost;
