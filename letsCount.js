function letsCount (maxNumber) {
    let countArray = [];
    for (let i=0; i < maxNumber; i++)
        { countArray.push(i+1);
        }
    console.log(countArray.join(', '));
}
letsCount(200);