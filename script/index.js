$(document).ready(()=>{
    var user = window.sessionStorage.getItem('user');

    console.log(user);

    $('.username').html(user);
});

$('#logoutAction').click(()=>{

    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('isLogado');

});