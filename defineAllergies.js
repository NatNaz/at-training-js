function defineAllergies () {
    const candyList = [
        'Nuts',
        'Hershey\'s',
        'Kit-Kat',
        'Milky Way',
        'M&M\'s',
        'Snickers',
        'Sturburst',
        'Bounty'
        ]
    for (let i = 0; i < candyList.length; i++) {
        let candy = candyList[i];
        let a = candyList[i].split('').pop();
        if (a === 's') {
        console.log ('Don\'t eat it! ' + candy + ' is dangerous for you!')
                     } else {
            console.log ('That will be ok! You can eat ' + candy + '!')
        }
    }
}
defineAllergies();
