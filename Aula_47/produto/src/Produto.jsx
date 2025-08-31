import { useState } from "react";

function Produto(){
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState()
    const [description,setDescription] = useState("")

    const [error,setError] = useState("")
    const [products,setProducts] = useState([])

    const [categoryFilter, setCategoryFilter] = useState("Todos")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            price,
            category,
            description
        });
        if(!name){ setError("O nome é obrigatório!"); return;}
        if(!price || price <= 0){ setError("O preço tem de ser maior do que zero!"); return;}
        if(!category){ setError("A categoria deve ser prenchida!"); return;}
        if(!description){ setError("O produto deve ter uma descrição"); return;}

        const novoProduto = {
            id:Date.now(),
            name: name,
            price: parseFloat(price).toFixed(2),
            category,
            description
        }

        setProducts([...products, novoProduto]);
        
        setError("")
        setName("");
        setPrice("");
        setCategory("");
        setDescription("");
        console.log(name,price,category,description)
    }

    const handleRemove = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    const filterProducts = products.filter((product) => categoryFilter === "Todos" || product.category === categoryFilter)

    return(
        <>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>

        <h1>Formulário</h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o nome do produto: "/>
            </div>

            <div>
                <label>Preço:</label>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Digite o valor do produto"/>
            </div>

            <div>
                <label>Categoria: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione</option>
                <option value="eletronico">Eletrônico</option>
                <option value="roupa">Roupa</option>
                <option value="livro">Livro</option>
                </select>
            </div>

            <div>
                <label>Descrição: </label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite a Marca"/>
            </div>

            <button type="submit">Confirme aqui!</button>
        </form>
        </div>

        <div>
            <h2>Ultimos Produtos Adicionados</h2>

            <p>Nome:</p>
        </div>

        <label>
            Filtrar por Categoria:
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="eletronico">Eletrônico</option>
                <option value="roupa">Roupa</option>
                <option value="livro">Livro</option>
                </select>
        </label>

        <ul>
            {filterProducts.map((product) => (
                <li key={product.id}>
                    <strong> {product.name} - ${product.price} {product.category} </strong>
                    <p> {product.description} </p>
                    <button onClick={() => handleRemove(product.id)}>Clique para remover!</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Produto;