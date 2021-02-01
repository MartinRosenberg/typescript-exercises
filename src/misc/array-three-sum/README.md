# Array Three Sum

Given an array of distinct integers and an integer representing a target sum,
write a function that returns an array of all triplets in the input array that
sum to the target sum.

## Examples

```typescript
arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0) //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35) //should return []
arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10) //should return [[ -3, 1, 12 ]]
```

## Hints

-   Let's think about time complexity. If you're thinking of trying all possible
    combinations of three integers, that will have a time complexity of O(n^3).
    Try to find a more optimal approach.
-   The input array is NOT sorted; we still can sort the input array and then
    use that sorted array to help us optimize the solution.
-   How would you handle optimizing this problem if you only had to sum two
    integers? A three sum can be thought of as trying to find if two integers
    sum to target valued added to each integer in the input array. For example:

    ```javascript
    arrayThreeSum([11, -1, -10], 0)
    //can be broken down to the below:

    //checking if 11 is going to be one of the integers: 11 + ? + ? = 0
    arrayTwoSum([-1, -10], 11 + 0)

    //checking if -1 is going to be one of the integers: -1 + ? + ? = 0
    arrayTwoSum([11, -10], -1 + 0)

    //checking if -10 is going to be one of the integers: -10 + ? + ? =0
    arrayTwoSum([11, -1], -10 + 0)
    ```

## Source

https://hackmd.io/OsTH21zdR_-LVz-2-lLAnA
