function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            try {
                callback(cookie.value);
            } catch (error) {
                callback('NO');
            }
        }
    });
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "getDibblingToken"){
            getCookies("https://music.core-tech.tw", "dibbling_token", function(dibbling_token) {
                if(dibbling_token === 'NO') {
                    alert('請先登入核心點播系統');
                    window.open('https://music.core-tech.tw/login');
                } else {
                    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, { greeting:'sendToken', token: dibbling_token }, function(response) {
                            // console.log(response.farewell);
                        });
                    });
                }
            });
        }
    }
);