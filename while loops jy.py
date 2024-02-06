'''
Name: Jianzhuo Ye
Start Date: 2/6/2024
End Date: 2/7/2024
Description: This is a program to demonstrate while loops
'''
def main():
    Initialize();

def Initialize():
    wordguess = 'apple, pear, cucumbers, shoe, watermelon';
    msg = 'Try to guess my word. \nYou have only 4 attempts.'
    print(msg + '\n' + wordguess);
    AskInput();

def AskInput():
    userinput = '';
    attempts = 4;
    wordgame = 'apple';

    userinput = str(input('enter a word: '));
    while(attempts > 1 and userinput != 'apple'):
        attempts -=1
        print('you have ' + str(attempts) + ' attempts left');
        userinput = str(input('Enter a word: '));

    if (attempts == 1 and userinput != 'apple'):
        print('You lost!');
    else:
        print('Congrats!');

if __name__ == '__main__':
    main();
