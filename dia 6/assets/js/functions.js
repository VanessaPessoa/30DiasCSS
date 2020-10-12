$(document).ready(function(){
    var atual_fs, net_fs, prev_fs;

    // alert('aq');
    $('.next').click(function(){
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $('#progress li').eq($('fieldset').index(next_fs)).addClass('active')
        atual_fs.hide(1);
        next_fs.show(5);
    });

    $('.prev').click(function(){
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();

        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('active')
        atual_fs.hide(1);
        prev_fs.show(5);
    });

})