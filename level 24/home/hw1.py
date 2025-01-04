def information():
    name = input('Enter your name: ')
    lname = input('Enter your lastname: ')
    age = int(input('Enter your age: '))
    country = input('Enter your country: ')
    city = input('Enter your city: ')
    hobby = input('Enter your hobby: ')
    print(f'Hello, my name is {name} {lname}, I am {age} years old, I live in {country}, {city}, my hobby is {hobby}')

information()