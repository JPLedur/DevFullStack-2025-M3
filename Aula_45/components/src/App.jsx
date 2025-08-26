function Button(props){
  return <button onClick={props.               handleClick}> Clique Aqui! </button>
}

function App() {

const handleClick = () => {
  alert("Botão clicado")
}
  return (
    <>
      <Button onClick={handleClick}/>
    </>
  )
}

export default App
