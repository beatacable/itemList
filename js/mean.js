function mean() {
var val = document.getElementById('userInput').value;
var m = 0;
var sum = 0;
m_array = m.split(",");
m_array.forEach(function(item){sum = sum+ parseInt(item)})
var mean_result = sum/m_array.length
return mean_result
}
mean_result();
//Check whether is a number or not
// function isNum(args)
// {
// args = args.toString();
// if (args.length == 0) return false;
// for (var i = 0; i<args.length; i++)
// {
// if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != "."&& args.substring(i, i+1) != "-")
// {
// return false;
// }
// }
// return true;
// }
// //calculate the mean of a number array
// function mean(arr)
// {
// var len = 0;
// var sum = 0;
// for(var i=0;i<arr.length;i++)
// {
// if (arr[i] == ""){}
// else if (!isNum(arr[i]))
// {
// alert(arr[i] + " is not number!");
// return;
// }
// else
// {
// len = len + 1;
// sum = sum + parseFloat(arr[i]);
// }
// }
// return sum / len;
// }
