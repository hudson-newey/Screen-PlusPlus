function navigate(e){
 var key=e.keyCode || e.which;
  if (key==13){
    var searchBar = document.getElementById('search-bar');

    // send request to api
    if (searchBar.value.includes("https://") || searchBar.value.includes("http://")) {
      // if it is a link
      document.getElementById('webAPI').src = "http://" + document.getElementById('serverIP').value
      + "/?" + document.getElementById('APIpassword').value
      + "=\"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe\" " + searchBar.value;
    } else {
      // google search
      document.getElementById('webAPI').src = "http://" + document.getElementById('serverIP').value
      + "/?" + document.getElementById('APIpassword').value
      + "=\"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe\" \"https://www.google.com/search?q="
      + searchBar.value + "\"";
    }

    // clear the search bar
    searchBar.value = "";
  }
}
