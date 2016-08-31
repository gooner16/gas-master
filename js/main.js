var selYear, selMake, selModel, selOption;

//$("#droplist").empty(); -> in jquery
function removeOptions(selectbox)
{
    
    if (selectbox.id == "year") {
        amount = 3;
    }else if (selectbox.id == "make"){
        amount = 2;
    }else if (selectbox.id == "model"){
        amount = 1;
    }else if (selectbox.id == "options"){
        amount = 0;
    }

    for (var j = 1; j <= amount; j++) 
    {    
        if (j == 1) {
            selectbox = document.getElementById("options");
        }else if (j == 2){
            selectbox = document.getElementById("model");
        }else if (j == 3){
            selectbox = document.getElementById("make");
        }
        
        for(var i = selectbox.options.length - 1 ; i >= 0 ; i--) 
        {
            selectbox.remove(i);
        };
    };
}

function getData (dataLabel, dest) {
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'https://www.fueleconomy.gov/ws/rest/vehicle/menu/'+dataLabel+'',
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('menuItem').each(function() {
                    $('#'+dest+'')
                        .append($('<option />')
                        .text($(this)
                        .find('text').text()));
                });
            }
        });
    });
}

function getSelect (sel) {
    
    if (sel.id == "year"){
        selYear = sel.options[sel.selectedIndex].text;
        console.log(selYear)
        removeOptions(document.getElementById("year"));
        getData('make?year='+selYear+'', 'make')

    } else if (sel.id == "make"){
        selMake = sel.options[sel.selectedIndex].text;
        console.log(selMake)
        removeOptions(document.getElementById("make"));
        getData('model?year='+selYear+'&make='+selMake+'', 'model')
        
    }else if (sel.id == "model"){
        selModel = sel.options[sel.selectedIndex].text;
        console.log(selModel)
        removeOptions(document.getElementById("model"));
        getData('options?year='+selYear+'&make='+selMake+'&model='+selModel+'', 'options')
        
    }else{
        selOption = sel.options[sel.selectedIndex].text;
        console.log(selOption)
        removeOptions(document.getElementById("options"));
        getData('make?year='+selYear+'', 'make')
    }
}


    
