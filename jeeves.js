// Jeeves is a collection of commonly used functions applicable to any web application
// work in progress by Matt Mehlhope

window.jeeves = {};

// Adds a JS or CSS file to the page
// @STRING url
jeeves.addFileAsset = function(url) {
    
  var d = document;
  if (url != null && typeof url === "string" && jeeves.doesFileExist(url) === false) {
    // get the extension
    var ext = url.substr(url.lastIndexOf('.') + 1);
    // if CSS, add it to the end of the head
    if (ext === "css") {
      var link = d.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
      var s = d.getElementsByTagName('head')[0]; 
        s.appendChild(link);
    }
    // if JS, append it before the close of the body tag
    if (ext === "js") {
      var script = d.createElement('script');
        script.src = url;
      var s = d.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(script, s);
    }
  }
  else
    return;
};

// Removes a JS or CSS file from the page
// @STRING url
jeeves.removeFileAsset = function(url) {

  var d = document;
  if (url != null && typeof url === "string" && jeeves.doesFileExist(url) === true) {
    // get the extension and type
    var ext = url.substr(url.lastIndexOf('.') + 1),
      type = (ext === "css") ? "link" : "script",
      attr = (type === "link") ? "href" : "src",
      elements = document.getElementsByTagName(type),
      i = 0;
    // loop through the elements of that type, find the one, remove it!
    for (i; i < elements.length; i++) {
      var element = elements[i];
      if (element.getAttribute(attr) === url) {  
        element.parentNode.removeChild(element);
        return;
      }
    }
  }
  else
    return;
};

// Check if a CSS or JS file currently exists on a page
// @STRING url
jeeves.doesFileExist = function(url) {
  if ( ($('link[href=\"'+url+'\"]').length === 0) && ($('script[src=\"'+url+'\"]').length === 0) ) {
    return false;
  }
  else
    return true;
};

// Returns the width of the window
jeeves.winWidth = function() {
  return $(window).width();
};

// Returns the height of the window
jeeves.winHeight = function() {
  return $(window).height();
};