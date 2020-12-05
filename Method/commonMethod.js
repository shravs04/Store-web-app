var pagePath = window.location.pathname.split('/')[2];


var http = new XMLHttpRequest();
http.open('GET', 'https://5eea6936b13d0a00164e48aa.mockapi.io/login', true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var response = JSON.parse(http.responseText);
        // console.log(response);
        if(response === null){
            window.location.assign('../LoginPage/login.html');
        } 
        else {
            if(pagePath === "order.html"){
                var a = document.getElementsByClassName('menu-items');
                for(var i = 0; i < a.length; i++){
                    if(i === 0){
                        a[i].className = "menu-items topbar-active"
                    }else {
                        a[i].className = "menu-items"
                    }
                }
            }

            if(pagePath === "product.html"){
                var a = document.getElementsByClassName('menu-items');
                for(var i = 0; i < a.length; i++){
                    if(i === 1){
                        a[i].className = "menu-items topbar-active"
                    }else {
                        a[i].className = "menu-items"
                    }
                }
            }

            if(pagePath === "user.html"){
                var a = document.getElementsByClassName('menu-items');
                for(var i = 0; i < a.length; i++){
                    if(i === 2){
                        a[i].className = "menu-items topbar-active"
                    }else {
                        a[i].className = "menu-items"
                    }
                }
            }
        }
    }
}

// var logOut = document.getElementById('logout');
// logOut.addEventListener('click', function(){
//     // var http = new XMLHttpRequest();
//     window.location.assign('../LoginPage/login.html');
// })