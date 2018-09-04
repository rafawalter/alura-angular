if [ -z "$1" ]
  then
	echo Uso: 
	echo 'docker-cmd.sh <comando a ser executado>'
	exit 1
fi

docker run --rm -it --name alura-angular-api -v "$PWD":/usr/app -w /usr/app -p 3000:3000 rfwal:alura-angular-api $*