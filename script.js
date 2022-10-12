//Assignemt 01: Create a HTML Form Using DOM
//1.firstname,2.Middlename,3.lastname,4.Phone number
//Deploy it in Netlify
function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }


    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        ele.setAttribute(attrname2,attrvalue2)
        return ele;
    }

    function createlinebreak(tagname){
        var ele=document.createElement(tagname);
        return ele;
        }

        var firstName=createlabels("label","for","firstName","FirstName");
        var br1=createlinebreak("br");
        var input1=createinput("input","type","text","name","FirstName","id","firstName");
        var br2=createlinebreak("br");
        
        var middleName=createlabels("label","for","middleName","MiddleName");
        var br3=createlinebreak("br");
        var input2=createinput("input","type","text","name","MiddleName","id","middleName");
        var br4=createlinebreak("br");

        var lastName=createlabels("label","for","lastName","LastName");
        var br5=createlinebreak("br");
        var input3=createinput("input","type","text","name","LastName","id","lastName");
        var br6=createlinebreak("br");

        var phonenumber=createlabels("label","for","ph.no","Phone Number");
        var br7=createlinebreak("br");
        var input4=createinput("input","type","text","name","Phone Number","id","ph.no");
        
document.body.append(firstName,br1,input1,br2,middleName,br3,input2,br4,lastName,br5,input3,br6,phonenumber,br7,input4)
        
    