'''
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
'''

def count_positives_sum_negatives(arr):
    count = 0
    sum = 0
    newArr = []
    if len(arr) == 0:
        return newArr
    for i in arr:
        if i > 0:
            count += 1
        elif i < 0:
            sum += i
    newArr += [count, sum]
    return newArr