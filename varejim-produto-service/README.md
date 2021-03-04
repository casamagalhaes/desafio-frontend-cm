# varejim-produto-service

Endpoints REST disponibilizados para dar suporte ao desenvolvimento do frontend.

## Requisitos para rodar o service

Qualquer plataforma capaz de rodar o **Node** a partir da **versão 12** deve
funcionar.

## Instalação e execução

Abra a pasta que contém este README em um terminal e execute:

```bash
npm install 
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

## Endpoints disponíveis em modo de desenvolvimento

- <http://localhost:3000>
  - `/secoes`
    - **GET**: lista as seções, que servem pra separa os produtos em seções.
  - `/produtos`
    - **GET**: lista os produtos
    - **POST**: insere um produto novo
  - `/produtos/:id`
    - **PUT**: atualiza um produto de determinado :id
    - **DELETE**: remove um produto de determinado :id

## Formato do payload

- **produto**:

```js
{ id:1, descricao:"Jabuticaba", secao_id:7 }
```

- **secao**:

```js
{ id:1, descricao:"frutas" }
```

## Considerações finais

O desafio é de frontend, mas se desejar incrementar alguma coisa no backend,
sinta-se livre. Apenas tome o cuidado de não deixar de atender nenhum dos
requisitos obrigatórios do [DESAFIO](../DESAFIO.md)
