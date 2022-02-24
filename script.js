var score=0; 

function question_1(){

            if(document.getElementById("OPT2_Q1").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }
            else {
                swal("Wrong","Hopefully you get the next one right","error")
               
            }
            document.getElementById("div_1").style.display="none"
            document.getElementById("div_2").style.display="block"
}

function question_2(){

            if(document.getElementById("OPT3_Q2").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")
                
            }
            document.getElementById("div_1").style.display="none"
            document.getElementById("div_2").style.display="none"
            document.getElementById("div_3").style.display="block"
}
function question_3(){

            if(document.getElementById("OPT1_Q3").checked==true){
                 swal("Congratulations","Correct Answer","success")
                 score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")
               
            }
            document.getElementById("div_1").style.display="none"
            document.getElementById("div_2").style.display="none"
            document.getElementById("div_3").style.display="none"
            document.getElementById("div_4").style.display="block"
}
function question_4(){

            if(document.getElementById("OPT1_Q4").checked==true){
                    swal("Congratulations","Correct Answer","success")
                    score=score+1
            }

            else{
                swal("Wrong","Hopefully you get the next one right","error")

            }
            document.getElementById("div_1").style.display="none"
            document.getElementById("div_2").style.display="none"
            document.getElementById("div_3").style.display="none"
            document.getElementById("div_4").style.display="none"
            document.getElementById("div_5").style.display="block"

            
            }

function question_5(){

if(document.getElementById("OPT2_Q5").checked==true){
        swal("Congratulations","Hopefully you enjoyed this quiz","success")
        score=score+1
}

else{
    swal("Wrong","But hopefully you enjoyed this quiz","error")

}
document.getElementById("div_1").style.display="none"
document.getElementById("div_2").style.display="none"
document.getElementById("div_3").style.display="none"
document.getElementById("div_4").style.display="none"
document.getElementById("div_5").style.display="none"

}