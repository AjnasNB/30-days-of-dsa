function removeDuplicates(nums) {
    if (!nums.length) {
        return 0;
    }

    let uniqueCount = 1; // Initialize with 1 as the first element is always unique
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) {
            // Found a unique element, update the array
            nums[i] = nums[j];
            uniqueCount++;
            i++;
        }
    }

    return uniqueCount;
}

// Example 1
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, nums = [${nums1.slice(0, k1)}]`);

// Example 2
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, nums = [${nums2.slice(0, k2)}]`);
