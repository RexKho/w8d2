function range(start, end){
    
    if (start-end === 0) return [end];

    return [start].concat(range((start+1), end));

}

// console.log(range(0,454))

function sumRex(arr) {
    if (arr.length === 1) return arr[0]
    return arr[0] + sumRex(arr.splice(1));
}

let arrayRex = [1,2,5,8,4]

// console.log(sumRex(arrayRex))


function exp(b, n) {
    if (n === 0) return 1;
    if (n === 1) return b;

    return b * exp(b,n-1);
}

function exp2(b, n) {
    if (n === 0) return 1;
    if (n === 1) return b;
    if (n % 2 === 0) {
        let moi = exp2(b,((n/2)),2);
        return moi * moi
    } else {
        let moi = exp2(b,((n-1)/2));
        return b * moi * moi;
    }
}




// # this is math, not Ruby methods.

// console.log(exp2(2,4));
// console.log(exp2(3,4));


function fibonacci(n) {
    if (n === 1) return [1];
    if (n === 2) return [1,1];
    let my_array = fibonacci(n-1);
    let last_element = my_array[my_array.length - 1];
    let second_to_last_element = my_array[my_array.length - 2];
    let next_el = last_element + second_to_last_element;
    return my_array.concat(next_el);
}


// console.log(fibonacci(5));
// console.log(fibonacci(8));


function deepDup(arr) {
    if (arr.length === 1) return [arr[0]];
    let newarr = [arr[0]];
    return newarr.concat(deepDup(arr.slice(1,arr.length)));
}

let newarr = [1,2,3,4];
let duparr = deepDup(newarr); 
// console.log(duparr);
// newarr[0] = 12412

// console.log(newarr);
// console.log(duparr);


function bsearch(arr, target) {
    if (arr.length === 0) return -1 ;
    
    let pivot_idx = Math.floor(arr.length / 2);
    let pivot = arr[pivot_idx];
    if (arr.length === 1 && target != pivot) return -1 ;
    
    if(target === pivot){
        return pivot_idx;
    }else if (target < pivot){
        let leftSide = arr.slice(0,pivot_idx);
        return bsearch(leftSide, target);
    }else {
        let rightSide = arr.slice(pivot_idx,arr.length);
        let res = bsearch(rightSide, target);
        if (res === -1) return -1;
        return pivot_idx + res;
    }
}

// let bsArr = [2,4,6,8,10,12,14,16,18,20];
// console.log(bsearch(bsArr, 2)); // 0
// console.log(bsearch(bsArr, 20)); // 9
// console.log(bsearch(bsArr, -20)); // 9
// console.log(bsearch(bsArr, 200)); // 9


function mergesort(arr) {
    if (arr.length === 0) {
        return arr
    }
    let middle = Math.floor(arr.length/2)

}

function merge(left, right) {
    let newarr = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            newarr.push(left.shift());
        } else {
            if (right.length > 0) newarr.push(right.shift());
        }
    }
   
    return newarr.concat(left).concat(right);
}


let arr1 = [1,3,9];
let arr2 = [2,4,6];

console.log(merge(arr1,arr2));





