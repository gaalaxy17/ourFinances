$(document).ready(()=>{

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Gastos do Dia", "Gastos Totais","Saldo Total"],
        datasets: [{
          label: 'Money',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var user = window.sessionStorage.getItem('user');

    console.log(user);

    $('.username').html('<i class="fas fa-user-circle fa-fw"></i> ' + user);

    $('.darken-bkg').css("display","block");
    $('.spinner-border').show();

    $.get('https://gaalaxyapijs.herokuapp.com/accounts',(data)=>{
        data.forEach(element => {
            if(element.fkDonoConta == window.sessionStorage.getItem('cdUser') || element.fkParConta == window.sessionStorage.getItem('cdUser')){
                $.get('https://gaalaxyapijs.herokuapp.com/users', (user)=>{
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