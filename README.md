# Escale - Teste técnico - Poke Api

<p align="center">
  <img alt="Escale logo"src="https://cdn.prod.website-files.com/679d467e1ba7f0477be7d60e/679d8fb385ce94fe69ea6bfd_logo-escale.svg" width="40%" height="auto">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>
  <a href="#-tecnologias">Tecnologias</a>
  <a href="#-fundamentos-e-estratégias-abordadas">Fundamentos e estratégias</a>
  <a href="#-documentação">Documentação</a>
  <a href="#-clonando-e-executando">Clonando e executando</a>
  <a href="#️-rotas">Rotas</a>
  <a href="#-licença">Licença</a>
</p>

## 📌 Projeto
<b>Esta aplicação foi desenvolvida entre os dias 01 à 03 de abril de 2025</b><br>


O objetivo desta aplicação é construir uma API HTTPs que utiliza a Poke API para realizar cadastros de pokemons na base de dados via nome do pokemon.

## 👩‍💻 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Nest](https://docs.nestjs.com) - Linguagem escolhida pela sua robustez
- [Docker](https://www.docker.com/) - Criação de imagens e conteiners para melhor orquestração e execução do aplicativo em especificos contextos.
- [MongoDB](https://www.mongodb.com/) - Banco de dados não relacional para persistência dos dados.
- [Swagger](https://swagger.io/) - Para construção da documentação da API.

## 👨‍🏫 Fundamentos e estratégias abordadas

Esta API foi desenvolvida com o propósito de <b>entrega performática e escalável</b>.<br>

<b>Neste projeto, foram abordados patterns de código, entre eles, estão:</b>
- Single responsibility principle (SPR);
- Dependecy inversion principle (DIP);


## 📚 Documentação
A documentação dessa API foi construída utilizando um toolset famoso para a construção de documentações, chamado de [Swagger](https://swagger.io/).<br>
<b>Para conseguir acessar a mesma, basta se redirecionar para a rota `/docs` depois de iniciar o servidor.</b>

## 📥 Clonando e executando
Para conseguir executar o projeto sem nenhuma interferência, certifique-se de ter os requisitos mínimos:<br>

- [Nest](https://docs.nestjs.com)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)
<br>

<b>Passo a passo:</b>

1. Clone o repositório localmente usando o seguinte comando no seu terminal de preferência:
```shell
    git clone https://github.com/pedrodalpa/poke-escale    # Clonar repositório
    cd poke-escale                                       # Entrar no repositório clonado
```

2. Suba os containers (API e MongoDB) para a integração total dos serviços
```shell
  docker-compose up -d

  # é possível também parar os containers assim que quiser usando:
  # docker-compose down
```

3. Pronto! Por padrão, o seu servidor estará rodando na URI http://localhost:3000

## 🛣️ Rotas

- **[GET]** /api
  - Com o projeto em execução voce pode acessar http://localhost:3000/api para conferir a documentação


</br></br>
<hr>
<p align="center">Desenvolvido por Pedro Dalpa</p>