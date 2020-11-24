console.log('b1');
// 點播按鈕
setTimeout(function () {
    let dibbling_button = document.createElement('paper-button');
    dibbling_button.className = 'ytd-subscribe-button-renderer';
    dibbling_button.id = 'dibbling_extension_button';
    dibbling_button.textContent = '核心點播';
    document.querySelector('#meta-contents #container #top-row').append(dibbling_button);
}, 2000); // check again in a second

// 點播
$.ajax({
    url: 'https://local.dibbling.tw/api/v2/list/extension',
    method: "POST",
    dataType: "json",
    data: {
        'videoId': window.location.href,
    },
}).done(function (d) {
    console.log(d);
}).fail(function (e) {
    console.log(e);
});