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
getCookies("https://local.dibbling.tw/dibbling", "dibbling_session", function(dibbling_session) {
    dibbling_api_token = dibbling_session
    console.log(dibbling_api_token);
});

console.log('g2');
