<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Init template NESTJS [Spanish]

1. Clonar proyecto
2. Instalar dependencias
```
yarn install
```
3. Clonar archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Cambiar el nombre de proyecto al gusto en
    - package.json
    - docker-compose
    - .env (Setear también tokens de cloudinary)

6. Levantar la base de datos con docker
```
docker-compose up -d
```
7. Levantar en modo de desarrollo
```
yarn start:dev
```


# Production build
1. Crear archivo ```env.prod```
2. Llenar las variables de entorno
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## Nota
Para levantar la imagen desde el caché después de hacer el build
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```
