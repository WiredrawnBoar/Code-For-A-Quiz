var score=0; 

function anime_question_1(){

            if(document.getElementById("OPT2_Q1").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }
            else {
                swal("Wrong","Hopefully you get the next one right","error")
               
            }
            document.getElementById("anime_div_1").style.display="none"
            document.getElementById("anime_div_2").style.display="block"
}

function anime_question_2(){

            if(document.getElementById("OPT3_Q2").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")
                
            }
            document.getElementById("anime_div_1").style.display="none"
            document.getElementById("anime_div_2").style.display="none"
            document.getElementById("anime_div_3").style.display="block"
}
function anime_question_3(){

            if(document.getElementById("OPT1_Q3").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")
               
            }
            document.getElementById("anime_div_1").style.display="none"
            document.getElementById("anime_div_2").style.display="none"
            document.getElementById("anime_div_3").style.display="none"
            document.getElementById("anime_div_4").style.display="block"
}
function anime_question_4(){

            if(document.getElementById("OPT1_Q4").checked==true){
                    swal("Congratulations","Correct Answer","success")
                    score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")

            }
            document.getElementById("anime_div_1").style.display="none"
            document.getElementById("anime_div_2").style.display="none"
            document.getElementById("anime_div_3").style.display="none"
            document.getElementById("anime_div_4").style.display="none"
            document.getElementById("anime_div_5").style.display="block"

            
            }

function anime_question_5(){

if(document.getElementById("OPT2_Q5").checked==true){
        swal("Congratulations","Hopefully you enjoyed this quiz","success")
        score=score+1
}

else{
    swal("Wrong","But hopefully you enjoyed this quiz","error")

}
document.getElementById("anime_div_1").style.display="none"
document.getElementById("anime_div_2").style.display="none"
document.getElementById("anime_div_3").style.display="none"
document.getElementById("anime_div_4").style.display="none"
document.getElementById("anime_div_5").style.display="none"
// document.getElementById("anime_div_result").style.display="block"

// if (score==5){
//                 document.getElementById("result").innerHTML="Your score is 5 out of 5 <br><br> You are one of the few people who really love anime";
//             }
//             else if (score==4)
//             {
//                 document.getElementById("result").innerHTML="Your score is 4 out of 5 <br><br> You have great knowledge of anime"
//             }
//             else if (score==3)
//             {
//                 document.getElementById("result").innerHTML="Your score is 3 out of 5 <br><br> You did pretty well"
//             }
//             else if (score==2)
//             {
//                 document.getElementById("result").innerHTML="Your score is 2 out of 5 <br><br> You could have done better"
//             }
//             else if (score==1)
//             {
//                 document.getElementById("result").innerHTML="Your score is 1 out of 5 <br><br> You better sharpen up those anime facts"
//             }
//             else if (score==0){
//                 document.getElementById("result").innerHTML="Your score is 0 out of 5 <br><br> You do not watch much anime"}

}