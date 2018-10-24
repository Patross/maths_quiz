

//array of question types and correspoding numbers to act as an enum
var QuestionTypes = [
    ["adding", 0],
    ["subtracting", 1],
    ["multiplying", 2],
    ["dividing", 3],
];
//array of number systems and correspoding numbers to act as an enum
var NumberSystems = [
    ["binary", 0],
    ["octal", 1],
    ["hex", 2],
];
var NoOfQuestionTypes = Object.keys(QuestionTypes).length;
var NoOfNumberSystems = Object.keys(NumberSystems).length;
GenerateQuestionType();


function GenerateQuestionType() {
    let rand = Math.floor(Math.random() * NoOfQuestionTypes);

    for (var key in QuestionTypes) {
        var value = QuestionTypes[key];
        let QuestionType = value.toString().split(",")[0];
        let Num = value.toString().split(",")[1];
        //   console.log(Type);
        //   console.log(Num);
        if (Num == rand) {
            //RAND FOUND A MATCH FOR QUESTION TYPE -- NOW WE WORK WITH THAT
            let numberSystem;
            switch (QuestionType) {
                case "adding":
                    console.log("adding yay");
                    numberSystem = GenerateNumberSystem();
                    break;
                case "subtracting":
                    console.log("subtracting woohoo");
                    numberSystem = GenerateNumberSystem();
                    break;
                case "multiplying":
                    console.log("multiplying woohoo");
                    numberSystem = GenerateNumberSystem();
                    break;
                case "dividing":
                    console.log("dividing woohoo");
                    numberSystem = GenerateNumberSystem();
                    break;
                default:
                    break;
            }
        }
    }
}
function GenerateNumberSystem() {
    let rand = Math.floor(Math.random() * NoOfNumberSystems);

    for (var key in NumberSystems) {
        var value = NumberSystems[key];
        let NumberSystem = value.toString().split(",")[0];
        let Num = value.toString().split(",")[1];
        //   console.log(Type);
        //   console.log(Num);
        if (Num == rand) {
            //RAND FOUND A MATCH FOR QUESTION TYPE -- NOW WE WORK WITH THAT
            switch (NumberSystem) {
                case "binary":
                    return "binary"
                    break;
                case "octal":
                    return "octal";
                    break;
                case "hex":
                    return "hex";
                    break;
                default:
                    break;
            }
        }
    }
}
GeneratePairOfNumbers("adding","binary");
function GeneratePairOfNumbers(questionType,numberSystem = null) {
    let randLeft = numberSystem == "binary" ? Math.floor(Math.random() * 255) : numberSystem == "octal" ? Math.floor(Math.random() * 16777215) : Math.floor(Math.random() * 4294967295);
    let randRight = numberSystem == "binary" ? Math.floor(Math.random() * 255) : numberSystem == "octal" ? Math.floor(Math.random() * 16777215) : Math.floor(Math.random() * 4294967295);
    console.log(randLeft);
    console.log(randRight);
}
function GenerateRandomQuestion(questionType, numberSystem = null) {
    if (questionType == "adding") {
        if (numberSystem == "binary") {

        } else if (numberSystem == "octal") {

        } else if (numberSystem == "hex") {

        } else {
            // no number system as question is not number sytem related
        }
    }
}