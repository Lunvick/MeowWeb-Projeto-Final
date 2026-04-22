# MeowWeb-Projeto-Final

## Descrição
Projeto final da unidade de Engenharia de Qualidade e Teste de Front-End. Inclui uma aplicação web com integração de uma API pública, a TheCatApi.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (vanilla/framework)
- Cypress (Testes Automatizados E2E)

## Funcionalidades
- **Home Page:** Campo de busca com API pública.
- **Estado de Carregamento:** Botão de busca fica desabilitado (.disabled) enquanto aguarda a API [1.1].
- **Detalhes Page:** Exibição de informações em cards dos gatos pesquisados.
- **Favoritos Page:** Exibição da lista de gatos favoritos.
- **Navegação:** Links funcionais entre Home, Detalhes e Favoritos.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (Versão LTS recomendada: v18 ou superior);
- [npm](https://npmjs.com) (geralmente instalado com o Node.js);
- Um editor de código (ex: [VS Code](https://visualstudio.com));
- Git (para clonar o repositório).

## Como Rodar o Projeto
1. **Clone o repositório:**
   
   ```
   bash
   git clone https://github.com/Lunvick/MeowWeb-Projeto-Final.git
   cd MeowWeb-Projeto-Final
   ```
   
2. **Instale as dependências:**
   
Dependências são bibliotecas ou pacotes de terceiros que nosso projeto precisa para funcionar. Em projetos web, elas são gerenciadas pelo arquivo package.json. 
Exemplos neste projeto:  

- Cypress: Para automatizar testes 
- Fetch: Para realizar as requisições à API 

   ```
   bash
   npm install <dependencia>
   ```

3. **Abra o arquivo index.html em qualquer navegador (ou inicie um servidor local se estiver usando frameworks).**
4. **Inicie a aplicação:**

   ```
   bash
   npm start <aplicaçao>
   ```

##  Como Rodar os Testes (Cypress)
Este projeto utiliza Cypress para testes E2E (Navegação, Ciclo de Vida e Integração API).
O Cypress realiza testes E2E (End-to-End) para validar a jornada completa do usuário, incluindo a integração com a API pública e testes de UI.

1. **Abra o Cypress:**
   
   ```
   bash
   npx cypress open
   ```

2. **No painel do Cypress, clique em **E2E Testing** e selecione o teste desejado (.cy.js).**

3. **Para rodar em modo headless (terminal):**

   ```
   bash
   npx cypress run
   ```
   
## Documentação BDD (Gherkin)
Os cenários de teste estão descritos no arquivo specs.md na raiz do projeto, contendo cenários de busca, navegação entre páginas e tratamento de erros [1.1].

## Colaboradores
Anna Luiza Mello Rufino;
Ana Julia de Souza Fonseca;
Ana Luysa Rodrigues de Souza;
Clara Tavares de Paula Freitas;
Luna Clara Silva Santana;
Gabriela Santos da Silva. 


