$(document).ready(function(){
    $(document).keydown(changeKeyColor);
    $(document).keyup(resumeKeyColor);
})

//change style when keydown
function changeKeyColor(e){

    if (e.key == ' '){
        $('#space').addClass('current-key');
    }
    var keyText = e.key.toUpperCase();
    $(".key-row div:contains(" + keyText + ")").addClass('current-key');
       
}

//resume original style when keyup
function resumeKeyColor(e){

    if (e.key == ' '){
        $('#space').removeClass('current-key');
    }
    var keyText = e.key.toUpperCase();
    $(".key-row div:contains(" + keyText + ")").removeClass("current-key");
       
}

//when press Play button, input text will be displayed at the top
function playText(){
    
    //retrieve charactor from textbox and update to <p> element
    var i = 0
    var displayText = ' ';
    var userText = $('#userText').val();
    
    var intervalID = setInterval(function(){
        
        if (i<userText.length){
            clearInterval(myInterval);
            return;
        }
            displayText = $('#display p:first').text();
            
            var eObj = {key:userText[i]};
            changeKeyColor(eObj);
            setTimeout(function(){resumeKeyColor(eObj);},200);
            //setTimeout(resumeKeyColor,200);
            
            
            displayText += userText[i];
            $('#display p:first').text(displayText);
        } else { 
            clearInterval(intervalID); 
        }
        
        i++;
        
    }, 300);
    
    
    
    
    
    
    
}
