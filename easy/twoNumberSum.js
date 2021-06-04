// 5/10/21
// Time: O(n) Space: O(n)
function twoNumberSum(array, targetSum) {

    // initialize hashmap and populate
	var map = new Map();
	array.forEach(element => {
		map.set(element, 1); // 1 is used to indicate the value has not been used yet
	});

    // iterate map
    for (let key of map.keys()) {
		var tmp = targetSum - key; // find complementary value 
        map.set(key, 0);    // set key's value as 0 - indicates it is being used
        if (map.has(tmp) && map.get(tmp) == 1){
            return [key, tmp];  // return value
        } else {
            map.set(key, 1);    // reset key's value to 0 and continue iteration
        }
    }

    return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);