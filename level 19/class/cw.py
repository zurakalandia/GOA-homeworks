nums = [1, 2, 3, 4, 5, 6]   #მოცემული სია

res = nums[::-1]  #რადგამ კოდში ორი ცარიელი ადგილია, პროგრამა გადაუვლის სიის ყველა ელემენტს, ხოლო რადგან 1-ს უწერია "-" სიის გადავლა დაიწყება ბოლოდან სათავემდე. [6, 5, 4, 3, 2, 1]
print(res[2])   #ახლად შექმნილი სიის "2" ინდექსის მქონე ელემენტი. გამოიტანს 4-ს