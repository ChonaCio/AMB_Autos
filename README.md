# UP Arquitectura Web - ABM Autos Abandonados

TP para Arquitectura web
ABM para sistema de gestion de Autos Abandonados

Node JS + React + PostgreSQL

Endpoints Principales (Registros):
  1) Lista de autos (Filtrado + Paginado)<br>
    **GET /autos/list**<br>
    Parametros: {filtro, pagina}
    
  2) Datos completos de autos<br>
    **GET /autos/datos**<br>
    Parametros: {id}
    
  3) Crear nuevo auto<br>
      **POST /autos/new**<br>
      
  4) Actualizar datos de auto<br>
      **PUT /autos/upd**
  ----------------------------------------------------------
Endpoints Secundarios (Imagenes):
  1) GET - Imagenes (de Registro)
  2) POST/PUT - Imagenes
  3) DELETE - Imagenes
