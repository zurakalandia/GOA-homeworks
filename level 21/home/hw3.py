numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

first_half = numbers[0:5]

print(first_half)

second_half = numbers[5:]

print(second_half)

squares = []

for num in numbers:
    sqr = num * num
    squares.append(sqr)

print(squares)
