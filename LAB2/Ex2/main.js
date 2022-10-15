//1
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

//3
function myFunction() {
    var x = document.getElementById("myForm").action;
    document.getElementById("demo").innerHTML = x;
  }