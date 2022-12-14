//你可以复制并使用本代码，不对其进行限制。
"use strict";

function getuuid() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function copytext(str) {
    var save = function(e) {
        e.clipboardData.setData('text/plain', str);
        e.preventDefault();
    }
    document.addEventListener('copy', save);
    document.execCommand("copy");
    mdui.snackbar({
        message: 'UUID复制成功啦o(*￣▽￣*)ブ',
        position: 'top',
    });
}
$('main').show();
$('#get').click(function() {
    $('#uuid').val(getuuid);
    mdui.snackbar({
        message: '已为您生成了新的UUID (～￣▽￣)～',
        position: 'top',
    });
}) 
$('#uuid').click(function() {
    if ($('#uuid').val() == null || $('#uuid').val() == '') {
        mdui.alert('请直接生成UUID而不是编辑输入框', '提示');
        return false;
    }
    if ($('#copy_uuid').prop('checked') == true) {
        copytext($('#uuid').val());
    }
});