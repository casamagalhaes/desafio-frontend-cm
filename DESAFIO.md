# Telas de busca e cadastro de produtos

A _super-big-corp_ tem uma nova solução chamada _varejim_. Esta resolve o
problema do pequeno varejista.

Para tanto, esse software tem uma coleção de endpoints REST que devem ser
consumidos pro interfaces web modernas.

Implemente uma pequena SPA (Single Page Application) contendo a tela de listagem
e a tela de cadastro/edição de produtos.

As telas deverão consumir os endpoints REST oferecidos pelo projeto backend node
presente neste repositório.

Um _README.md_ deve ser adicionado explicando os passos necessários para
construir e rodar o projeto frontend.

## Requisitos obrigatórios

- a tela de listagem é a tela inicial
- deve ter uma tela de listagem com pelo menos uma tabela e um campo de filtro
- a tela de listagem deve oferecer paginação
- a busca deve ser intuitiva e buscar por código quando o usuário fornecer
  números e por descrição se houver texto
- ao selecionar uma linha da tabela, deve navegar para a tela de cadastro/edição
- a opção 'excluir' deve ser oferecida tanto na tela de edição quanto na tela de
  listagem
- na tela de cadastro/edição, campos obrigatórios devem ser validados
- este repositório é um _monorepo/multiproject_. o serviço a ser consumido
  encontra-se em _varejim-produto-service_. a implementação da solução frontend
  deve ser feita em _varejim-produto-web_.
- o _README.md_ do projeto frontend deve detalhar todos os passos e requisitos
  para executar o frontend e consumir o backend.
- é muito importante que o projeto possa ser executado em ambiente linux, macos
  ou windows. ao menos uma plataforma deve ser contemplada. indicar claramente
  onde os testes e desenvolvimento ocorreram no _README.md_
- usar **vue-router** para implementar a SPA
  
## Pontuação bônus

- demonstrar conhecimento de ES6
- usar [vue test utils](https://vue-test-utils.vuejs.org/installation/#semantic-versioning)
- usar alguma ferramenta capaz de gerar relatório de cobertura de testes
- usar algum toolkit de componentes, integrado ou não ao vue
- rodar em mais de uma plataforma (linux, macos, windows ou outro, x86 ou arm)
- boas práticas de estilo e codificação
- eslint
- babel
- dot env flow para variáveis de ambiente para a construção do projeto. como
  sugestão recuperar a url do endpoint do serviço a partir de variáveis de
  ambiente para construir o projeto
- usar **vuex** pra preservar o estado dos filtros da tela de listagem

## O que será julgado

- a justa e correta realização dos requisitos obrigatórios
- a forma que as pontuações bônus foram implementadas, se fazem sentido pelo
  menos enquanto exemplo de uso correto da tecnologia
- a qualidade do código
- a interpretação feita dos requisitos e dos bônus. Mesmo objetivos, são
  passíveis de interpretação e, caso pareça necessário, detalhar no README.md as
  motivações por trás da implementação feita
- a simplicidade da solução
- a forma que as pontuações bônus foram realizadas, se alguma for feita
- a qualidade do _README.md_ enquanto informativo de construção e execução do
  projeto

## Prazo

O **esforço** imaginado para realizar este desafio é de 4 dias (i.e. 32 horas).

Recomenda-se uma data de início contemplando um fim de semana caso exista um
trabalho regular semanal a ser realizado, pois assim é possível solicitar mais
um ou dois dias compensando o esforço a ser feito fora do horário de expediente.

É possível terminar antes deste prazo, e se os requisitos obrigatórios forem
cumpridos o bônus de tempo é apreciado.

Caso o avaliador observe que é preciso algum ajuste no desafio, dois dias
adicionais de esforço serão oferecidos. Mais uma vez, negociar como será a
janela de tempo.

## Forma de entrega

uma vez implementada, indicar o link do repositório para o avaliador apontado
pela Casa Magalhães e aguardar feedback.
