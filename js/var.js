function variance(arr)
{
var len = 0;
var sum=0;
for(var i=0;i<arr.length;i++)
{
if (arr[i] == ""){}
else if (!isNum(arr[i]))
{
alert(arr[i] + " is not number, Variance Calculation failed!");
return 0;
}
else
{
len = len + 1;
sum = sum + parseFloat(arr[i]);
}
}
var v = 0;
if (len > 1)
{
var mean = sum / len;
for(var i=0;i<arr.length;i++)
{
if (arr[i] == ""){}
else
{
v = v + (arr[i] - mean) * (arr[i] - mean);
}
}
return v / len;
}
else
{
return 0;
}
}
