/**
 * Created by 376346 on 2/18/14.
 */
var appHostUrl = 'http://localhost:3000/processTracker';

$(function(){

    $("#uploadButton").click(function(){
        /*$("#uploadButton").dialog({
            modal: true,
            resizable: false,
            buttons: {
                "Ok": function() {
                    $(this).dialog("close");
                    closeParent();
                },
                "Cancel": function() {
                    $(this).dialog("close");
                }
            }
        });*/

        //window.open("/processTracker/upload", '_blank',"height=400,width=400,top=200,left=200");
        window.open("/upload.html", '_blank',"height=400,width=400,top=200,left=200");
        //$("#FileUpload").slideToggle();
    });
});

function uploadMetrics() {

    var metricsYear = $('#metricsYear').val();
    var metricsMonth = $('#metricsMonth').val();

    //var path=$('#ccda1').serialize();

    //alert('CCDA path - '+ JSON.stringify(files));
    alert('Year and Month - '+metricsYear+metricsMonth);
    if(metricsYear == null || metricsMonth == null){
        alert('Please enter valid Year and Month - '+metricsYear+metricsMonth);
    }else{
        var url = appHostUrl + '/upload';
        var request = $.ajax({
            url: url,
            type: "POST",
            data: { metricsYear : metricsYear, metricsMonth : metricsMonth },
            dataType: "json"
        });
    }
    return false;
}

function uploadDefectsData() {

    var metricsYear = $('#metricsYear').val();
    var metricsMonth = $('#metricsMonth').val();

    //var path=$('#ccda1').serialize();

    //alert('CCDA path - '+ JSON.stringify(files));
    alert('Year and Month - '+metricsYear+metricsMonth);
    if(metricsYear == null || metricsMonth == null){
        alert('Please enter valid Year and Month - '+metricsYear+metricsMonth);
    }else{
        var url = appHostUrl + '/defectsDataUpload';
        var request = $.ajax({
            url: url,
            type: "POST",
            data: { metricsYear : metricsYear, metricsMonth : metricsMonth },
            dataType: "json"
        });
    }
    return false;
}

function applySelect (id) {
    $('#' + id).selectpicker({selectedText:'count>2' });
    $('#' + id).selectpicker('refresh');
}

function applyHtml (id, options) {
    $('#' + id).html(options);
}
