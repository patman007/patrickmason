## Task: 

Please write, test and copy here code that would create a navigation bar and pin it to the top of the viewport (it should not move as you scroll down the page).  If you use a jsbin or similar test environment, please paste its link here.

BY WRITE AND TEST CAN I USE AN HTML AND CSS FILE LIKE I ALREADY HAVE

### Please view styles.css and index.html in the q5_front_end for a visual

HTML
<!DOCTYPE html>
<html class="no-js"> <!--<![endif]-->
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
        <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li class="drowndown"><a href="#news">About</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Contact</a>
                <div class="dropdown-content">
                  <a href="#">FAQ</a>
                  <a href="#">News</a>                 
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">Cities</a>
              <div class="dropdown-content">
                <a href="#">Austin</a>
                <a href="#">Dallas</a>
                <a href="#">Houston</a>
              </div>
            </li>
          </ul>
        <!--Content to show on the page for demo Navigation Bar Position "sticks" to the top of webpage-->  
        <h3>Sticky Navigation Bar Example</h3>
        <p>The navbar will <strong>stick</strong> to the top when you reach its scroll position.
        </p>
        <p><strong>Note:</strong> Internet Explorer do not support sticky positioning and Safari requires a -webkit- prefix.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, 
            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. 
            Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <!--OLD WAY FOR EXAM -->
        <!-- <ul>                        
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
        </ul> -->
        <!-- <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>    
        <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>    
        <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>    
        <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>    
        <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>    
        <div style="margin-bottom: 10px; padding-top: 200px; background: skyblue;">Hello</div>     
    </body>
</html>


CSS

/*NEW WAY ON EXAM */

#menu {
  /* Position Sticky holds the 
  navigation bar in place
  when scroll with the mouse
  up and down the webpage */
  position: sticky;
  top: 0;
  width: 100%;
  /*Bullet points will not display */
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* the menu will be visible */
  overflow: hidden;
  background-color: #333;
}

/*Items in Menu and Submenu 
go on left side of screen */
li {
  float: left;
}

/* Main Menu item boxes
are displayed */
li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
 
}

 /*Main Menu light up red
  when hovering over */
li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

 /*Main Menu light up red
  when hovering over */
li.dropdown {
  display: inline;
}

 /*Sub Menu light up red
  when hovering over */
.dropdown-content {
  display: none;  
  background-color: #f9f9f9;
  min-width: 160px;   
}

/* Sub Menu items boxes
are displayed */
.dropdown-content a {
  color:white;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
}

 /*Sub menus light up green 
  when hovering over */
.dropdown-content a:hover {
  background-color: green;
  }

  /*Sub menus are inline display 
  when hovering over */
.dropdown:hover .dropdown-content {
  display: inline;
} 

/*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*/
/*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*/

/* OLD WAY EXAM /* 

/* body, html {
    margin: 0;
    background: #eceff1;
     
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;    
    overflow: hidden;                      
  }
  
  /*Navigation Bar*/
  /* li {    
    float: left;
    border-right: 0.05em solid white;
    background: #01579b;                 
  } */
  
  /*Drop down menu All Submenu and Top Menu*/
  /* li a {        
    display: block;        
    color: white;
    padding: 0em;     
    font-size: auto;
    width: 287px;
    height: 70px;
    line-height: 4em;
    text-decoration: none;
    text-align: center;            
    font-family: 'Oswald', sans-serif;    
  } */

  /*Hover over Navigation Bar*/
  /* li a:hover {
    background: #9ad1e3;    
  } */

  /* li a ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #eceff1;
                         
  } */

  /* li a ul li {    
    float: left;
    vertical-align: auto;                    
  } */

  /*Submenu Drop Down*/
  /* li a ul li a {        
    display: block;
    color: white;
    padding: 0em; 
    width: 300px;
    height: 70px;         
    font-size: auto;
    text-decoration: none;
    text-align: center;    
    font-family: 'Oswald', sans-serif;
    font: bold;        
  } */

  /*Hover over Navigation Bar*/
  /* li ul li a:hover {      
    background: #ace39a;
    color: white;
  } */

   /*This will select ALL ul's that are desc of li's which are
  desc of  ul's */
  /* ul li ul {
    display: none;
  } */

  /* Then ask yourself, what are you 'hovering over?' */

  /* ul li:hover ul {
    display: initial; /* sets the value back to default 
  } */
