const content = [ // Array de conteúdo para cada aba
    [
      "React é extremamente popular", // Primeira aba: motivos para usar React
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ],
    [
      "Componentes, JSX e Props", // Segunda aba: principais recursos do React
      "Estado",
      "Hooks (ex.: useEffect())",
      "Renderização dinâmica"
    ],
    [
      "Página oficial (react.dev)", // Terceira aba: recursos para aprendizado do React
      "Next.js (Framework Fullstack)",
      "React Native (construa aplicativos móveis nativos com React)"
    ]
  ];
  
  const btnReact = document.getElementById("btn-react");
  const btnRecurses = document.getElementById("btn-recurses");
  const btnRelative = document.getElementById("btn-relative");
  const tabContent = document.getElementById("tab-content");

  function displayContent(items){
    const list = document.createElement("ul")
    list.innerHTML = items.map(item => `<li>${item}<li/>`).join("");
    tabContent.innerHTML = "";
    tabContent.append(list)
  }

  function highlightButton(btn){
    [btnReact,btnRecurses,btnRelative].forEach(button => button.classList.remove("active"))
    btn.classList.add("append")
  }

  function handlerClick(event){
    const buttonMap = {
        "btn-react": 0,
        "btn-recurses": 1,
        "btn-relative":2
    };
    highlightButton(event.target);
    displayContent(content[buttonMap[event.target.id]]);
  }

  displayContent(content[0]);

  [btnReact,btnRecurses,btnRelative].forEach(btn => btn.addEventListener("click",handlerClick))