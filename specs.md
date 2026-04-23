## Funcionalidade: Campo de busca, com resposta em API

### Cenário 1: Fluxo de transição entre páginas
Dado que o usuário está na página principal
Quando o usuário realizar uma busca
Então a URL deve mudar para “detalhes.html”
E o usuário deve ver as informações do gato escolhido

## Funcionalidade: Aba "favoritos"

### Cenário 2: Favoritar gatos após busca
Dado que o usuário está na página principal
Quando o usuário realizar uma busca
Então a URL deve mudar para “detalhes.html”
E o usuário deve ver as informações do gato escolhido
Então o usuário favorita o gato escolhido
E o gato será adicionado a aba “favoritos”

## Funcionalidade: Botão para remoção de cards favoritados

### Cenário 3: Remoção de gatos da lista de favoritos
Dado que o usuário está na página principal
Quando o usuário selecionar “favoritos" 
Então a URL deve mudar para “favoritos.html”
E o usuário deve ver a lista de gatos favoritos
Quando o usuário seleciona o botão “remover” de um (ou mais) gato(s) favorito(s)
Então o usuário tira o(s) gato(s) da lista de favoritos
