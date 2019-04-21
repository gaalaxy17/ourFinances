$(document).ready(()=>{
    var user = window.sessionStorage.getItem('user');

    console.log(user);

    $('.username').html('<i class="fas fa-user-circle fa-fw"></i> ' + user);

    $('.darken-bkg').css("display","block");
    $('.spinner-border').show();

    $.get('https://gaalaxyapijs.herokuapp.com/account',(data)=>{
        data.forEach(element => {
            if(element.fkDonoConta == window.sessionStorage.getItem('cdUser') || element.fkParConta == window.sessionStorage.getItem('cdUser')){
                $.get('http://gaalaxyapijs.herokuapp.com/users', (user)=>{
                    $('#saldoTotal').html('R$ ' + element.vlTotalConta);
                    $('#contaTipo').html('Conta: ' + element.tpConta);
                    user.forEach(users => {
                        if(element.fkDonoConta == users.cdUser){
                            user1 = users.nmUser;
                        }
                        if(element.fkParConta == users.cdUser){
                            user2 = users.nmUser;
                        }
                    });
                    $('#contaDono').html(user1 + '<br>' + user2);
                    $('.spinner-border').hide();
                    $('.darken-bkg').css("display","none");
                })
                
            }
        });
    });

});