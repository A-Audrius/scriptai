const points = [40, 100, 101, 5, 25, 10];



points.sort(function(a, b){

        return a-b
      
});

document.getElementById("demo").innerHTML = points;
alert(points)