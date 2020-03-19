
function myFunction(id) {
    var x = document.getElementById(id);
    if(x.className.indexOf('accord__show') == -1){
        x.className += ' accord__show';
        x.previousElementSibling.className += " accord__link__active";
    }
    else{
        x.className = x.className.replace(' accord__show',"");
        x.previousElementSibling.className = x.previousElementSibling.className.replace(' accord__link__active', "");
    }
}


// like

function changeLike(ele) {
    var icon = document.getElementsByClassName('btn__like')[ele];
    if(icon.className.indexOf('btn__liked') == -1){
        icon.className += ' btn__liked';
        
    }
    else {
        icon.className = icon.className.replace(' btn__liked', '');
    }
}

//Comment

function showComment(ele) {
    var cmt = document.getElementsByClassName('comment__wrap')[ele];
    if(cmt.className.indexOf('comment__show') == -1){
        cmt.className += ' comment__show';
        
    }
    else {
        cmt.className = cmt.className.replace(' comment__show', '');
    }
}