function addNumber()
{
    var input = document.getElementById('input').value;
    var list = document.getElementById('list');
    var option = document.createElement('OPTION');
    list.options.add(option);
    option.text = input;
}

function getStatistics()
{
    var list = new Array();
    var select = document.getElementById('list');
    for(i = 0; i < select.options.length; i++)
    {
        list[i] = parseInt(select.options[i].text);
    }
    document.getElementById('summation').value =findSum(list);
    document.getElementById('mean').value = findMean(list);
    document.getElementById('variance').value = findVariance(list);
    document.getElementById('standardDev').value = findStandardDeviation(list);
}

function findSum(x)
{
	var sum = 0;
	for(i = 0; i < x.length; i++)
	{
		sum = sum + x[i];
	}
	return sum;
};

function findMean(x)
{
return findSum(x) / x.length;
};

function findVariance(x) {
		var mean = findMean(x);
		return findMean(array.map(findSum(sum)) {
			return Math.pow(sum - mean, 2);
		}));
	};

function findStandardDeviation(x)
{
		return Math.sqrt(findVariance(x));
};
