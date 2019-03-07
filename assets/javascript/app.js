

$(document).ready(function(){
    $("#question").hide();

    $("#start").on("click",initialize);


})

/*var trivia= $("<div>");
trivia.addClass("questionBody");
$(".questions").append(trivia);


for(var i=0; i<length.question;i++){
    $(".questions").text(question[i].q)
    console.log(question[i].q)

}
*/



var correct=0;
var incorrect=0;
var unanswered=0;
var time=120;
var trivia={
    questions:{q1:'who wears jearsey no 30?',
                q2:'what position is steph curry?'
                },
    answers:{
                 q1:'Steph Curry', 
                    q2:'point guard'
                },
             
opts:{ q1:['steph curry', 'dell curry'],

             q2:['point-guard','shooting-guard']
            
            }


};


function initialize(){


    $("#question").show();
    $("#question").text(trivia.questions.q1);

    var radioBtnTrue = $('<input type="radio" name="rbtnCount" value="true" />');
    radioBtnTrue.appendTo('#question');
    var radioBtnFalse= $('<input type="radio" name="rbtnCount" value="false" />');
    radioBtnFalse.appendTo('#question');

    console.log(trivia.questions.q1)
    console.log(trivia.opts.q1)
    $("#start").hide();

};
