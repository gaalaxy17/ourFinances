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
    

        $.get("http://gaalaxyapijs.herokuapp.com/users",(data)=>{
            $.get('https://api.hashify.net/hash/md4/hex?value=' + pass,(hash)=>{
                var hashPass = hash.Digest;
                data.forEach(element => {
                    if(user == element.dsUser && hashPass == element.dsPass){
                        window.location.href = "index.php";
                    }
                    else{
                        error = "Login ou Senha invalida!";
                        $('#errorMsg').html(error);
                    }
                });

                $('.spinner-border').hide();
                $('.darken-bkg').css("display","none");
        
            });
        });
    }

    $('#errorMsg').html(error);
    

});