#Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.


def quarter_of(month):
    if month < 4:
        return 1
    elif month >= 4 and month < 7:
        return 2
    elif month >= 7 and month < 10:
        return 3
    else:
        return 4    
    pass