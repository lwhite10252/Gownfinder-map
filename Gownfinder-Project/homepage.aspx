<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="homepage.aspx.cs" Inherits="Gownfinder_Project.homepage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">


<head runat="server">
    <title>Gown Finder London</title>

    <link href="Styles/homepage.css" rel="stylesheet" media="screen"/>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Poiret+One" rel="stylesheet">

    <script type="text/javascript" src="scripts/default.js"></script>
    <script type="text/javascript" src="scripts/key.js"></script>
    <script type="text/javascript" src="scripts/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/vendor/custom.modernizr.js"></script>
    <script type="text/JavaScript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
</head>


<body>
    <form id="form2" runat="server">
    <div>
    
        <!--Logo image and slogan-->
        <img src="/images/logobanner.png" class="logoimg" alt="Gown Finder logo">  
        <p></p> 

        <!--Main page text-->
        <div class="divLeft">
        <p><img src="images/searchbox.png" alt="searchbox icon" style="height:25px; width:25px"/> <input type="text" id="txtrisk" class="searchbox"/></p>
        <p>To find the best locations near you, use the search bar above<br/>to find a certain street or postal code!</p>
        <p>&copy; 2011-2016 LN-White Bridal. All rights reserved.
        <br/><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact Us</a></p>
        </div>

        <div class="divRight">
        <p>Gown Finder has been helping women find their dream gown since 2011! With our exhaustive network of bridal shops in London, Ontario and the 
           immediate surrounding area, we make it our goal to help you locate the best shops in town to get the job done!</p>
        <p><a href="#"><img src="images/app-googlestore.png" alt="Download our app on the Google Play Store"/></a>
           <a href="#"><img src="images/app-applestore.png" alt="Download our app on the Apple Store"/></a></p>
        </div>

    </div>
    </form>
</body>
</html>