
/*var digit = prompt("Enter digit : ");



switch(digit){
    case "0":
        document.write("One");
        break;
        case "1":
            document.write("One");
            break;
            case "2":
                document.write("Two");
                break;
                case "3":
                    document.write("Three");
                    break;
                    case "4":
                        document.write("Four");
                        break;
                        case "5":
                            document.write("Five");
                            break;
                            case "6":
                                document.write("Six");
                                break;
                                case "7":
                                    document.write("Seven");
                                    break;
                                    case "8":
                                        document.write("Eight");
                                        break;
                                        case "9":
                                            document.write("Nine");
                                            break;
                                            default:
                                                document.write("Not a digit")
}*/

//Checking if the letter is vowel or consonant:-

var letter = prompt("Enter a letter : ");

letter = letter.toLocaleLowerCase();

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
        default:
            document.write("Consonant");
}


