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

//when press Play button, retrieve charactor from textbox and update to <p> element
function playText(){
    
    var i = 0;
    var displayText = '';
    var userText = $('#userText').val();
    
    var intervalID = setInterval(function(){
        
        if (i==userText.length){
            clearInterval(intervalID);
            return;
        }
        displayText += userText[i];
        $('#display p').text(displayText);
        
        var letterObj = {key:userText[i]};
        changeKeyColor(letterObj);

        setTimeout(function(){
            resumeKeyColor(letterObj);   
        }, 100);
        i++;
    }, 300);   
}
