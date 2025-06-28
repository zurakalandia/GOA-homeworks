def leapYear(year):
    answer = ''
    if year % 4 == 0:
        answer = 'Leap year'
        if year % 100 == 0:
            answer = 'not Leap year'
            if year % 400 == 0:
                answer = 'Leap year'
    return answer


