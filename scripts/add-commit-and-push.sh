if [ -z "$1" ]
  then
	echo Uso: 
	echo 'add-commit-and-push.sh "mensagem do commit"'
	exit 1
fi


git add --all && git commit -m "$1" && git push
