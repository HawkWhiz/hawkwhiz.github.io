$(document).ready(function(){
    $("#more_share").click(function(){
        $("#share_buttons").show();
        $("#more_share").hide();
        
    });
    $("#less_share").click(function(){
        $("#share_buttons").hide();
        $("#more_share").show();
    });


});
