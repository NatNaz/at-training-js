function findOdd(A) {
    // function returns the Number from the Array, that repeats odd number of times
    for (let i=0; i < A.length; i++) {
    let a = A[i];
    let B = A.filter(item => item == a);
    if (B.length % 2) {
    console.log (a);
    return a;
    }
    }
    }
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
    findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
    findOdd([1,1,1,1,1,1,10,1,1,1,1]);