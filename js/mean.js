var m = "1,2,3,4,5"
var sum = 0
m_array = m.split(",")
m_array.forEach(function(item){sum = sum+ parseInt(item)})
var mean_result = sum/m_array.length
