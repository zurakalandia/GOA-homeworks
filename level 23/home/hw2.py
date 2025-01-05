def simple_calculator():
    num1 = int(input('Enter the first number: '))
    num2 = int(input('Enter a second number: '))
    operator = input('Enter an operator: ')

    if operator == '+':
        sum = num1 + num2
        print(f'{num1} + {num2} = {sum}')
    elif operator == '-':
        sum = num1 - num2
        print(f'{num1} - {num2} = {sum}')
    elif operator == '*':
        sum = num1 * num2
        print(f'{num1} * {num2} = {sum}')
    elif operator == '/':
        sum = num1 / num2
        print(f'{num1} / {num2} = {sum}')
    elif num2 == 0 and operator == '/':
        print("can't divide by zero")
    else:
        print('Enter a valid operator')

    
simple_calculator()


