function Produtos(props){
    return(
        <>
        <h1> Produto = {props.name}</h1>;
        <h1> Preço = {props.price}</h1>;
        <h1> Descrição = {props.description}</h1>;
        </>
    )
}

function App(){
    return(
        <>
        <Produtos name="Chiclete" price="2.5" description="Goma de mascar de menta"/>
        </>
    )
}

export default App