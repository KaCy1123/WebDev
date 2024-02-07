'''
Name: Jianzhuo Ye
Start Date: 2/7/2024
End Date: 2/9/2024
Description: This program demonstrates the use of case statements
'''
def JS():
    print("You can become a web developer");
    main();
    
def PY():
    print("You can become a Data Scientist");
    main();
    
def PHP():
    print("You can become a back-end web developer");
    main();
    
def HTML():
    print("You can become a front-end web developer");
    main();
    
def JAVA():
    print("You can become a mobile app developer");
    main();
    
def default():
    print("The language doesn't matter, what matters is solving problems.");
    main();
    
def main():
    lang = input("What's the programming language you want to learn? ")

    match lang.upper():
        case "JAVASCRIPT":
            JS();

        case "PYTHON":
            PY();

        case "PHP":
            PHP();

        case "HTML":
            HTML();

        case "JAVA":
            JAVA();

        case _:
            default();

if __name__ == "__main__":
    main();
