const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"Which statement is used to check a condition in Java?",
options:["if","for","while","switch"],
answer:"if",
hint:"Used for decision making"
},

{
type:"mcq",
question:"Which statement is used when multiple conditions are checked?",
options:["else-if","for","while","do-while"],
answer:"else-if",
hint:"Used for multiple conditions"
},

{
type:"mcq",
question:"What happens if condition in if statement is false?",
options:["else block executes","if block executes","error","nothing happens"],
answer:"else block executes",
hint:"Else runs when if is false"
},

{
type:"mcq",
question:"Which keyword is used to exit from switch?",
options:["break","exit","stop","return"],
answer:"break",
hint:"Used to stop execution"
},

{
type:"mcq",
question:"Which statement is best for multiple fixed values?",
options:["switch","if","for","while"],
answer:"switch",
hint:"Used for menu-based conditions"
},

{
type:"mcq",
question:"What will happen if break is not used in switch?",
options:["All cases execute","Error","Only one case runs","Program stops"],
answer:"All cases execute",
hint:"Fall-through behavior"
},

{
type:"mcq",
question:"Which data type is allowed in switch?",
options:["int","String","both int and String","float"],
answer:"both int and String",
hint:"Java supports both"
},

{
type:"mcq",
question:"Which block executes if no case matches in switch?",
options:["default","else","if","none"],
answer:"default",
hint:"Fallback case"
},

{
type:"mcq",
question:"Which statement allows nested conditions?",
options:["if","switch","for","while"],
answer:"if",
hint:"if inside if"
},

{
type:"mcq",
question:"Which symbol is used in if condition?",
options:["()","{}","[]","<>"],
answer:"()",
hint:"Condition is inside brackets"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Write a Java program to check if a number is positive or negative",

required:["if","system.out.println"],

hint:"Use if(num > 0)",

solution:`class PositiveNegative {
  public static void main(String[] args){
    int num = 10;

    if(num > 0){
      System.out.println("Positive");
    } else {
      System.out.println("Negative");
    }
  }
}`
},

{
type:"code",
question:"Write a program to check if a number is even or odd",

required:["if","%","system.out.println"],

hint:"Use num % 2",

solution:`class EvenOdd {
  public static void main(String[] args){
    int num = 7;

    if(num % 2 == 0){
      System.out.println("Even");
    } else {
      System.out.println("Odd");
    }
  }
}`
},

{
type:"code",
question:"Write a program using else-if to find largest of three numbers",

required:["if","else","system.out.println"],

hint:"Compare a, b, c",

solution:`class Largest {
  public static void main(String[] args){
    int a = 10, b = 20, c = 15;

    if(a > b && a > c){
      System.out.println("A is largest");
    } else if(b > c){
      System.out.println("B is largest");
    } else {
      System.out.println("C is largest");
    }
  }
}`
},

{
type:"code",
question:"Write a Java program using switch to print day name (1 = Monday)",

required:["switch","case","break","system.out.println"],

hint:"Use switch(num)",

solution:`class Days {
  public static void main(String[] args){
    int day = 1;

    switch(day){
      case 1:
        System.out.println("Monday");
        break;
      case 2:
        System.out.println("Tuesday");
        break;
      default:
        System.out.println("Invalid");
    }
  }
}`
},

{
type:"code",
question:"Write a program using switch to perform addition, subtraction based on choice",

required:["switch","case","break","+","-"],

hint:"Use choice variable",

solution:`class Calculator {
  public static void main(String[] args){
    int a = 10, b = 5;
    int choice = 1;

    switch(choice){
      case 1:
        System.out.println(a + b);
        break;
      case 2:
        System.out.println(a - b);
        break;
      default:
        System.out.println("Invalid choice");
    }
  }
}`
}

]