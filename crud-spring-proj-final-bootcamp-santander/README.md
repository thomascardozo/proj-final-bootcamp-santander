# Projeto Final Bootcamp Santander - Spring + Angular

## Gerenciador de salas de reuniões

## Stack utilizada:


 * Spring Web
 * Spring Data JPA
 * H2 Database
 * Java 8
 * Maven
 
## Endpoints criados na API

* Criar sala de reuniao
POST - /api/v1/rooms

* Listar todas as salas
GET - /api/v1/rooms

* Buscar uma sala pelo Id
GET - /api/v1/rooms/{id}

* Atualizar uma sala pelo Id
PUT - /api/v1/rooms/{id}

* Excluir uma sala pelo id
DELETE - /api/v1/rooms/{Id}

## Atualizações em relação do projeto original

* Alteração dos tipos dos atributos de datas e horas do formato 'String' para
  Date / Local Time na entidade 'Room'
* Ajuste no método getAllRooms(), da classe RoomController, para disponibilizar a listagem
  das reuniões em ordem decrescente, por data

#
[Github do projeto original](https://github.com/Kamilahsantos/Crud-Spring-liveCoding-Dio)

[Live base da Digital Innovation One (Kamila Santos) dessa aplicação](https://www.youtube.com/watch?v=_2gRnfJeyMM)



 
