function sum() {
  var val = document.getElementById('userInput').value;
  var temp = val.split(" ");
  var total = 0;
  var v;
  var mean = total / temp.length;
  var total1 = 0;
  var v1;
  var temp23;
  var square;

  for (var i = 0; i < temp.length; i++) {
    v = parseFloat(temp[i]);
    total += v;
  }

  mean = total / temp.length;

  for (var i = 0; i < temp.length; i++) {
    v1 = (Math.pow(parseFloat(temp[i]) - mean), 2);
    total1 += v1;
  }


  temp23 = total1 / temp.length;
  square = Math.sqrt(temp23);

  document.write(total + '<br />');
  document.write(mean + '<br />');
  document.write(square);
}
