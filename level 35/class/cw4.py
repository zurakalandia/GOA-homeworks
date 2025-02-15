def search(text, word):
    if text.find(word) != -1:
        print('Word found')
    else:
        print('word not found')

search(input('Enter text: '), input('Enter the word to find: '))

