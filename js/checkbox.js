$(document).ready(function() {
    $(".check").on('click', function() {
        let subject = "";
        $('.check:checked').each(function() {
            subject += "<li>" + $(this).val() + "</li>";
        });
        $('#result1').html(subject);

        let counter = $('[type="checkbox"]:checked').length;
        alert(counter);
     });

     $(".radio").click(function() {
         let gender = $('.radio:checked').val();
         $('#result2').html(gender);
     });
});