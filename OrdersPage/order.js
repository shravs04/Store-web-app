
// function table() {
//  {/* <tr class="table-row">
//      <td class="secondary-text">id</td>
//      <td class="primary-text">name</td>
//     <td class="primary-text">
//          "date"
//          <br>
//          <span class="secondary-text">time</span>
//      </td>
//     <td class="secondary-text">price</td>
//     <td class="primary-text">delivered</td>
// </tr> */}
    
// }

var http = new XMLHttpRequest();
http.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var response = JSON.parse(http.responseText);
        console.log(response);

        var someData = '';
        for(var i = 0; i < response.length; i++){
            someData += "<tr class=" + response[i].orderStatus + ">";
            someData += "<td class='common'>" + response[i].id + "</td>";
            someData += "<td>"+ response[i].customerName +"</td>";
                    
            someData += "<td>" + response[i].orderDate +"<br>"+"<span class='common'>"+ response[i].orderTime +"<span>"+"</td>";
            someData += "<td class='common'>" + "$"+ response[i].amount +"</td>";
            someData += "<td>" + response[i].orderStatus +"</td>";
        }

        var tableData = document.getElementById('data');
        tableData.innerHTML = someData;
    }
}


$(function () {
    $("#new-one").click(function () {
        if ($(this).is(":checked")) {
            $(".New").show();
        } else {
            $(".New").hide();
        }
    });
});


//---packed toggling
$(function () {
    $("#packed-one").click(function () {
        if ($(this).is(":checked")) {
            $(".Packed").show();
        } else {
            $(".Packed").hide();
        }
    });
});





$(function () {
    $("#transit-one").click(function () {
        if ($(this).is(":checked")) {
            $(".InTransit").show();
        } else {
            $(".InTransit").hide();
        }
    });
});

//---Delivered toggling

$(function () {
    $("#delivered-one").click(function () {
        if ($(this).is(":checked")) {
            $(".Delivered").show();
        } else {
            $(".Delivered").hide();
        }
    });
});
   
