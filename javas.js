alert(1);
var f1, f2, btn, out, sel, console.err;

//field1 enthält jetzt das gefundene Objekt
f1 = document.querySelector('#field1');
f2 = document.querySelector('#field2');
btn = document.querySelector('button');
out = document.querySelector('output');
sel =document.querySelector('select');
err = document.querySelector('#error)
//Definition einer Funktion in Javascript
//Name der Funktion calcAddition
function calc() {
    var result = 0;
     var operation = sel.value;


  switch (operation){
  case "+":
  console.log(Addition);
  result = Number(f1.value) + Number(f2.value);
  breack;

  case "-":
  console.log(subtraktion);
result = Number(f1.value) - Number(f2.value);
  breack;

  case "*":
  console.log(Multiplation);
  result = Number(f1.value) * Number(f2.value
  breack;
  case "/"
  console.log(Division);
  result = Number(f1.value) / Number(f2.value



  break;

  default:
  console.log("ungültig");
  break;

}
out.value = result;
} else{
  err.classlist.remove('d-none');
}
btn.onclick= calc;
