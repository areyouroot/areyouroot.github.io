#!/bin/bash
git add .
echo "enter the message for commit:"
read message
echo "$message"
git commit -m "$message" #this converts message with collen
git push
git status

#admin user name admin and password admin
#test user name test and password asd123FGH$%^