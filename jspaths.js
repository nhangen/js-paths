$(document).ready(function() {
  var domain = location.host; // gets the root domain (mydomain.com)
	var home = location.pathname.split('/'); // splits the paths by slash and returns an array ('', 'home', 'index.php')
	var ajaxurl = '/' + home[1] + '/ajax-request.php'; // optional to set ajax url
	var page = window.location.href; // gets path suffix (index.php) // ful URL (mydomain.com/home/index.php?key=var)
	var split = page.split('/'); // splits page into array ('http://', '', 'mydomain.com', 'home', 'index.php?key=var')
	var path = split[split.length-1]; // returns last portion of url string ('index.php?key=var')
}
