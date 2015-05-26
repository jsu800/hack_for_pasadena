/**
 * Created by kolag004 on 3/16/14.
 */
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

$('a').click(function(){
    var value = $(this).text();
    var btnvalue = $(this).data('counter');
    $(btnvalue).text(value);
});