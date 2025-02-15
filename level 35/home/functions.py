#string specific functions

txt = 'hELlo'

print(txt.lower())
print(txt.upper())
print(txt.capitalize())
print(txt.find('l'))

txt1 = ('hello friend')
print(txt1.replace('friend', 'you'))
split = txt1.split()
print(split)
print(' '.join(split))



#list specific functions

list = [0, 1, 2, 3, 4]

list.append(5)

list.insert(4, 'string')

list.remove('string')

list.pop(5)

list.sort()

list.copy()

stuff_to_add = (5, 6, 7)

list.extend(stuff_to_add)

list.reverse()

#list.clear()

#neutral functions

print(max(txt))
print(min(txt))
print(len(txt))

list.count(3)

list.index(3)
