function exercise() {
    try {
        console.log(a);
        let a = 3;
        console.log(1 / 0);
        
    } catch(e) {
        
        if (e.name = 'ReferenceError') {
        alert('let перед использованием нужно объявить');
        } else {
            throw e;
        }
    
    }
    }
    try {
    exercise();
    if (Infinity) {
        throw new TypeError ('Infinity');
        } 
    } catch(e) {
         if (e.name == 'TypeError') {
            alert('На ноль делить нельзя');
        } else {
            throw e;
        }
    }
    
