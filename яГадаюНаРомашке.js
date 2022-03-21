function яГадаюНаРомашке () {
    const romashka = [
        'любит',
        'не любит',
        'плюнет',
        'поцелует',
        'к сердцу прижмёт',
        'к чёрту пошлёт'
        ];
    console.log('Ромашка отвечает: ' + romashka[Math.floor(Math.random()*romashka.length)] +'!');
}
яГадаюНаРомашке();