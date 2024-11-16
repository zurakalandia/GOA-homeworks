price = int(input("Enter the price "))

if price > 50:
    discount = price * 10 / 100
    final_price = price - discount
    print("your price is " + str(final_price))
elif price > 20 and price <=50:
    discount = price * 5 / 100
    final_price = price - discount
    print("your price is " + str(final_price))
elif price <=20:
    final_price = price
    print("your price is " + str(final_price))