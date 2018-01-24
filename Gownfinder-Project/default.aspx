<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Gownfinder_Project._default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<head runat="server">
    <title>Gown Finder London</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link href="Styles/default.css" rel="stylesheet" media="screen"/>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Poiret+One" rel="stylesheet">

    <script type="text/javascript" src="scripts/default.js" media="screen"></script>
    <script type="text/javascript" src="scripts/key.js"></script>
    <script type="text/javascript" src="scripts/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/vendor/custom.modernizr.js"></script>
    <script type="text/JavaScript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
</head>

<body onload="boot();">
    <form id="frmDefault" runat="server">

    <!--Map-->
    <div id="bingMap" class="BingMap">
        <div id="fContainer" class="container"></div>
    </div>
        
    <!--Main frame with homepage content-->
    <iframe id="Frame" src="" runat="server" class="MainFrame">
    </iframe>

    <!-- Div for mapping function buttons -->
    <div id="mappingButtons" class="buttonDiv">
        <input type="button" id="btnSetGeo" value="Your Location" class="buttons" runat="server" onclick="manualLocation();"/>
        <input type="button" id="btnLoadPins" value="Find Stores" class="buttons" runat="server" onclick="loadPins();"/>
        <input type="button" id="btnClearMap" value="Clear Map" class="buttons" runat="server" onclick="clearMap();"/>
        <img src="/images/featherline.png"/>
    </div>

    <!--Bottom images-->
    <div class="slideshow">
        <div id="dressPics" class="gownSlideshow">
            <img src="/images/dress1.png" class="gownimg" alt="Find the hottest wedding gowns in town!"/>
            <img src="/images/dress2.png" class="gownimg" alt="Find the hottest wedding gowns in town!"/>
            <img src="/images/dress3.png" class="gownimg" alt="Find the hottest wedding gowns in town!"/>
            <img src="/images/dress4.png" class="gownimg" alt="Find the hottest wedding gowns in town!"/>
            <img src="/images/dress1.png" class="gownimg" alt="Find the hottest wedding gowns in town!"/>
        </div>
    </div>

    </form>
</body>
</html>