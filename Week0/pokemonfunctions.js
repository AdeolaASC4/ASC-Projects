var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function randLetter(){
    var letter = Math.floor(Math.random()*alphabet.length);
    return  alphabet[letter];
}
console.log(randLetter());

function randWord() {
    var word = '';
    var roll = Math.floor(Math.random() * 6);
    for (var i = 0; i < roll; i++) {

        word = word + randLetter();
    }
    return word;
}
console.log(randWord());
