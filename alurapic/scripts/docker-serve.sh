echo ### http://localhost:4201
docker run --rm -it --name alura-angular -v "$PWD":/usr/app -w /usr/app -p 4201:4200 -p 49153:49153 rfwal:alura-angular ng serve --host 0.0.0.0 -o