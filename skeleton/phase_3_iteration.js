Array.prototype.bubblesort = function() {
    let sorted = false;
    // while sorted = false
    while (!sorted){
        sorted = true;
        for(let i = 0; i < this.length-1; i++) {
            if(this[i]>this[i+1]){
                [this[i],this[i+1]] = [this[i+1],this[i]];
                sorted = false;
            }
        }
    }
    return this
}

// let arr = [4,8,2,7];
// console.log(arr.bubblesort())

String.prototype.substrings = function() {
    let res = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i+1; j <= this.length; j++) {
            
            res.push(this.slice(i,j));
        }
    }
    return res;
}

let word = "dog";
console.log(word.substrings());
