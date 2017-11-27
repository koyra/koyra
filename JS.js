//Javascript functions
//Image slide show function
var images=["../image/slide1.jpg","../image/slide2.jpg","../image/slide3.jpg","../image/slide4.jpg","../image/slide5.jpg","../image/slide6.jpg"];
var index=0;
var L= images.length -1;

function changeImage(){
    index+=1;
    if(index > L)
        {
            index=0;
        }
    document.getElementById("slideimage").src = images[index];
    return false;
}

function autoRun(){
    setInterval("changeImage()",5000);
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Function to calculate the area of a circle 
function circle() {
    var pi=3.14;
    var input = document.getElementById("radius").value;
    if (input.length === 0 ||isNaN(input))
        {
            alert("Please fill the field or enter a valid value");
              return;
        }
    if(input>1000 || input<0){
        alert("please enter a number between 0 and 1000");
        return;
    }
	var circle= pi*(input*input);
    alert("the area of the circle is " + circle.toFixed(2));
 }
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 function computeCost(){  

    var km=document.getElementById("kilometer").value;
    var cos=document.getElementById("cost").value;
    var cons=document.getElementById("consumption").value;
    
     if (km.length === 0 || cos.length===0 || cons.length===0 ||isNaN(km)||isNaN(cos)||isNaN(cons))
        {
            alert("Please fill all the fields or enter a valid value");
            return; 
        } 
    if(km<0 || cos<0 || cons<0){
        alert("please enter a positive number");
        return;
    }
        
        var total=(km/cons)*cos;
            document.getElementById("result").innerHTML=total.toFixed(2);

        }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function even(){
    var num=document.getElementById("number").value;
    var count=0;
    var temp=""; 
    if(num.length==0 ||isNaN(num) )
        {
            alert("please fill the fields or enter a valid number");
            return;
        }
    if(num< 2 || num>10000)
        {
            alert("please enter a number between 1 and 10000");
        return;
    }
    if(num <=100)
        {
            temp="<table border='1' cellspacing='0' cellpadding='5'><tr><th colspan='10'>even numbers between 1 and "+num+"</th></tr><tr>";
        }
    else
        {
            temp="<table border='1' cellspacing='0' cellpadding='5'><tr><th colspan='15'>even numbers</th></tr><tr>";
        }
    for(var i=1;i<=num;i++)
        {
            if(i%2===0)
                {
                    temp+="<th>"+i+"</th>";
                    count++;
                    if(num<=100)
                        {
                            if(count===10)
                                {
                                    temp+="</tr><tr>";
                                    count=0;
                                }
                        }
                    else
                        {
                            if(count===15)
                                {
                                    temp+="</tr><tr>";
                                    count=0;
                                } 
                        }
                }
        }
        temp+="</tr></table>";
        document.getElementById("out").innerHTML=temp;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


function asterisk(){
    var temp="";
    var num=document.getElementById("asterisk").value;
    if(num.length ==0 ||isNaN(num))
        {
            alert("please fill the fields or enter a valid value");
            return;
        }
    else if(num>80||num<0)
        {
            alert("please enter a number between 0 and 80");
            return;
        }
    for(var i=0;i<num;i++)
        {
            for(var j=0;j<num;j++)
                {
                    temp+="*";
                }
            temp+='<br/>';
        }
            document.getElementById("out").innerHTML=temp;
}

function asterisktwo(){
    var temp="";
    var num=document.getElementById("asterisk2").value;
    if(num.length ==0 ||isNaN(num))
        {
            alert("please fill the fields of enter a valid value");
            return;
        }
    else if(num>40||num<0)
        {
            alert("please enter a number between 0 and 40");
            return;
        }
    for(var i=0;i<num;i++)
        {
            for(var j=0;j<num;j++)
                {
                    temp+="*";
                }
            temp+='<br/>';
        }
            document.getElementById("out2").innerHTML=temp;
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function bmiCalculate(){
    var kg=document.getElementById("weight").value;
    var h=document.getElementById("height").value;

    var height= h.split("."); 
    if(kg.length===0 || h.length==0 || isNaN(kg)|| isNaN(h))
        {
            alert("please fill the fields of enter a valid value");
            return;
        }   
        if(height.length==2)
             var bmi = kg / Math.pow(h, 2);
         else
            var bmi = kg / Math.pow(h/100, 2);

    var type="";
    if(bmi < 18)
            type="Underweight";
        else if(bmi < 25)
            type="Normal";
        else if(bmi < 30)
            type="Overweight";
        else if(bmi<40)
            type="Obese";
        else 
            type="Morbid obese";
    document.getElementById("type").innerHTML="Your body type is :"+type;
    document.getElementById("score").innerHTML="Your BMi is ="+bmi.toFixed(2);
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function change(){

                var value=document.getElementById("input").value;
                if(value==""||isNaN(value)){
                alert("please enter a number or fill the fields");
                return;
                }
                if(value<0){
                    alert("please enter a valid value");
                    return;
                }
                else{
                var value1=value.split(".");
                if (value1.length==1) {
                value1[1]=0;
               }
               if (value1[1].length>2) {
                alert("only 2 digits after the decimal is allowed");
                return;
               }
               else{
                
                var change="";
                var money=parseInt(value);
                change+=money+" Birr, ";
                var remender=(value*100)-(money*100);
                 remender=remender.toFixed(2);
                var quarters=parseInt(remender/25);
                change+=quarters+" quarters, ";
                remender=remender%25;
                var dimes=parseInt(remender/10);
                change+=dimes+" dimes, ";
                remender=remender%10;
                var nickels=parseInt(remender/5);
                change+=nickels+" nickels, ";
                remender=remender%5;
                var pennies=parseInt(remender/1);
                change+=pennies+" pennies";
                document.getElementById("result").innerHTML="Change =" +change;
                } 
            }}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function calculateOrder(){
                var small=document.getElementById("small").value;
                var medium=document.getElementById("medium").value;
                var large=document.getElementById("large").value;
                var tip=0;
                
                if( small<0 || medium<0 || large<0)
                    {
                        alert("Please enter a positive integer");
                        return;
                    }
                    if(isNaN(small)||isNaN(medium)||isNaN(large) ){
                    alert("Please enter a valid value");
                    return;
                }
               else if(small==0 && medium==0 && large==0){
                    alert ("You didn't order anything please order first to calculate");
                    return;
                }
                 var chacks=small.split(".");
                 var chackm=medium.split(".");
                 var chackl=large.split(".");
               if (chacks.length==2|| chackm.length==2||chackl.length==2) {
                alert("only integer is allowed");
                return;
               }

                var tips=document.getElementsByName("tip");
                for(var i=0; i<tips.length; i++){
                    if (tips[i].checked) {
                        tip=tips[i].value;
                    }
                }
                var total=(small*50.75)+(medium*70.90)+(large*90.45);
                    //tax
                total += (total*0.15);
                    //tip
                total += (total*tip);
                var value6=document.getElementById("price").innerHTML=total.toFixed(2);
            }