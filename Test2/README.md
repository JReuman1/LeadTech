# Explanation of the `longest_consecutive` Function

The `longest_consecutive` function aims to find the length of the longest consecutive sequence in an array of numbers.

## Step-by-Step Description

1. **Empty List Check:**
   If the array is empty, the function returns `0`.

2. **Convert to Set:**
   Convert the array to a set to remove duplicates and allow for fast lookups.

3. **Initialize Maximum Length:**
   A variable `max_length` is used to keep track of the longest sequence found.

4. **Iterate Over the Set:**
   For each number in the set:
   - Check if it is the start of a sequence (i.e., the previous number is not in the set).
   - If it is, count the length of the consecutive sequence.
   - Update `max_length` if a longer sequence is found.

5. **Return the Result:**
   The function returns the length of the longest consecutive sequence found.

## Example Usage

For an input array `[100, 4, 200, 1, 3, 2]`, the longest consecutive sequence is `[1, 2, 3, 4]` with a length of `4`.