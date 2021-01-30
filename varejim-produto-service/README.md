# varejim-produto-service

endpoint rest disponibilizado para dar suporte ao desenvolvimento do frontend

## requisitos para rodar o service

qualquer plataforma capaz de rodar o **node** a partir da **versão 12** deve
funcionar

## instalação e execução

abra a pasta que contém este README um terminal e:

```bash
npm install 
```

em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

## endpoints disponíveis em modo de desenvolvimento

- <http://localhost:3000>
  - /secoes
    - **GET**: lista as seções, que servem pra separa os produtos em seções.
  - /produtos
    - **GET**: lista os produtos
    - **POST**: insere um produto novo
  - /produtos/:id
    - **PUT**: atualiza um produto de determinado :id
    - **DELETE**: remove um produto de determinado :id

## formato do payload

- **produto**:

```js
{id:1, descricao:"Jabuticaba", secao_id:7}
```

- **secao**:

```js
{id:1, descricao:"frutas"}
```

## considerações finais

o desafio é de frontend, mas se desejar incrementar alguma coisa no backend,
sinta-se livre. apenas tome o cuidado de não deixar de atender nenhum dos
requisitos obrigatórios do [DESAFIO](../DESAFIO.md)
