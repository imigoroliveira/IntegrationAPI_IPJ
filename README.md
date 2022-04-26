# Resumo do projeto

Para iniciar o projeto pela primeira vez, execute:

`docker-compose up --build -d`

Depois, pode utilizar:

`docker-compose up -d`

E para parar:

`docker-compose stop`


## O projeto possui duas Application Programming Interfaces (API):
- A primeira está na porta **9000**. Esta realiza um CRUD de usuário e uma requisição de para a segunda API informando o título de algum filme.
- A segunda está na pota **9001**. Esta recebe a requisição da primeira e utiliza os parâmetros para buscar na **OMDb API** um filme, seja por título ou ID. Ao receber os dados, os redireciona para a primeira API.

## Funcionalidades do projeto:
API Primária (PHP):
- Cadastrar, buscar, editar e excluir usuários no banco de dados;
- Buscar filmes em outra API conforme o nome ou id passado.

API Secundária (NodeJs):
- Receber a requisição da primeira API, verificar os dados e utilizá-los em uma requisição para a API externa;
- Você pode ver a documentação em http://localhost:9001/api-docs/ após o servidor iniciar;

## Link do repositório:
[https://github.com/imigoroliveira/IntegrationAPI_IPJ](https://github.com/imigoroliveira/IntegrationAPI_IPJ "https://github.com/imigoroliveira/IntegrationAPI_IPJ")

### Contribuidores:
------------
Ademilson Bregonde: https://github.com/ademilsonbregonde
Igor Oliveira: https://github.com/imigoroliveira
Jorge de Oliveira: https://github.com/Jorge-Neto
