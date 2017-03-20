<?php

function require_multi($files) {
    $files = func_get_args();
    
    $data = "";
    echo($data);
    
    /*
    foreach($files as $file)
      $data += file_get_contents($file);
      */
    echo($data);
        //require_once($file);
}


$page = "na";
$pageNo = 0;

if (isset($_GET['params'])) {

$params = explode( "/", $_GET['params'] );
$param = $params[0];

switch ($param) {
    case "bemutatkozas":
        $page = 'bemutatkozas';
        $pageNo = 1;
        break;
        
    case "muszaki_ellenorzes":
        $page = 'muszaki_ellenorzes';
        $pageNo = 2;
        break;
        
    case "referenciak":
        $page = 'referenciak';
        $pageNo = 3;
        break;
        
    case "tervezes":
        $page = 'tervezes';
        $pageNo = 4;
      break;
      
    case "kapcsolat":
        $page = 'kapcsolat';
        $pageNo = 5;
      break;

    default:
      //echo ("page not found");
      $page = '404';
      $pageNo = 6;
      break;

} 

}
else{
//bemutatkozas by default
$page = 'bemutatkozas';
$pageNo = 1;

//require_multi('topSection.html','bemutatkozas.html');

}

$pageTitles = array("Bemutatkozás", "Műszaki ellenőrzés", "Referenciák","Tervezés","Kapcsolat","404 - Oldal nem talahato");


?>


  
<!DOCTYPE html>
<html>
<head>
    <title><?php echo($pageTitles[$pageNo-1]); ?> - Danuvius Engineering</title>
    <meta charset="utf-8" />
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" type="image/png" href="favicon.png" />

    <!-- ***** CSS ***** -->
    <link href="css/materialize.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />

    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
    <link href="css/custom.css" rel="stylesheet" />


    <!-- ***** FONTS ***** -->
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i|Raleway:200,300,400,500,700|Roboto:300,400&amp;subset=latin-ext" rel="stylesheet" />
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

    <!-- ***** js ***** -->
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <script src="js/custom.js"></script>



    <!--
    CDN versions
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    -->


</head>

<body id="<?php echo($page);?>">

<div class="container">
    <div id="firstRow" class="row">
        <div class="col l3 offset-l1">
            <img id="siteLogo" src="img/logo.png" />
        </div>
        <div class="col l6 offset-l1 center-align">
            <!--style="background-color:magenta"-->
            <div class="col l4 fontForNumbers valign-wrapper noSidePadding"><i class="material-icons valign">language</i> English</div>
            <div class="col l4 fontForNumbers valign-wrapper noSidePadding"><i class="material-icons valign">phone</i> +36-30-678-3780</div>
            <div class="col l4 fontForNumbers valign-wrapper noSidePadding"> <i class="material-icons valign">email</i> info@danuviusengineering.hu</div>

        </div>

    </div>

</div>

<div class="row" id="navMainWrapper">
    <div class="col l10 offset-l1">
        <nav>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li class="menuItem <?php 
                                        if($page == "bemutatkozas")
                                        echo("active"); ?>">
                    <a href="/bemutatkozas">BEMUTATKOZÁS</a></li>
                <li class="menuItem <?php 
                                        if($page == "referenciak")
                                        echo("active"); ?>">
                    <a href="/referenciak">REFERENCIÁK</a></li>
                <li class="menuItem <?php 
                                        if($page == "tervezes")
                                        echo("active"); ?>">
                    <a href="/tervezes">TERVEZÉS</a></li>
                <li class="menuItem <?php 
                                        if($page == "muszaki_ellenorzes")
                                        echo("active"); ?>">
                    <a href="/muszaki_ellenorzes">MŰSZAKI ELLENŐRZÉS</a></li>
                <li class="menuItem <?php 
                                        if($page == "kapcsolat")
                                        echo("active"); ?>">
                    <a href="/kapcsolat">KAPCSOLAT</a></li>
            </ul>
        </nav>
    </div>
</div>
<?php 
  if($page != "kapcsolat" && $page != "404")
  require_once("slider.php");
  
  require_once($page.".html"); 
?>

  
  <footer class="page-footer">

    <div class="footer-copyright">
        <div class="container footerText">
            ©<span id="footerYear"></span> Danuvius Engineering Kft.&nbsp;|&nbsp;Minden jog fenntartva!&nbsp;|&nbsp;
            <a class="grey-text text-lighten-4" href="#!">Impresszum</a>&nbsp;|&nbsp;
            <a class="grey-text text-lighten-4" href="/kapcsolat">Kapcsolat</a>&nbsp;
        </div>
    </div>
</footer>


</body>

</html>