$(document).ready(()=>{
    var user = window.sessionStorage.getItem('user');

    console.log(user);

    $('.username').html('<i class="fas fa-user-circle fa-fw"></i> ' + user);
});

$('#logoutAction').click(()=>{

    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('isLogado');

});