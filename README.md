Structure du site web : 
En backend un application django qui sert à fournir les fichiers statiques.
Le frontend est une application React, utilisant pour la mise en forme principalement des composants Bootstrap ainsi que du css écrit à la main.

Enfin le web à proprement parler est un serveur nginx, qui sert ici uniquement à faire le lien entre le web et l'application django gérée par gunicorn, via une socket linux.

Cette architecture n'est pas minimale pour le rendu demandé, mais cela est un choix assumé afin de tenter de se rapprocher le plus possible d'une architecture réelle de production. (il faut, en guise de piste d'amélioration faire servir au serveur nginx les fichiers statiques).

