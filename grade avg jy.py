'''
Name: Jianzhuo Ye
Start Date: 2/7/2024
End Date: 2/7/2024
Description: This program uses a while loop to calculate a grade average
'''
def main():
    AskInput();

def AskInput();
    global numgrades;

    numgrades = int(input("How many grades to average: "));
    if (num <= 0):
        print("Invalid. Try again!");
        AskInput();
    else:
