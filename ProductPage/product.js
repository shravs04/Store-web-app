var http = new XMLHttpRequest();
http.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var response = JSON.parse(http.responseText);
        console.log(response);

        var someData = '';
        for(var i = 0; i < response.length; i++){
            var className = '';
            if(response[i].stock > 100){
                className = 'inStock';
            } else {
                className = 'outStock';
            }

            if(Date.parse(response[i].expiryDate) < Date.now()){
                className = `${className} not Expired`;
            } else {
                className = `${className} expired`;
            }

            someData += `<tr class="${className}">`;
            someData += "<td class='common'>" + response[i].id + "</td>";
            someData += "<td>"+ response[i].medicineName +"</td>";
                    
            someData += "<td class='common'>" + response[i].medicineBrand + "</td>";
            someData += "<td>" + response[i].expiryDate + "</td>";
            someData += "<td class='common'>" + "$"+ response[i].unitPrice +"</td>";
            someData += "<td class='common'>" + response[i].stock +"</td>";
        }

        var tableData = document.getElementById('product-data');
        tableData.innerHTML = someData;
    }
}


$(function () {
    $("#expired").click(function () {
        if ($(this).is(":checked")) {
           
            $(".expired").hide();
        } else {
            $(".expired").show();
        }
    });
});


$(function () {
    $("#low").click(function () {
        if ($(this).is(":checked")) {
            
            $(".inStock").hide();
        } else {
            $(".inStock").show();
        }
    });
});