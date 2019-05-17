const API_ENDPOINT = "https://gaalaxyapijs.herokuapp.com";

$('#submit').click(()=>{

    error = "";

    if(!$('#inputEmail').val()){
        error = "O login não pode estar vazio! <br>";
    }
    if(!$('#inputPassword').val()){
        error = error + "A senha não pode estar vazia! <br>";
    }
    
    if($('#inputEmail').val() && $('#inputPassword').val()){
        $('.darken-bkg').css("display","block");
        $('.spinner-border').show();

        var user = $('#inputEmail').val();
        var pass = $('#inputPassword').val();

        const getHash = new Promise((resolve,reject)=>{
            $.get("https://api.hashify.net/hash/md4/hex?value=" + pass,(result)=>{
                if(result){
                    passHash = result["Digest"];
                    resolve(passHash);
                }
                else{
                    reject("Error converting hash");
                }
            });
        }).then(()=>{
            credentials = {
                "username":user,
                "password":passHash
            }

            $.ajax({
                type: "POST",
                url: API_ENDPOINT + '/users/login',
                data: credentials,
                statusCode:{
                    404:()=>{
                        error = "Login ou senha inválidos";
                        $("#errorMsg").html(error);
                        $('.spinner-border').hide();
                        $('.darken-bkg').css("display","none");
                        
                    },
                    200:(response)=>{
                        $('.spinner-border').hide();
                        $('.darken-bkg').css("display","none");
                        window.sessionStorage.setItem('user',user);
                        window.sessionStorage.setItem('nome',response.nmUser);
                        window.sessionStorage.setItem('cdUser',response.cdUser);
                        window.sessionStorage.setItem('isLogado',true);
                        window.location.href = "index.html";
                    }
                }
            });
        });
    }

    $("#errorMsg").html(error);


});