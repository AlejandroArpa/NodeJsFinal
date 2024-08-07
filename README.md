### Filtro NodeJS con express y sequelize

## Comandos iniciales para mysql

Vamos a configurar nuestras variables de entorno segun tengamos levantada nuestro servicio sql en local.

Adicional en el servicio ejecutamos 

```
CREATE DATABASE Ecomfast;
```

Para crear la base de datos. luego ejecutaremos:

```
USE Ecomfast;
INSERT INTO entities(name) VALUES ("Orders");
INSERT INTO entities(name) VALUES ("Users");
INSERT INTO roles(name) VALUES ("Admin");
INSERT INTO roles(name) VALUES ("Client");
INSERT INTO permissions(can_create, can_update, can_delete, can_get, role_id, entity_id) VALUES (1,1,0,1,2,1);
INSERT INTO permissions(can_create, can_update, can_delete, can_get, role_id, entity_id) VALUES (1,1,1,1,1,1);
INSERT INTO permissions(can_create, can_update, can_delete, can_get, role_id, entity_id) VALUES (1,1,1,1,1,2);
INSERT INTO permissions(can_create, can_update, can_delete, can_get, role_id, entity_id) VALUES (0,0,0,0,2,2);
```

El orden de estas instrucciones importa ya que los permisos se encuentran creados para el usuario admin con id 1, y client con id 2.

Luego procedemos a instalar las dependencias:

```
npm i
```
Y por ultimo para empezar a correr el servidor

```
npm start
```

Luego podemos acceder a la documentacion de la api en swagger, mediante la direccion:

```
http://localhost:3000/docs/
```