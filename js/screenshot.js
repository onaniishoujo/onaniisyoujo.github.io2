document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('screenshotLink').addEventListener('click', function() {
        html2canvas(document.body).then(function(canvas) {
            var link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});
