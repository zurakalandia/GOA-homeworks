user_inputs = []


active = True


while active == True:
    user_input = input("Enter something (or press Enter to stop): ")
    
    if user_input == "":
        active = False
    else:
        user_inputs += [user_input]


found = False

for user_input in user_inputs:
    if int(user_input) > 10:
        found = True
        break

if found == True:
    print("this list has a number greater than 10")
else:
    print("this list doesn't have a number greater than 10")

print(user_inputs)

sum = 0

for user_input in user_inputs:

    sum += int(user_input)

print(sum)


