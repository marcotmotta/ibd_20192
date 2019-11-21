$(document).ready(function() {

    $(".queries-container").css("display", "block");

    $(".menu-queries").on('click', function(){
        let url = 'https://0.0.0.0:5000.com/query/select%20*%20from%20players%20limit%205';
        /* $.ajax({
            url: url,
            type: 'GET',
            //data: ,
            //dataType: ,
            success: function(result){
                console.log(result);
                $(".body-container").append(JSON.stringify(result));
            },
            error: function(error){
                console.log('error', error);
            }
        }); */
        $(".queries-container").css("display", "block");
        $(".myo-container").css("display", "none");
        //$("body").css("background-color", "lightgreen");
    });

    $(".menu-queries-own").on('click', function(){
        $(".myo-container").css("display", "block");
        $(".queries-container").css("display", "none");
        let height = $('body').height();
        $(".myo-container").css("height", (height - 80) + "px");
        //$("body").css("background-color", "lightblue");
    });

});