// var http = new XMLHttpRequest();
// http.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true);
// http.send();
// http.onreadystatechange = function(){
//     if(http.readyState === 4){
//         var response = JSON.parse(http.responseText);
//         console.log(response);

//         var someData = '';
//         for(var i = 0; i < response.length; i++){
//             someData +="<tr class="+"table-row"+">";
//             someData +="<td>"+response[i].id+"</td>";
//             someData +="<td>"+"<img src="+response[i].profilePic+">"+"</td>";
            
//             someData +="<td>"+response[i].fullName+"</td>";
//             someData +="<td>"+response[i].dob+"</td>";
//             someData +="<td>"+response[i].gender+"</td>";
//             someData +="<td>"+response[i].currentCity+","+response[i].currentCountry+"</td>";
//         }

//         var tableData = document.getElementById('data-user');
//         tableData.innerHTML = someData;
//     }
// }
const dataFromBackendForUser= fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users').then(
    res=>{
       res.json().then(
           
           data=>{
            
               console.log(data)
               
               if(data.length > 0){
               
                var temp = ""

                //---start of loop
                 
                data.forEach(value => {
                   
                
                    temp +="<tr class="+"table-row"+">";
                    temp +="<td>"+value.id+"</td>";
                    temp +="<td>"+"<img src="+value.profilePic+">"+"</td>";
                    
                    temp +="<td>"+value.fullName+"</td>";
                    temp +="<td>"+value.dob+"</td>";
                    temp +="<td>"+value.gender+"</td>";
                    temp +="<td>"+value.currentCity+","+value.currentCountry+"</td>";

                });


                //---loop closed
               var toShowData= document.getElementById("data-user");
               toShowData.innerHTML = temp;


               }
           }
       )
    }
)

var search = document.getElementById('myInput')

search.addEventListener('keyup', function(){

    var filterSearch = search.value.toUpperCase();
    var tableRow = document.getElementsByClassName('table-row');

    if(filterSearch.length > 1){
        for(var i = 0; i < tableRow.length; i++){
            let temp = tableRow[i].children[2].innerText.toUpperCase()
            if(temp.includes(filterSearch)){
                tableRow[i].style.display = ""
            } else {
                tableRow[i].style.display = "none"
            }
        }
    }

    else {
        for(var i =0; i < tableRow.length; i++){
            let temp2 = tableRow[i].children[2].innerText.toUpperCase();
            tableRow[i].style.display = ""
        }
    }
})

const rectify =()=>{
    var nullBtn = document.getElementById("null-btn");
    let filtera = document.getElementById("myInput");
    nullBtn.addEventListener('click',()=>{
        filtera.value=" "
    })

}