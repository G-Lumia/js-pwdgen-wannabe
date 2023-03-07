const userName = prompt('Enter your name');
const userSurname = prompt('Enter your surname');
const userFavoriteColor = prompt('Enter your favorite color');


if(isNaN(userName) && isNaN(userSurname) && isNaN(userFavoriteColor)){
    document.writeln('Your secret password is: ' + userName + userSurname + userFavoriteColor + 21);
}

else{
    document.writeln('Incorrect values. Sorry, reload the page and try again')
}