Array.prototype.myEach= function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

let arr =[1,2,3,4,0]


function doublerPrint(ele) {
    console.log(ele*2);
}


// console.log(arr.myEach(doublerPrint))

function doubler(ele) {
    return ele*2;
}

Array.prototype.myMap = function(callback) {
    let newarr= [];
    for(let i = 0; i < this.length; i++) {
        newarr.push(callback(this[i]));
    }
    return newarr;
}


// console.log(arr.myMap(doubler))


Array.prototype.myReduce= function(callback, init = 0) {
    for(let i = 0; i < this.length; i++) {
        init = callback(init, this[i]);
    }
    return init;
}

console.log(
    [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  })
  );
   // => 6
   console.log(
  [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 25)
  ); // => 31





















