        function pct_change_colour(){

            var pctChange1h = document.getElementById("1h");
            var pctChange24h = document.getElementById("24h");
            var pctChange7d = document.getElementById("7d");
            var pctChange30d = document.getElementById("30d");
            var pctChange60d = document.getElementById("60d");
            var pctChange90d = document.getElementById("90d");

            var pctChange1hText = document.getElementById("1h").textContent;
            var pctChange24hText = document.getElementById("24h").textContent;
            var pctChange7dText = document.getElementById("7d").textContent;
            var pctChange30dText = document.getElementById("30d").textContent;
            var pctChange60dText = document.getElementById("60d").textContent;
            var pctChange90dText = document.getElementById("90d").textContent;

            var splitString1h = pctChange1hText.replace("Percentage changed 1 hour:", "");
            var splitString24h = pctChange24hText.replace("Percentage changed 24 hours:", "");
            var splitString7d = pctChange7dText.replace("Percentage changed 7 days:", "");
            var splitString30d = pctChange30dText.replace("Percentage changed 30 days:", "");
            var splitString60d = pctChange60dText.replace("Percentage changed 60 days:", "");
            var splitString90d = pctChange90dText.replace("Percentage changed 90 days:", "");

            var pctChange1hFloat = parseFloat(splitString1h);
            var pctChange24hFloat = parseFloat(splitString24h);
            var pctChange7dFloat = parseFloat(splitString7d);
            var pctChange30dFloat = parseFloat(splitString30d);
            var pctChange60dFloat = parseFloat(splitString60d);
            var pctChange90dFloat = parseFloat(splitString90d);

            const idList = new Array(pctChange1h, pctChange24h, pctChange7d, pctChange30d, pctChange60d,pctChange90d);
            const floatList = new Array(pctChange1hFloat, pctChange24hFloat, pctChange7dFloat ,pctChange30dFloat, pctChange60dFloat, pctChange90dFloat)

            for (const element of floatList)
            {
                if (element < 0)
                {
                    console.log(element + " is less than 0");
                    let index = floatList.indexOf(element);
                    let colour = "red";
                    idList[index].style.color = colour;
                }
                else if (element > 0)
                {
                    console.log(element + " is more than 0");
                    let index = floatList.indexOf(element);
                    let colour = "green";
                    idList[index].style.color = colour;
                }
            }
            
            
        }


        pct_change_colour();