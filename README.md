# Atik API

Este es el proyecto backend para la aplicacion movil `atik`, desarrollado utilizando node.js y express.

Se tomo como boilerplate un proyecto con configuracion basica de librerias utilizadas para autenticacion y autorizacion de usuarios en una REST API escrita con express, sequelize y passport. Se adapto lo anterior para las necesidades y se implementaron otros controladores/rutas necesarias.

## Para correr el proyecto
Utilizar `yarn` o `npm` para el manejo de paquetes y scripts de inicio. 

### Instalacion de dependencias
`yarn install` o `npm install`

## Base de datos
La base de datos esta configurado con `postgres`, pero se puede correr con cualquier otro dialecto especificado en la configuracion de sequelize, se anexa un archivo para poblar la data el cual debe ser corrido luego de crear la bdd de la siguiente manera:

1. Loggearse a psql utilizando el DBMS de preferencia
2. Crear una bdd llamada `atik` 
3. Poblar la bdd luego de correr el API por primera vez (sequelize se encarga de la creacion de la bdd relacional)

### Correr proyecto
Se utilizan variables de ambiente para configuracion.
El archivo `.env` proveido en este repositorio es un ejemplo de configuracion basico con usuario `postgres` y password `postgres`, pero estos datos deben ser ajustados a la maquina donde se quiera correr.

En ambiente local:
`yarn start dev` o `npm run dev`

Para ambiente de produccion:
`yarn start` o `npm start`

### Poblar base de datos
Para poblar asegurarse que ya se haya corrido la seccion de `Base de datos` y luego correr el script que se encuentra en la raiz de este proyecto `init.sql`
