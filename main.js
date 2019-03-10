// list out all the html file names to be included
var demoNames = [
    "001-cube",
    "002-lines",
    "003-rotating-lines",
    "004-dashed-lines",
    "005-text-overlay",
    "006-organization",
    "007-procedural-text",
    "008-movement",
    "009-orbit",
    "010-plane",
    "011-light01-ambient",
    "012-light02-hemi",
    "013-light03-point",
    "014-light04-spot",
    "015-shadows",
    "016-light05-directional",
    "017-more-shapes",
    "018-live-resize",
    "019-dynamic-colors",
    "020-click",
    "021-renderer"
]

var demoList = document.getElementById("demo-list");
var demoFrame = document.getElementById("demo-iframe");
var demoTitle = document.getElementById("demo-title");
var aboutLink = document.getElementById("about-link");
var viewSourceLink = document.getElementById("view-source-link");
var newTabLink = document.getElementById("new-tab-link");

for (demoName of demoNames) {
    // break apart the name on hyphens
    var namePieces = demoName.split("-");
    // start building the name string
    var prettyName = namePieces[0] + ": ";
    // add each word & capitalize the first letter
    for (var i = 1; i < namePieces.length; i++)
    {
        prettyName += namePieces[i].substring(0, 1).toUpperCase() + namePieces[i].substring(1) + " ";
    }

    // create an empty li and a button
    var listElem = document.createElement("li");
    var buttonElem = document.createElement("button");

    // run a function when the button is clicked
    buttonElem.demoName = demoName;
    buttonElem.addEventListener("mouseup", demoButtonPressed);
    
    // put some words in the button
    buttonElem.innerText = prettyName;

    // put the button inside the li, and put the li in the list
    listElem.appendChild(buttonElem);
    demoList.appendChild(listElem);
}

aboutLink.addEventListener("mouseup", aboutLinkPressed);
viewSourceLink.addEventListener("mouseup", viewSourceLinkPressed);
newTabLink.addEventListener("mouseup", newTabLinkPressed);

function demoButtonPressed(event) {
    var fileName = event.target.demoName + ".html";

    // load file into iframe
    demoFrame.setAttribute("src", fileName);

    // set the title
    demoTitle.innerText = event.target.innerText;
}

function aboutLinkPressed(event) {
    // show the about page in the iframe
    demoFrame.setAttribute("src", "about.html");
    
    // reset the title
    demoTitle.innerText = "[no demo selected]";
}

function viewSourceLinkPressed(event) {
    var baseLink = "https://github.com/lizgw/101-three-examples/blob/master/";
    var demoPath = demoFrame.getAttribute("src");

    if (demoPath != "about:blank")
    {
        var fullPath = baseLink + demoPath;
        window.open(fullPath, "_blank");
    }
}

function newTabLinkPressed(event) {
    var currentPath = window.location;
    var demoPath = demoFrame.getAttribute("src");

    if (demoPath != "about:blank")
    {
        var fullPath = currentPath + demoPath;
        window.open(fullPath, "_blank");
    }
}