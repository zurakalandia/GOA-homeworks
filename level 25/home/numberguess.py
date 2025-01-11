def rules():
    print("Choose a number between 1 and 100. I will try to guess it")
    print('respond with "lower", "higher" or "correct"')


def respond():
    response = input('Is ur number "higher", "lower" or "correct"')
    if response in ['lower', 'higher', 'correct']:
        return response
    print('Enter a valid response')


def number_guessing_game():
    rules()
    low = 1
    high = 100
    
    while low <= high:
        guess = (low + high) // 2
        print(f'my guess is {guess}')
        response = respond()

        if response == 'lower':
            high = guess - 1
        elif response == 'higher':
            low = guess + 1
        elif response == 'correct':
            print('i guessed ur number')
            break
        else:
            print('something went wrong. enter a valid response')

number_guessing_game()


