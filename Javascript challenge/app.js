
function checkSimilarity(){
    var str1 = document.getElementById("lhsInput").value;
    var str2 = document.getElementById("rhsInput").value;
    document.getElementById("output").innerHTML = similarity(str1, str2);
  }

function similarity(name1, name2) {
    var longer = name1;
    var shorter = name2;
    if (name1.length < name2.length) {
      longer = name2;
      shorter = name1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return name1 + " " + "matches" + " " + name2 + " " + "by" + " " + (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength) * 100 + "%";
  }



  function editDistance(name1, name2) {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= name1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= name2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (name1.charAt(i - 1) != name2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[name2.length] = lastValue;
    } 
    return costs[name2.length]  ;
  }