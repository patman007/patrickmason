## Task: 

Please write, test and copy here code that would create a navigation bar and pin it to the top of the viewport (it should not move as you scroll down the page).  If you use a jsbin or similar test environment, please paste its link here.

### Please view styles.css and index.html in the q5_front_end for a visual

HTML
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
        <!--Font Awesome code-->
        <!--<script src="https://kit.fontawesome.com/63582255f8.js" crossorigin="anonymous"></script>-->
        <!--Google Fonts code-->
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->        
        <ul>                        
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a>
                <ul>
                    <li><a href="#">Bio</a></li><br>
                    <li><a href="#">Porfolio</a></li>
                </ul>
            </li>
            <li><a href="#">Locations</a>
                <ul>
                    <li><a href="#">Austin</a></li><br>
                    <li><a href="#">Houston</a></li><br>
                    <li><a href="#">Dallas</a></li><br>
                    <li><a href="#">San Antonio</a></li><br>
                </ul>
            </li>
            <li><a href="#">FAQ</a>
                <ul>
                    <li><a href="#">Why do business with us</a></li><br>
                    <li><a href="#">Our Partners</a></li><br>
                </ul>
            </li>
            <li><a href="#">Contact</a>
                <ul>
                    <li><a href="#">Phone</a></li><br>
                    <li><a href="#">Email</a></li><br>
                </ul>
            </li>           
        </ul>     
    </body>
</html>


Feedback: No, cannot give this to you.  The navbar does move out of view when you put
more stuff below it.