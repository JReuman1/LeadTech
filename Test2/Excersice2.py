def longest_consecutive(nums):
    if not nums:
        return 0
    
    num_set = set(nums)
    max_length = 0

    for num in num_set:
        # Check if it's the start of a sequence
        if num - 1 not in num_set:
            length = 1
            current_num = num
            
            # Count consecutive numbers
            while current_num + 1 in num_set:
                length += 1
                current_num += 1
            
            # Update maximum length found
            max_length = max(max_length, length)

    return max_length

# Example usage
input_nums = [100, 4, 200, 1, 3, 2]
print(longest_consecutive(input_nums))  # Output should be 4
