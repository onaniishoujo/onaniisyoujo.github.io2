document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('copy', function(e) {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            const span = document.createElement('span');
            span.textContent = selectedText;
            span.style.color = '#66ccff'; /* 设置复制的文字颜色 */
            span.style.backgroundColor = 'transparent'; /* 设置复制的文字背景为透明 */
            document.body.appendChild(span);
            setTimeout(function() {
                span.remove();
            }, 0);
        }
    });
});
