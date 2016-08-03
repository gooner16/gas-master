var selYear, selMake, selModel, selOption;

function getData (dataLabel, dest, store) {
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/'+dataLabel+'',
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
///reduce below functions
function getSelect (sel) {
    
    if (sel.id == "year"){
        selYear = sel.options[sel.selectedIndex].text;
        console.log(selYear)
        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year='+selYear+'',
                dataType: 'xml',
                success: function(xml) {
                    $(xml).find('menuItem').each(function() {
                        $('#make')
                            .append($('<option />')
                            .text($(this)
                            .find('text').text()));
                    });
                }
            });
        });
    } else if (sel.id == "make"){
        selMake = sel.options[sel.selectedIndex].text;
        console.log(selMake)
        //////////////////////////
        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year='+selYear+'',
                dataType: 'xml',
                success: function(xml) {
                    $(xml).find('menuItem').each(function() {
                        $('#make')
                            .append($('<option />')
                            .text($(this)
                            .find('text').text()));
                    });
                }
            });
        });
    }else if (sel.id == "model"){
        selModel = sel.options[sel.selectedIndex].text;
        console.log(selModel)
        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year='+selYear+'',
                dataType: 'xml',
                success: function(xml) {
                    $(xml).find('menuItem').each(function() {
                        $('#make')
                            .append($('<option />')
                            .text($(this)
                            .find('text').text()));
                    });
                }
            });
        });
    }else{
        selOption = sel.options[sel.selectedIndex].text;
        console.log(selOption)
    }
}
    

    
