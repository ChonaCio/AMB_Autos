# UP Arquitectura Web - ABM Autos Abandonados

TP para Arquitectura web
ABM para sistema de gestion de Autos Abandonados

Node JS + React + PostgreSQL

Endpoints Principales (Registros):
  1) Lista de autos (Filtrado + Paginado)
    *GET /autos/list*
    Parametros: {filtro, pagina}
  2) Datos completos de autos
    *GET /autos/datos*
    Parametros: {id}
  3) Crear nuevo auto
    *POST /autos/new*
  4) Actualizar datos de auto
    *PUT /autos/upd*
  ----------------------------------------------------------
Endpoints Secundarios (Imagenes):
  1) GET - Imagenes (de Registro)
  2) POST/PUT - Imagenes
  3) DELETE - Imagenes
