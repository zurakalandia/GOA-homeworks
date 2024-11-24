number = int(input("Enter number: "))

active = True

while active == True:
    if number == 0:
        print("Your number is zero")
        number = int(input("Enter number: "))
    elif number > 0:
        print("Your number is positive")
        number = int(input("Enter number: "))
    else:
        print("Your number is negative")
        number = int(input("Enter number: "))