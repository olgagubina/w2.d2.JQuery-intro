// <!-- Exercise 1 -->
// $(".red-div").css("color","red");
// $("ul li:nth-child(2)").css('color','pink');
// $("ul li:first").css('color','green');
// $("#brown-div").css("color","brown");

// <!-- Exercise 2 -->
// $("button").on('click', function() {
//     alert($("#my-input").val());
// })

// <!-- Exercise 3 -->
$('#3').click(function(){
    var newName = $('#my-input2').val();
    $('.students').append('<li>' + newName + '</li>');
    $('#my-input2').val("");
});

$('ul').on('click', 'li', function(){
    $(this).remove();
});
