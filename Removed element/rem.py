def removeDuplicates(nums):
    if not nums:
        return 0

    unique_count = 1  # Initialize with 1 as the first element is always unique
    i = 1

    for j in range(1, len(nums)):
        if nums[j] != nums[j - 1]:
            # Found a unique element, update the array
            nums[i] = nums[j]
            unique_count += 1
            i += 1

    return unique_count

# Example 1
nums1 = [1, 1, 2]
k1 = removeDuplicates(nums1)
print(f"Output: {k1}, nums = {nums1[:k1]}")

# Example 2
nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
k2 = removeDuplicates(nums2)
print(f"Output: {k2}, nums = {nums2[:k2]}")
