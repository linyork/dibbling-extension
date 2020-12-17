function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

getCookies("https://local.dibbling.tw", "dibbling_session", function(dibbling_token) {
    console.log(dibbling_token);
});
