function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });
}

async function check() {

    const ipAPI = '//api.ipify.org?format=json';
    const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip);

    const {value: easter_egg} = await Swal.fire({
        title: 'Enter key word: ',
        input: 'text',
        width: 600,
        padding: '3em',
        backdrop: `rgba(0,0,123,0.4) url("img/nyan-cat.gif") left top no-repeat`,
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    });

    if (easter_egg == "van") {
        fuck();
    }
}



function fuck(){
    var count = 0;
    document.getElementById('horde').classList.toggle('open');
    document.addEventListener('keydown', function(event) {
        count++;
        if (event.code == 'KeyZ' && (count % 2 == 0)) {
            $('.first_img').addClass('hide_img');
            $('.second_img').removeClass('hide_img');
        }
        if (event.code == 'KeyZ' && (count % 2 !== 0)){
            $('.first_img').removeClass('hide_img');
            $('.second_img').addClass('hide_img');
        }
    });
}

runOnKeys(
    () =>check(),
    "KeyQ", "AltLeft"
);
