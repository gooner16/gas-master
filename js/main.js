var selYear, selMake, selModel, selOption, vehicleid;
var vehicleInfo[];

//clears options from dropdown box
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

        for(var i = selectbox.options.length - 1 ; i > 0 ; i--)
        {
            selectbox.remove(i);
        }
    }
}

//grab data for:
//city08U - unrounded city MPG for fuelType1 (2), (3)
//cityA08U - unrounded city MPG for fuelType2 (2), (3)
//comb08U - unrounded combined MPG for fuelType1 (2), (3)
//combA08U - unrounded combined MPG for fuelType2 (2), (3)
//highway08U - unrounded highway MPG for fuelType1 (2), (3)
//highwayA08U - unrounded highway MPG for fuelType2 (2),(3)
function getEmissions(id) {

    var dataList = ["city08U", "cityA08U", "comb08U", "combA08U", "highway08U", "highwayA08U"];

    for (var i = 0; i < vehicleInfo.length; i++) {
        var tempInfo = {
            label: dataList[i],
            val: null,
        };
        vehicleInfo.push(tempInfo);
    }

    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://www.fueleconomy.gov/ws/rest/vehicle/'+id+'',
            dataType: 'xml',
            success: function (xml) {

                for (var i = 0; i < vehicleInfo.length; i++) {
                    $(xml).find(vehicleInfo[i].label).each(function () { /* Function within a loop?? */
                        vehicleInfo[i].val = $(this).val();
                        console.log(vehicleInfo[i].val);
                    });
                }
            }
        });
    });
}

//get the vehicle data for dropdowns
function getData (dataLabel, dest, io) {
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://www.fueleconomy.gov/ws/rest/vehicle/'+dataLabel+'',
            dataType: 'xml',
            success: function(xml) {
                //for adding to select box
                if (io == 1) {
                    $(xml).find('menuItem').each(function() {
                        $('#'+dest+'')
                            .append($('<option />')
                            .text($(this)
                            .find('text').text()));
                    });
                //for getting the vehicle id
              } else if (io === 0){
                    $(xml).find('menuItem').each(function() {
                        if (selOption == $(this).find("text").text()) {
                            vehicleid = $(this).find("value").text();
                            console.log(vehicleid);
                            getEmissions(vehicleid);
                        }
                    });
                }
            }
        });
    });
}

//organize which data is loaded and cleared when fields are changed
function getSelect (sel) {

    if (sel.id == "year"){
        selYear = sel.options[sel.selectedIndex].text;
        console.log(selYear);
        removeOptions(document.getElementById("year"));
        getData('menu/make?year='+selYear+'', 'make', 1);

    } else if (sel.id == "make"){
        selMake = sel.options[sel.selectedIndex].text;
        console.log(selMake);
        removeOptions(document.getElementById("make"));
        getData('menu/model?year='+selYear+'&make='+selMake+'', 'model', 1);

    }else if (sel.id == "model"){
        selModel = sel.options[sel.selectedIndex].text;
        console.log(selModel);
        removeOptions(document.getElementById("model"));
        getData('menu/options?year='+selYear+'&make='+selMake+'&model='+selModel+'', 'options', 1);

    }else{
        selOption = sel.options[sel.selectedIndex].text;
        console.log(selOption);
        removeOptions(document.getElementById("options"));
        getData('menu/options?year='+selYear+'&make='+selMake+'&model='+selModel+'', 'options', 0);
    }
}
