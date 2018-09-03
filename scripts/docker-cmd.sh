if [ -z "$1" ]
  then
	echo Uso: 
	echo 'docker-cmd.sh <comando a ser executado>'
	exit 1
fi

docker run --rm -it --name alura-angular -v "$PWD/alurapic":/usr/app -w /usr/app -p 4200:4200 -p 49153:49153 rfwal:alura-angular $*