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

- A tela de listagem é a tela inicial
- Deve ter uma tela de listagem com pelo menos uma tabela e um campo de filtro
- A tela de listagem deve oferecer paginação
- A busca deve ser intuitiva e buscar por código quando o usuário fornecer
  números e por descrição se houver texto
- Ao selecionar uma linha da tabela, deve navegar para a tela de cadastro/edição
- A opção 'excluir' deve ser oferecida tanto na tela de edição quanto na tela de
  listagem
- Na tela de cadastro/edição, campos obrigatórios devem ser validados
- Este repositório é um _monorepo/multiproject_. o serviço a ser consumido
  encontra-se em _varejim-produto-service_. a implementação da solução frontend
  deve ser feita em _varejim-produto-web_.
- O _README.md_ do projeto frontend deve detalhar todos os passos e requisitos
  para executar o frontend e consumir o backend.
- É muito importante que o projeto possa ser executado em ambiente linux, macos
  ou windows. ao menos uma plataforma deve ser contemplada. indicar claramente
  onde os testes e desenvolvimento ocorreram no _README.md_
- Usar **vue-router** para implementar a SPA

## Pontuação bônus

- Demonstrar conhecimento de ES6
- Usar [vue test utils](https://vue-test-utils.vuejs.org/installation/#semantic-versioning)
- Usar alguma ferramenta capaz de gerar relatório de cobertura de testes
- Usar algum toolkit de componentes, integrado ou não ao vue
- Rodar em mais de uma plataforma (linux, macos, windows ou outro, x86 ou arm)
- Boas práticas de estilo e codificação
- Eslint
- Babel
- Dot env flow para variáveis de ambiente para a construção do projeto. como
  sugestão recuperar a url do endpoint do serviço a partir de variáveis de
  ambiente para construir o projeto
- Usar **vuex** pra preservar o estado dos filtros da tela de listagem
- _Criar e documentar_ alguma implementação extra não solicitada aqui mas que
  contribua de alguma forma para a solução.

## O que será julgado

- A justa e correta realização dos requisitos obrigatórios
- A forma que as pontuações bônus foram implementadas, se fazem sentido pelo
  menos enquanto exemplo de uso correto da tecnologia
- A qualidade do código
- A interpretação feita dos requisitos e dos bônus. Mesmo objetivos, são
  passíveis de interpretação e, caso pareça necessário, detalhar no README.md as
  motivações por trás da implementação feita
- A simplicidade da solução
- A forma que as pontuações bônus foram realizadas, se alguma for feita
- A qualidade do _README.md_ enquanto informativo de construção e execução do
  projeto
- Caso executada a última pontuação bônus, até que ponto a tecnologia aplicada é
  de fato interessante benéfica e quão boa é a apresentação e defesa técnica da
  mesma no _README.md_ do projeto web.

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

Uma vez implementada, indicar o link do repositório para o avaliador apontado
pela Casa Magalhães e aguardar feedback.

## Dúvidas

A qualquer momento entre em contato com o avaliador técnico indicado pela CM pra
sanar dúvidas. Comunicação é essencial.
