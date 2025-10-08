let arr =[2,4,3,6,4,5];

const reverseArray = (arr) => {
    let start = 0;  end = arr.length-1;
    
    while(start < end) {
        [arr[start], arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
    return arr;
};

console.log(reverseArray(arr))

// also can be done by arr.reverse()