(function() {
    function SuccessMethod(e) {
        alert(e.msg );
    }

    function FailMethod(e) {
        console.log(e);
    }

    function dibbling() {
        chrome.runtime.sendMessage({ msg: "getDibblingToken" });
    }

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
        if (request.greeting ==='sendToken') {
            let promise_post_list = $.ajax({
                url: 'https://music.core-tech.tw/api/v2/list/extension',
                headers: {
                    'Authorization': 'Bearer ' + request.token,
                },
                method: "POST",
                dataType: "json",
                data: {
                    'videoId': window.location.href,
                },
            });
            promise_post_list.done(SuccessMethod);
            promise_post_list.fail(FailMethod);
        }
    });

    setTimeout(function () {
        let dibbling_button = document.createElement('button');
        dibbling_button.className = 'ytd-subscribe-button-renderer';
        dibbling_button.id = 'dibbling_extension_button';
        dibbling_button.textContent = '核心點播';
        document.querySelector('#meta-contents #container #top-row').append(dibbling_button);
        document.getElementById('dibbling_extension_button').addEventListener("click", dibbling);
    }, 2000);

})();