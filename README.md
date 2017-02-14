O projeto consiste em uma API Rails 5 e um front em Angular2

Desafio proposto

Este projeto consiste em construir uma aplicação web, utilizando Ruby 2.2+ Rails 4.2+, e o banco de dados PostgreSQL 9+. > Não é importante a parte gráfica do projeto, sugiro utilizar o Bootstrap para ficar fácil e minimamente apresentável.

Você poderá usar extensões ao seu gosto, desde que eles não componham uma solução completa, ou seja, você deve construir e > não somente parametrizar algo pronto.

Não esqueça de documentar o que for necessário da aplicação no arquivo README.md informando todos os dados necessários para > rodar o projeto. Versione também o dump da última versão do seu banco de dados se necessário. É recomendável a utilização do setup de banco via rake setup/migrate para facilitar a execução e avaliação.

CASE:

Um cliente fictício passou as 'stories' com os detalhes do que ele precisa:

Como visitante eu devo conseguir criar uma conta utilizando meu nome, email e uma senha, e ao concluir com sucesso meu cadastro devo receber um email de confirmação. Como visitante eu devo conseguir me autenticar utilizando meu email e senha. Como usuário devo poder alterar meu cadastro e me deslogar. Como usuário administrador devo poder visualizar todos os usuários. Como usuário administrador devo poder buscar um usuário pelo seu nome. Como usuário administrador devo poder alterar os dados de qualquer usuário. Como usuário administrador devo poder remover um usuário. Como usuário administrador devo poder listar todos os usuários deletados.

Instalação Front
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
  nvm install node
  Caso não funcione executar o seguinte comando e repetir a linha anterior: source ~/.bashrc 
Comandos:

Executar Front:
  npm install
  ng serve
  Abrir o endereço `http://localhost:4200/`

Link para aplicação no Heoku:  Ainda não disponivel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.
