// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//         if (request.greeting == "hello")
//             sendResponse({farewell: "goodbye"});
//     }
// );
(function() {
    console.log('b1');
    let dibbling_api_token;
    // 點播按鈕
    setTimeout(function () {
        let dibbling_button = document.createElement('paper-button');
        dibbling_button.className = 'ytd-subscribe-button-renderer';
        dibbling_button.id = 'dibbling_extension_button';
        dibbling_button.textContent = '核心點播';
        document.querySelector('#meta-contents #container #top-row').append(dibbling_button);
    }, 2000); // check again in a second

    console.log('b2');
})();