//1,3
$(document).ready(function () {
    $("#submit").click(function(event){
        $('#submit').val('Processing …');
        $('SubmitForm').submit();
    });  
  $('form').submit(function(event){
       alert("form submitted");
       $('#submit').val('submitted');
    });
});

