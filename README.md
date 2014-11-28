InkDrops
========
The Ink-Drop style interaction that is added in the material design by Google using jQuery and CSS.

The new Design concept MaterialJs launched with the new Google Android 5.0 had a beautiful Ink Drop fading animation for every click. And the same was implemented in the Polymer project as well. So this is just a small breakdown for the same using jQuery and CSS.
###[Demo Here](http://akhilarjun.github.io/InkDrops/demo.html)
##How To :
First include the _inkdrop.css_ ,_ink.js file_ and _jQuery_ to your page
```html
<link rel='stylesheet' type='text/css' href='css/inkdrops.css'></link>
<script type="text/javascript" src='js/ink.js'></script>
<script type="text/javascript" src='js/jquery.min.js'></script>
```
Then all you have to do is add a class '_inkMe_' to the containing element that needs the ink drop effect. And Voila! when you click the element you could see the ink drop dripping<br>
```html
<a class='inkMe'>Regular Link</a>
```
