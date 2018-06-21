function targetLinks() {
  // Get all links on page
  var linkList = document.getElementsByTagName("a");

  // Loop through links
  for (i=0;i<linkList.length;i++) {
    var x = linkList[i].href;
    // Add target blank if link is external
    if (!x.startsWith("/") && !x.startsWith("https://epsilondigital.atlassian.net/")) {
      linkList[i].setAttribute("target","_blank");
    };
  };
};

$(document).ready(function() {
  targetLinks();
  // Look for changes and rerun
  $(document).bind("DOMSubtreeModified", function() {
    targetLinks();
  });
});