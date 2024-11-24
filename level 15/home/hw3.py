#Year = int(input("Enter the year: "))

active = True


while active == True:
    Year = int(input("Enter the year: "))
    if Year == 0:
        print("Year 0 doesnt exist but if it did it would be a leap year")
    
    elif (Year % 4 == 0 and Year % 100 != 0) or Year % 400 == 0:
        print("The year you entered is a leap year: ")
        
    else:
        print("Your year isnt a leap year")
        
