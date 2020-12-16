(function() {
    console.log('b1');
    function SuccessMethod(e) {
        if (e['status'] === false) {
            alert(e.msg);
        }
    }

    function FailMethod(e) {
        alert(e);
        console.log(e);
    }

    function dibbling() {
        let promise_post_list = $.ajax({
            url: 'https://local.dibbling.tw/api/v2/list/extension',
            method: "POST",
            dataType: "json",
            data: {
                'videoId': window.location.href,
            },
        });
        promise_post_list.done(SuccessMethod);
        promise_post_list.fail(FailMethod);
    }

    let dibbling_api_token;
    setTimeout(function () {
        let dibbling_button = document.createElement('paper-button');
        dibbling_button.className = 'ytd-subscribe-button-renderer';
        dibbling_button.id = 'dibbling_extension_button';
        dibbling_button.textContent = '核心點播';
        document.querySelector('#meta-contents #container #top-row').append(dibbling_button);
        document.getElementById('dibbling_extension_button').addEventListener("click", dibbling);
    }, 2000);

    console.log('b2');
})();