searchLinkedin = function(word){
    var linkedinName = word.selectionText;
    chrome.tabs.create({url: "https://www.linkedin.com/search/results/index/?keywords=" + linkedinName + "&origin=GLOBAL_SEARCH_HEADER"});
 };
 searchFacebook = function(word){
    var facebookName = word.selectionText;
    chrome.tabs.create({url: "https://www.facebook.com/search/top/?q=" + facebookName});
 };

chrome.contextMenus.create({
 title: "Search in Linkedin",
 contexts:["selection"],  // ContextType
 onclick: searchLinkedin // A callback function
});
chrome.contextMenus.create({
 title: "Search in Facebook",
 contexts:["selection"],  // ContextType
 onclick: searchFacebook // A callback function
});


// Client ID: 78rmt7dl6855bt
 
// Client Secret: qtloF7agRjGt4Mis