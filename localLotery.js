function localLotery(numberOfNumbers, maxNumber, minNumber) {
    const loteryArray = [];
        for (let i=0; i < numberOfNumbers; i++) {
        const maxNumber = 20;
        
        loteryArray.push(Math.floor(Math.random ()*maxNumber)+minNumber);
        console.log('Number ' + loteryArray[i] + '!');
        
    }
        console.log ('Wins the ticket : ' + loteryArray.join(' - '));
}
localLotery(6,20,1);