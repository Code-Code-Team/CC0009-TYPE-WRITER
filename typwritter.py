import time
def typing():
    for letter in line:
        time.sleep(0.5)
        print(letter, end='')
def loop():  
    global line      
    line ='I am student'
    typing()
    print('')
    line ='Are you also student ?'
    typing()
    print('')
    loop()
loop()