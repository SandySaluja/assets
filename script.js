var ab;
function errorTest()
{
try
  {
    ab= NAN;
    console.log(ab);
  }
catch(e)
  {
    alert("The value of ab is " +e.description);
    ab=10;
  }
  console.log(ab);
}
var ab=100;
function clickFunction(){
  document.getElementById('test').innerHTML=ab;
  console.log(ab);
  ab++;
}
