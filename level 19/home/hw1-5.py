#hw1

list = []

for i in range (10):
    num = int(input("Enter a number: "))
    list.append(num)

print(list)

#hw2

max_num = list[0]

for num in list:
    if num > max_num:
       max_num = num
    
print(max_num)

#hw3

list.remove(max_num)
print(list)

#hw4

print(list[-1::-1])

#hw5

number = 11

found = False


for num in list:
    if num == number:
        found = True
        break
        

if found == True:
    print("the number", number, "is in the list")
else: 
    print("the number", number, "is not in the list")
    



