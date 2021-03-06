import Title from "./Title"
import Helloworld from "./Helloworld"
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {
  const lista_pessoas = [
    {
      nome: "01/06/2022 08:13",
      idade: "NOTA À COMUNIDADE: Bloqueio do orçamento da Educação",
    },
    {
      nome: "31/05/2022 12:35",
      idade: "IFRO publica edital para Cadastro de Interesse de Remoção",
    },
    {
      nome: "30/05/2022 09:54",
      idade: "Parceria entre IFRO e UAB irá ampliar a oferta de cursos de pós-gradução e de Pedagogia",
    },
    {
      nome: "25/05/2022 15:10",
      idade: "Manutenção do Sistema SUAP acontece nesta sexta-feira (27)",
    },
    {
      nome: "25/05/2022 07:04",
      idade: "Pais e Responsáveis por alunos podem ter acesso a informações estudantis pelo App IFRO mobile",
    },

  ]
  return(
    <div>
    <Tittle />


    {lista_pessoas.map ((pessoa) =>{
      return <Perfil 

                    nome={pessoa.nome}
                    idade={pessoa.idade}/>
    })}
    
    </div>
  );
}

export default App

