const canvas = document.getElementById('switcher');
    canvas.width = 512;
    canvas.height = 512;
const context = canvas.getContext('2d');

document.querySelector('#canv_small').addEventListener('click', function() { 
    fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json")
        .then(response => response.json())
        .then(json => {
            small = json;
            for (let i = 0; i < small.length; i++) {
                for (let j = 0; j < small.length; j++) {
                    context.fillStyle = '#' + small[i][j];
                    context.fillRect(i*128, j*128, 128, 128);
                }
            };
        });
});

document.querySelector('#canv_medium').addEventListener('click', function() { 
    fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json")
        .then(response => response.json())
        .then(json => {
            medium = json;
            for (let i = 0; i < medium.length; i++) {
                for (let j = 0; j < medium.length; j++) {
                    medium[i][j][3] = medium[i][j][3] * 100 / 255;
                    context.fillStyle = 'rgba' + '(' + medium[i][j].join() + ')';
                    context.fillRect(i*16, j*16, 16, 16);
                }
            }
        });
});

document.querySelector('#canv_icon').addEventListener('click', function() {
    let icon = new Image();
    icon.src = './assets/images/rss_icon.png';
    icon.onload = function() {
        context.drawImage(icon, 0, 0, 512, 512);
    };
});
