number = 7
number_guess = input("Guess the number from 1 to 10: ")

while int(number_guess) != number:
        number_guess = int(input("try again: "))    
else:
        print("Congratulations!")
