age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if age < 13:
    print("მცირელწოვანი")
elif age >= 13 and age <= 19:
    print("მოზარდი")
elif age >= 20:
    print("ზრდასრული")
