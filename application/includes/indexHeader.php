<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Demo Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/home.css">
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Eastern Washington University</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="http://www.ewustudent.tk">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="https://sites.ewu.edu/dss">Disabiity Support</a>
            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seminar Info</a>
                  <div id="dropIt" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Speakers</a>
                    <a class="dropdown-item" href="#">Rooms</a>
                    <a class="dropdown-item" href="#">Misc</a>
                  </div>
            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nearby Activies</a>
                  <div id="dropIt" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Hotels</a>
                    <a class="dropdown-item" href="#">Restuarants</a>
                    <a class="dropdown-item" href="#">Misc</a>
                  </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn my-4 my-sm-0" href="www.yahoo.com" id="signUpButton">Sign Up</button>
            <button class="btn my-4 my-sm-0" href="www.google.com" id="logInButton">Log In</button>
          </form>
        </div>
      </nav>