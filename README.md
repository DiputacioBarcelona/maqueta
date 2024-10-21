= Maqueta corporativa v3 =

== Preparació de l'entorn local ==

Construïda amb Bootstrap 5

Per compilar el projecte localment es requereix instal·lar:

1. npm i nodejs: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. composer: https://getcomposer.org/download/
3. SASS/SCSS: npm install -g sass

== Instal·lació de les llibreries i dependències ==

> sh bin/install.sh

== Actualització de les llibreries i dependències ==

Actualitza tant les libreries del composer.json (twig, etc.) com els del package.json (bootstrap, etc.)

> sh bin/update.sh

== Compilació del projecte ==

Executar això cada cop que es canvia un SASS per regenerar tots els CSS.

> sh bin/build.sh

== Execució en local ==

No cal apache/nginx local ni similars:

> php -S localhost:80
