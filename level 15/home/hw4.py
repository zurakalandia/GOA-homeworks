active = True

while active == True:
    grade = int(input("Enter your grade: "))
    if grade < 0 or grade > 100:
        print("Your grade has to be between 0 and 100")
    elif grade == 100 or grade >= 90:
        print("Your grade is A")
    
    elif grade >= 80 and grade < 90:
        print("Your grade is B")
    
    elif grade >= 70 and grade < 80:
        print("Your grade is C")
   
    elif grade < 70:
        print("Your grade is D")