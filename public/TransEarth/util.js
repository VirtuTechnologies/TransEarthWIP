//Scroll home - Use this to navigate to top of the screen
function scrollHome(){
    $('html, body').animate({
        scrollTop: '0px'
    }, 1500);
    return false;
}

//Apply select options - Bootstrap selectpicker
function applySelect (id) {
    //$('#' + id).selectpicker({selectedText:'count>2', dropupAuto: 'false'});
    //console.log("Inside applySelect with ID : "+id);
    $('#' + id).selectpicker({selectedText:'count>2'});
    $('#' + id).selectpicker('refresh');
}

//Bind the selectpicker html on to the page
function applyHtml (id, options) {
    //console.log("Inside applyHtml with ID : "+id+" and options: "+options);
    $('#' + id).html(options);
    //alert(id+' - '+options);
}