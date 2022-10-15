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

//4
function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "Wrong date";
      return false;
    } else {

    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    return document.getElementById("result").innerHTML =
             "Age is: " + age + " years. ";
    }
}


//5
//First create a list of all bold items
var bold_Items;
window.onload = getBold_items();

// Collect all <strong> tags
function getBold_items()
{
  bold_Items = document.getElementsByTagName('strong');
}
// iterate all bold tags and change color
function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }
}

//6
function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " and Height: " + h + "</h1>";
}
