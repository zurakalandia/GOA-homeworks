'''
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
'''

def replace_exclamation(st):
    for v in 'aeiouAEIOU':
        st = st.replace(v, '!')
    return st

#or

def replace_exclamation(st):
    res = ''
    for a in st:
        if a in 'aeiouAEIOU':
            res += '!'
        else:
            res += a
    return res