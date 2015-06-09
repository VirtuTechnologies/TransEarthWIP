/**
 * Created by Santhosh
 */


var succesAlert = function (message, id) {
    var items = [];
    items.push('<div class="alert alert-success">');
    items.push('<a href="#" class="close" data-dismiss="alert">&times;</a>');
    items.push('<strong>Success!</strong> ' + message);
    items.push('</div>');
    console.log(items.join(''));
    $('#'+id).html (items.join(''));
};

var succesWarning = function (message, id) {
    var items = [];
    items.push('<div class="alert alert-warning">');
    items.push('<a href="#" class="close" data-dismiss="alert">&times;</a>');
    items.push('<strong>Warning!</strong> ' + message);
    items.push('</div>');
    $('#'+id).html (items.join(''));
};

var succesError = function (message, id) {
    var items = [];
    items.push('<div class="alert alert-danger">');
    items.push('<a href="#" class="close" data-dismiss="alert">&times;</a>');
    items.push('<strong>Error!</strong> ' + message);
    items.push('</div>');
    $('#'+id).html (items.join(''));
};

var successInfo = function (message, id) {
    var items = [];
    items.push('<div class="alert alert-info">');
    items.push('<a href="#" class="close" data-dismiss="alert">&times;</a>');
    items.push('<strong>Information!</strong> ' + message);
    items.push('</div>');
    $('#'+id).html (items.join(''));
};

var clearAlert = function(id){
    //$('#'+id).remove();
    var items = [];
    items.push('<div>');
    items.push('</div>');
    $('#'+id).html (items.join(''));
};