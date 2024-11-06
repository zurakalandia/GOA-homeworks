age = 14
weather = 'sunny'
length = 70.5
x = 30 < 50

print(type(age))
print(type(weather))
print(type(length))
print(type(x))

print(50 > 100)
print(90 > 110)
print(50 > 40)
print(90 > 1)
print(5 > 4)

print(6 < 8)
print(4 < 1)
print(7 < 6)
print(200 < 400)
print(300 < 301)

print(50 >= 40)
print(60 >= 60)
print(8 >= 16)
print(5 >= 40)
print(60 >= 40)

print(8 <= 9)
print(10 <= 50)
print(80 <= 80)
print(90 <= 55)
print(50 <= 1)

print(70 == 70)
print(40 == 40)
print(34 == 34)
print(76 == 89)
print(31 == 1)

print(50 != 60)
print(1 != 6)
print(70 != 5)
print(50 != 50)
print(99 != 99)



print(5 < 6 and 10 < 8)
print(50 <= 50 and 6 > 1)
print(9 != 8 or 3 != 3)
print(7 > 1 or 9 >= 9 )
print(9 == 8 or 5 > 6)


age = input('Enter your age: ')

print(type(age))

print(type(int(age)))

print(type(float(age)))


name = 'zura'
password = '1234'

name_entered = input('Enter the name: ')
password_entered = input('enter password: ')

print(name == name_entered and password == password_entered)