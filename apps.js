  function BMI(){
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var ans =(bmi.toFixed(2));
    document.getElementById("result").innerHTML="Your BMI is "+ans;
}