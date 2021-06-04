// 5/11/21
// Time O(n) | Space O(n)
function sortedSquaredArray(array) {
    var leftIdx = 0;
    var rightIdx = array.length - 1;
    var result = []

    // break if left pointer is larger than right pointer
    while (leftIdx <= rightIdx) {
        // compare largest absolute value, put at the back of array and move pointers
        if (Math.abs(array[rightIdx]) > Math.abs(array[leftIdx])) {
            result.unshift(array[rightIdx] * array[rightIdx]);
            --rightIdx;
        } else {
            result.unshift(array[leftIdx] * array[leftIdx]);
            ++leftIdx;
        }
    }
    return result;
}

sortedSquaredArray([1,2,3,5,6,8,9]);
sortedSquaredArray([-3,-1,4,5]);