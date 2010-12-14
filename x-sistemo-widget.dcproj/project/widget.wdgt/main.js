/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
    dashcode.setupParts();
    document.getElementById('version_text').style.visibility = "hidden";
    checkForUpdates();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}

/*
 * begin the actual x-sistemo-widget code
 */

var current_version_major = 1;
var current_version_minor = 1;

function unikodoClickHandler(event)
{
    var text = document.getElementById('the_text').value;
    
	text = text.replace(/c[Xx]([^Xx]|$)/g, "ĉ$1");
	text = text.replace(/g[Xx]([^Xx]|$)/g, "ĝ$1");
	text = text.replace(/h[Xx]([^Xx]|$)/g, "ĥ$1");
	text = text.replace(/j[Xx]([^Xx]|$)/g, "ĵ$1");
	text = text.replace(/s[Xx]([^Xx]|$)/g, "ŝ$1");
	text = text.replace(/u[Xx]([^Xx]|$)/g, "ŭ$1");
	
	text = text.replace(/C[Xx]([^Xx]|$)/g, "Ĉ$1");
	text = text.replace(/G[Xx]([^Xx]|$)/g, "Ĝ$1");
	text = text.replace(/H[Xx]([^Xx]|$)/g, "Ĥ$1");
	text = text.replace(/J[Xx]([^Xx]|$)/g, "Ĵ$1");
	text = text.replace(/S[Xx]([^Xx]|$)/g, "Ŝ$1");
	text = text.replace(/U[Xx]([^Xx]|$)/g, "Ŭ$1");
	    
    document.getElementById('the_text').value = text;
    
    return;
}


function xsistemoClickHandler(event)
{
    var text = document.getElementById('the_text').value;
        
	text = text.replace(/ĉ/g, "cx");
	text = text.replace(/ĝ/g, "gx");
	text = text.replace(/ĥ/g, "hx");
	text = text.replace(/ĵ/g, "jx");
	text = text.replace(/ŝ/g, "sx");
	text = text.replace(/ŭ/g, "ux");
	
	text = text.replace(/Ĉ/g, "Cx");
	text = text.replace(/Ĝ/g, "Gx");
	text = text.replace(/Ĥ/g, "Hx");
	text = text.replace(/Ĵ/g, "Jx");
	text = text.replace(/Ŝ/g, "Sx");
	text = text.replace(/Ŭ/g, "Ux");
	    
    document.getElementById('the_text').value = text;
    
    return;
}

function visitWebsite(event)
{
    widget.openURL("https://github.com/bdesham/x-sistemo-widget");
	return;
}

function checkForUpdates()
{
    var request = new XMLHttpRequest();
	url = "https://github.com/bdesham/x-sistemo-widget/raw/master/version.js";

	request.onreadystatechange = function()
    {
		if (request.readyState != 4)
            return;
        
        var data = JSON.parse(request.responseText);
    
        var major = data.latest_version_major;
        var minor = data.latest_version_minor;
        
        if ((major > current_version_major) ||
                ((major == current_version_major) && (minor > current_version_minor))) {
            //alert('New version available: ' + major + '.' + minor);
            document.getElementById('version_text').style.visibility = "visible";
        } else {
            //alert('We have the newest version: ' + major + '.' + minor);
            document.getElementById('version_text').style.visibility = "hidden";
        }
	};

	request.open('GET', url, true);
	request.send(); 

    return;
}
