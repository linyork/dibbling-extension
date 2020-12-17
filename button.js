(function() {
    function SuccessMethod(e) {
        if (e['status'] === false) {
            alert(e.msg);
        }
        console.log(e);
    }

    function FailMethod(e) {
        alert(e);
        console.log(e);
    }

    function dibbling() {
        let promise_post_list = $.ajax({
            url: 'https://local.dibbling.tw/api/v2/list/extension',
            headers: {
                'Authorization': 'Bearer {token}',
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

    setTimeout(function () {
        let dibbling_button = document.createElement('paper-button');
        dibbling_button.className = 'ytd-subscribe-button-renderer';
        dibbling_button.id = 'dibbling_extension_button';
        dibbling_button.textContent = '核心點播';
        document.querySelector('#meta-contents #container #top-row').append(dibbling_button);
        document.getElementById('dibbling_extension_button').addEventListener("click", dibbling);
    }, 2000);
})();