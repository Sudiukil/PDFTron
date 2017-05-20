#/bin/sh

if [ "$1" ]
then
	if [ "$1" = "all" ]
	then
		./node_modules/electron-packager/cli.js . --overwrite --platform linux,win32,darwin
	else
		./node_modules/electron-packager/cli.js . --overwrite --platform $1
	fi
else
	./node_modules/electron-packager/cli.js . --overwrite
fi

exit 0
