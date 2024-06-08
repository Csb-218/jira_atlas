// Function to split the array into sub-arrays
export function splitArray(arr, subArraySize) {
    let result = [];

    for (let i = 0; i < arr.length; i += subArraySize) {
        result.push(arr.slice(i, i + subArraySize));
    }

    return result;
}