from turtle import *
width(7)
speed(30)
color("purple")
begin_fill()
forward (200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
end_fill()
#end of the base of the house

left(90)
forward(70)
color("yellow")
begin_fill()
left(90)
forward(100)    #door height
right(90)
forward(60)     #door width
right(90)
forward(100)
right(90)
forward(60)
end_fill()

#end of door

penup()
goto(200, 200)
pendown()
color("orange")
begin_fill()
right(60)
forward(200)
left(120)
forward(200)
left(120)
forward(200)
end_fill()

#end of the roof

penup()
goto(15, 50)
pendown()
color("cyan")
begin_fill()
forward(40)    #window width
left(90)
forward(50)   #window_height
left(90)
forward(40)
left(90)
forward(50)
end_fill()
left(180)
color("black")
width(3)
penup()
goto(35, 45)
pendown()
forward(60)
penup()
goto(10, 75)
pendown()
right(90)
forward(50)
#end of window

color("green")
begin_fill()
penup()
goto(0,0)
pendown()
forward(710)
right(90)
forward(400)
right(90)
forward(710*2)
right(90)
forward(400)
right(90)
forward(710)
end_fill()
#end of the ground

penup()
goto(-250, 200)
pendown()
width(7)
color("yellow")
begin_fill()
circle(50)
end_fill()


exitonclick()





name="zura"   #string
age=14     #integer
height=184.9 #float
watches_nikas_lessons = True    #bools's
mogs = True     #bool's

print("my"+"name"+"is"+name+"."+"i'm"+str(age))+"years old"+"I"+watches_nikas_lessons