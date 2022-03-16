<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animated demo</title>
  <style>
  div {
    background: yellow;
    border: 1px solid #AAA;
    width: 80px;
    height: 80px;
    margin: 0 5px;
    float: left;
  }
  div.colored {
    background: green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<button id="run">Run</button>
 
<div></div>
<div id="mover"></div>
<div></div>
 
<script>
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
 
animateIt();
</script>
 
</body>
</html>