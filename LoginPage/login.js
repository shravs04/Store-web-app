var loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    // console.log(e.target.username.value);
    // console.log(e.target.password.value);
    var username = e.target.username.value;
    var password = e.target.password.value;

    if(username === password){

        var data = {
            username: username,
            password: password
        }

        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'https://5eea6936b13d0a00164e48aa.mockapi.io/login', true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(data));
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState === 4){
                var response = JSON.parse(this.responseText);
                alert("Login Successful");
                window.location.assign('../OrdersPage/order.html');
            }
        }        
    } 
    else {
        alert('Please enter valid Credentials!!');
    }
})