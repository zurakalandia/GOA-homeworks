num1 = int(input("enter a single number: "))

active = True

list = []

list.append(num1)

print(list)

while active == True:
    num2 = input("Enter another number(press enter to stop): ")
    if num2 == "":
        active = False
    else:
        list.append(int(num2))




print(len(list))


