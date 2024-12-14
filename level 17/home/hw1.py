

numbers = input("Enter numbers using commas: ")

list = []

for num in numbers.split(','):
    list.append(int(num))

print(list)

print(sum(list))
