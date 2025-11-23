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

            var splitString1h = pctChange1hText.replace("1-hour change:", "");
            var splitString24h = pctChange24hText.replace("24-hour change:", "");
            var splitString7d = pctChange7dText.replace("7-day change:", "");
            var splitString30d = pctChange30dText.replace("30-day change:", "");
            var splitString60d = pctChange60dText.replace("60-day change:", "");
            var splitString90d = pctChange90dText.replace("90-day change:", "");


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
                    idList[index].innerHTML += "▼";
                }
                else if (element > 0)
                {
                    console.log(element + " is more than 0");
                    let index = floatList.indexOf(element);
                    let colour = "green";
                    idList[index].style.color = colour;
                     idList[index].innerHTML += "▲";

                }
            }
            
            
        }


        pct_change_colour();