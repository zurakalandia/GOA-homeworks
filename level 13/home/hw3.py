password = "group55"

logged_in = False

while logged_in == False:
    entered = input("Enter your password: ")
    if entered == password:
        logged_in == True
        print("Correct")
    else:
       print("Wrong password try again")
