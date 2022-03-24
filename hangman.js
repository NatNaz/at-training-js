function playHangman() {
    const wordsToGuess = [
        'территория',
        'лаборатория',
        'принадлежность',
        'предназначение',
        'обучение',
        'сопоставление',
        'утверждение',
        'декларация',
        'очарование',
        'зависимость',
        'подчинение',
        'кинестетика',
        'электромагнетизм',
        'ракетостроение',
        'обещание',
        'наваждение',
        'препятствие',
        'соответствие',
        'равновесие',
        'объявление'
        ]
        if (confirm ('Сыграем в виселицу? ;)') ) {
             let word = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)].toUpperCase();
             console.log(word);
             const answer = word.split('');
             const hidenWord = '-'.repeat(answer.length).split('');
             const numberOfMistakes = 7;
             const mistakes = [];
             const wrongGuesses = [];
             const AsciiHangman = [
                '____ \n',
                '|/ | \n',
                '| @ \n',
                '| /|\\\n',
                '| / \\\n',
                '| \n',
                '====='    
                ]
            let letterToCheck = prompt ('Я загадала слово из ' + word.length + ' букв! \n ' + hidenWord.join(' ') + '\n Угадай букву!', '');
            while (numberOfMistakes > mistakes.length ) {
                if (!letterToCheck) {
                    alert ('GAME OVER! \n ____\n|/ |\n| @\n| /|\\\n| / \\\n|\n===== \n');
                    return ('game over'); 
                }
                const guess = letterToCheck.toUpperCase();
                for ( let i = 0; i < word.length; i++) {
            if (answer[i] === guess) {
                hidenWord[i] = guess;     
            }
        }
            if (!hidenWord.includes(guess)) {
                 mistakes.push(AsciiHangman.shift());
                 wrongGuesses.push(guess);
                 if (numberOfMistakes === mistakes.length) {
                    alert ('GAME OVER! \n ____\n|/ |\n| @\n| /|\\\n| / \\\n|\n===== \n Ответ: ' + word + '\n Повезёт в другой раз!');
                    return ('game over');
                }
            }
            if ((hidenWord.join('') === word)) {
                alert ('Поздравляю! Победа!');
                return ('Победа! Ответ: ' + hidenWord.join(''));
            }
        letterToCheck = prompt ('Угадай следующую букву! \n ' + hidenWord.join(' ') + '\n' + mistakes.join('') + '\n Допущенные ошибки: ' + wrongGuesses.join (', '), '');  
    }        
    } else { 
        alert ('Ну нет, так нет... \n Давай, до свидания!');
    }
    }