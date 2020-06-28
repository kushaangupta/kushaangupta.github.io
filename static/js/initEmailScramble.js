email = 'gkushaan@rediffmail.com';
pos = Array.from(Array(email.length), (_, i) => i + 1)
emailCharacters = email.split("");
pairedEmailCharactersPos = pos.map(index => [index, emailCharacters[index-1]]);
shuffle(pairedEmailCharactersPos);
shuffledPos = pairedEmailCharactersPos.map(e => e[0]);
shuffledCharacters = pairedEmailCharactersPos.map(e => e[1]);
shuffledEmail = shuffledCharacters.join('');

emailElement = document.getElementById("email");
emailElement.prepend(document.createTextNode(shuffledEmail));

emailScramble = new scrambledString(document.getElementById('email'),
  'emailScramble', shuffledEmail, shuffledPos);
