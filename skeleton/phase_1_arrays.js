Array.prototype.uniq= function(){
    let newarr = [];
    this.forEach((ele)=> {
        if (newarr.includes(ele)) {

        } else {
            newarr.push(ele);
        }
    });




    return newarr;
}


// let arr = [1,2,2,3]
// console.log(arr.uniq());

Array.prototype.twosum= function() {
    let newarr = [];
    for(let i = 0; i < this.length; i++) {
        for(let x = 0; x < this.length; x++) {
            if(((arr[x]+arr[i]) === 0) && (x>i)) {
                newarr.push([i,x]);
            }
        }
    }
    return newarr;
}

// let arr = [0,1,-1,5,2,-5,-2];
// console.log(arr.twosum());

Array.prototype.transpose= function() {
    let newArr = [];

    for(let i = 0; i < this.length; i++) {
        let subArr = [];
        for(let j = 0; j < this.length; j++) {
            subArr.push(this[j][i]);
        }
        newArr.push(subArr);
    }

    return newArr;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr);
console.log(arr.transpose());
















