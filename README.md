This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React-Marvel
Desafio técnico Softplan.

Projeto criado seguindo os requisitos definidos por e-mail.

## Infornações Importantes

### TravisCI
O projeto está linkado com o TravisCI, e a cada atualização feita no github, os testes são executados e caso todos passem, uma rotina de build+deploy é executada e o deploy é feito no github pages.

### Marvel API
Para que a aplicação funcione, é necessário criar um arquivo `.env` na raiz do projeto (existe um arquivo com o nome .env.example que deve ser usado como base) e adicionas as chaves públicas e privadas da API da Marvel.

```
API_PUBLIC_KEY=11111111111111111111111111
API_PRIVATE_KEY=22222222222222222222
```

### Paginação
A fim de melhorar a performance da aplicação, adicionei um componente de paginação na busca de personagens e também na listagem de séries.

### Alteração no Client-Side
Devido à paginação, as alterações do personagem ficam persistidas até que o fluxo da aplicação volte à tela de pesquisa de personagens.

Decidi habilidar apenas a alteração do nome e descrição do personagem, para não aumentar muito o nível de complexidade da aplicação e ter que adicionar upload de arquivos, etc.

### Gerenciamento de Estado
Utiliza o Redux. Adicionei o Saga para deixar centralizadas todas as regras de negócio, como seria a princípio feito numa aplicação que utilizaria um BD para persistir as alterações.

### Layout
Tentei deixar o mais clean possível.

### Testes
Criei testes para os componentes e para os reducers.

### Reactotron
Por conta, adicionei o suporte ao Reactotron para facilitar a inspeção nas informações da aplicação. Ele está configurado desde o básico até o Saga.

### Agradecimento
Desde já agradeço a oportunidade e fico à disposição para qualquer coisa.
