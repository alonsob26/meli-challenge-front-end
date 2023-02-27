# Test Práctico - Frontend

Este es un monorepo que contiene el challenge técnico de mercado libre (frontend) que basicamente consiste en la creación de una app para busqueda de articulos de mercado libre, consultado los detalles de cada uno. Para ello fue necesario crear client/server para frontend y backend con apis. Si quieres revisar información detallada del challenge ve a la carpeta Challenge en el cual se describe todo lo necesario para su desarrollo.

## Tecnologías principales

- React v18.2.0
- React router dom v6.8.1
- Sass v1.58.2
- Node v18.7.0
- Express v4.18.2
- Jest v29.4.3

## Variables de entorno

El proyecto utiliza variables de entorno asi como se muestra en los archivos .env.example:

- Client:

  - `REACT_APP_API_URL`=http://localhost:3001/api
  - `REACT_APP_DOMAIN`=http://localhost:3000
  - `REACT_APP_DOMAIN_NAME`=localhost:3000

- Server:

  - `PORT`=3001

## Instalación

1.- Instalar dependencias

```bash
  npm install
```

2.-Inicializar el proyecto

```bash
  npm start
```

## Pruebas unitarias

Para ejecutar las pruebas utilice el siguiente comando:

```bash
  npm test
```

## Build

Para generar el build:

```bash
  npm run build:client
```

## Authors

- [@alonsob26](https://www.github.com/alonsob26)

## Soporte

Comunicate conmigo para cualquier duda o comentario:

alonso.burgos.astorga@gmail.com
