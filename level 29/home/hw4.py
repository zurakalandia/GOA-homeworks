numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

first_half = numbers[0:5]
second_half = numbers[5:]

squares = []

for number in numbers:
    sqr = number * number
    squares.append(sqr)

print(first_half)
print(second_half)
print(squares)
