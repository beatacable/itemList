function sum(x)
{
	var sum = 0;
	for(i = 0; i < x.length; i++)
	{
		sum = sum + x[i];
	}
	return sum;
};

function mean(x)
{
return sum(x) / x.length;
};

function variance(x) {
		var mean = mean(x);
		return mean(array.map(sum(sum)) {
			return Math.pow(sum - mean, 2);
		}));
	},


function standardDeviation(x)
{
		return Math.sqrt(variance(x));
};
