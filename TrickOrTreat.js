function TrickOrTreat() {
    let myCandyList = ['Kit-Kat', 'Twizzlers'];
myCandyList.push('Snikers');
myCandyList.push('Butterfinger');
myCandyList.push('Almond Joy');
myCandyList.unshift('M&M\'s');
myCandyList.pop();
myCandyList[2] = 'Starburst';
const fletchersCandies = ['Milky Way', 'Peanut M&M\'s', 'Three Musketeers', 'Hershey\'s'];
myCandyList = myCandyList.concat(fletchersCandies);
myCandyList.shift();
myCandyList.sort();
console.log('Mom! I have ' + myCandyList.length + ' different candies!');
console.log('There are: ' + myCandyList.join(' and ') + '! Want some?');
}
TrickOrTreat();
