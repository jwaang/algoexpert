// 5/10/21
// Time O(n) | Space: O(1)
function isValidSubsequence(array, sequence) {
    var arrPtr = 0;
    var seqPtr = 0;
    var isSequence = false;

    // break if one array has been completed
    while (seqPtr != sequence.length && arrPtr != array.length) {
        if (array[arrPtr] == sequence[seqPtr]) { // if values match in array then we increment both values to move on
            arrPtr += 1;
            seqPtr += 1;
            if (seqPtr == sequence.length) { // sequence has been completed, mark as true
                isSequence = true;
            }
        } else if (sequence[seqPtr] != array[arrPtr]) {
            arrPtr += 1; // sequence and array value do not match, increment array pointer
        }
    }

    return isSequence;
}

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
isValidSubsequence(array, sequence);