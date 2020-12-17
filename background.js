console.log('g1');
let dibbling_api_token;

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

// test
getCookies("https://local.dibbling.tw", "dibbling_token", function(dibbling_token) {
    dibbling_api_token = dibbling_token;
    console.log(dibbling_api_token);

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[1].id, {greeting: "hello"}, function(response) {
    //         console.log(response.farewell);
    //     });
    // });
});
console.log('g2');
