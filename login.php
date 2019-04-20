<!DOCTYPE html>
<html lang="en">

<head>

  <meta name="theme-color" content="#555171">
  <meta name="apple-mobile-web-app-status-bar-style" content="#555171">
  <meta name="msapplication-navbutton-color" content="#555171">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

  <title>OurFinances - Login</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">

</head>

<body class="bkg">
  <div class="darken-bkg">
  </div>
  <br><br>
  <div class="container">
    <div class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
      <div class="text-center" style="color: white;font-family: 'Pacifico', cursive;font-size: 32px;">
        <h2>Welcome to OurFinances!</h2>
      </div>
      <div class="card card-login mx-auto mt-5">
        <div class="card-header text-center">Login</div>
        <div class="card-body">
            <div class="form-group">
              <div class="form-label-group">
                <span class="glyphicon glyphicon-user"></span><input type="text" id="inputEmail" class="form-control" placeholder="Email address" autofocus="autofocus">
                <label for="inputEmail">Username</label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password">
                <label for="inputPassword">Password</label>
              </div>
            </div>
            <div id="errorMsg"> 
            </div>
            <br>
            <button class="btn btn-primary btn-block" value="submit" id="submit">Entrar</button>
      </div>
    </div>
  </div>
 

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
   
  <script src="script/login.js"></script>

</body>

</html>
