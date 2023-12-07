/* Eleni Zapata*/

function Words()
{ /*these are my variables*/
    var Word1 = document.getElementById("1stWord").value;
   
    document.getElementById("Word1Display").innerHTML = "You Input "  + Word1 ;

    
    document.getElementById("ZipCodeUpdate").innerHTML = " Zipcode " + Zip1 ;
   
    var NameDisplay = Name1 + Name2;
    var len = NameDisplay.length;

    document.getElementById("NameDisplay").innerHTML = "concatenate of 1 and 2 = " + len;

}
function Info()
{
    var Name1 = document.getElementById("FirstName").value;
    var Name2 = document.getElementById("LastName").value;
    var Zip1 = document.getElementById("Zipcode").value;
    
 

    document.getElementById("NameDisplay").innerHTML = " Full Name " + Name1 + Name2 ;
    
    document.getElementById("ZipCodeUpdate").innerHTML = " Zipcode " + Zip1 ;

}

    if ((Name1 + Name2 <=20 || Zip1 ==5)) 
    {
        document.getElementById("Message").innerHTML = "SURPRISE";

    }
    else if  ((Zip1 != 5))
    {
        document.getElementById("Message").innerHTML = "Cannot Continue";
    }
    else ((Name1 == 25))
    {
        document.getElementById("Message").innerHTML = "Cannot Continue";
    }