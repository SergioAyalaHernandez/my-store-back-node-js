1. npm init -y   <--- para iniciar el pruecto "package.json"

2. Se crean los archivs: 1. gitignore 2. eslitrc.json 3. editorconfig

3. luego el index.js

4. para la configuración de gitignore se puede buscar en "gitignore. io", para que de toda la configuración

5. configuración inicial para el ".editorconfig" y ".eslitrc.json" es para resetear

6. Se coloca el "dev","start" y lint para configuraciones

            "scripts": {
              "dev": "nodemon index.js",
              "start": "node index.js",
              "lint": "eslint",
              "test": "echo \"Error: no test specified\" && exit 1"
            },

          se instalan dependencias: "npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D"

          la -D del final es para que sepan que es de desarrollo

          eslint es para buenas practicas

7. instalar y usar express: (npm i express)

8. instalar faker para generar datos falsos en vez de una BD (npm i @faker-js/faker)

9. para crear enrutamiento, creamos la carpeta routes

    se crea el index.js para el enrutamiento y se distribuye el enrutamiento
