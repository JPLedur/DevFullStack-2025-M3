import { useStage} from 'react'

const content = [ // Array de conteúdo para cada aba
    {
      label: "Por que React?",
      items:[
      "React é extremamente popular", // Primeira aba: motivos para usar React
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ]
    },
    {
      label: "Recursos",
      items:[
      "Componentes, JSX e Props", // Segunda aba: principais recursos do React
      "Estado",
      "Hooks (ex.: useEffect())",
      "Renderização dinâmica"
    ]
    },
    {
      label: "Relações",
      items:[
      "Página oficial (react.dev)", // Terceira aba: recursos para aprendizado do React
      "Next.js (Framework Fullstack)",
      "React Native (construa aplicativos móveis nativos com React)"
      ]
    }
  ];
function App() {

  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>ReactJs</h1>
          <p>Estou estudando React</p>
        </header>

        <div>
          <menu>
            {content.map((tab, index) => (
              <button key={tab.label} onClick={() => atualizaIndexAbaAtiva(index)}>{tab.label}</button>
            ))}
          </menu>

          <div>
            <ul>
              {content[indexAbaAtiva].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
