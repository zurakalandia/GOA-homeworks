#Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

def grow(arr):
    final_result = 1
    for num in arr:
        final_result *= num
    return final_result

