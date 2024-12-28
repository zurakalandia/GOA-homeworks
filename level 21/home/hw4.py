temperatures = [72, 68, 75, 70, 78, 74, 71]

print(max(temperatures))
print(min(temperatures))

avg_temperatures = sum(temperatures)//len(temperatures)

print(avg_temperatures)

above_70 = []

for i in temperatures:
    if i > 70:
        above_70.append(i)

print(above_70)