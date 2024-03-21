function openTab(event, clickedTab) {
    // hides everything
    var tabContent = document.getElementsByClassName("tabcontent")
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // clears active tabs
    var tabLinks = document.getElementsByClassName("tablinks");
    for(var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    // sets new active tab & shows it
    document.getElementById(clickedTab).style.display = "block";
    event.currentTarget.className += "active";
}