

$(document).ready(function(){
    $("#question").hide();
    $("#start").on("click",initialize);
})
var buttonTrue=0;
var buttonFalse=0;
var buttonFalse=0;
var buttonTrue=0;
var questionIndex=0;
var correct=0;
var incorrect=0;
var questions=[{q:"Steph Curry wears jearsey no 30", a :"true"},
                {q:"Golden State Warriors holds the record for most regular season wins", a:"true"},
                {q:"Draymond Green was voted an All-Star for 2018-2019 NBA season ",a:"false"},
                {q:"Golden State Warriors used to be San Francisco Warriors",a:"true"},
                {q:"Lebron James was drafted by warriors before being traded to Cleaveland Cavialers",a:"false"},
                {q:"Lebron Wants to play for GSW",a:"true"}
                ];
   

function initialize(){
    $("#start").hide();//hides the start button
    $("#question").show();//pop up div for question
    renderQuestion();
};


function renderQuestion(){
    if(questionIndex<=questions.length-1){
        $("#question").text(questions[questionIndex].q)
        buttonTrue =$("<button>True</button>");
        buttonTrue.val("true");
        $("#question").append(buttonTrue);
        buttonFalse = $("<button>False</button>");
        buttonFalse.val("false");
        $("#question").append(buttonFalse);
        correctt();
    }
    else{
        $("#question").html("You Got "+correct+ " Right and " + incorrect + " Wrong");
       
    }
}
    


    function correctt(){//determines if the answer is correct or not and iterates the counter
        var ansValue= $(buttonTrue).val();
        var ansValue1=$(buttonFalse).val();
        buttonTrue.on("click",function(){//if the answer is true and buttonTrue is pressed
    
    
            if(ansValue===questions[questionIndex].a){
                correct++;
                questionIndex++;
                console.log(correct);
                renderQuestion();
            }
            else{
                incorrect++;
                questionIndex++;
                renderQuestion();
                console.log(incorrect);
                console.log(questionIndex);
            }
        })

        buttonFalse.on("click",function(){ //if the answer is false and the buttonFalse is pressed
            if(ansValue1===questions[questionIndex].a){
                correct++;
                questionIndex++;
                console.log(correct);
                renderQuestion();
            }
            else{
                incorrect++;
                questionIndex++;
                renderQuestion();
            }
        })

    };

   
    

