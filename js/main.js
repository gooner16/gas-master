function loadBox () {
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/year',
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('menuItem').each(function() {
                    $('#year')
                        .append($('<option />')
                        .text($(this)
                        .find('text').text()));
                });
            }
        });
    });

    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=2012',
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('menuItem').each(function() {
                    $('#selectYear')
                        .append($('<option />')
                        .text($(this)
                        .find('text').text()));
                });
            }
        });
    });
}
    

    
