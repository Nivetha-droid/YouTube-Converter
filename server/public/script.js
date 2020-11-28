let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');

function myFunction() {
    if (!URLinput.value) {
        alert('Enter YouTube URL');
    } else {
        if (select.value == 'mp3') {
            downloadMp3(URLinput.value);
        } else if (select.value == 'mp4') {
            downloadMp4(URLinput.value);
        }
    }
};

async function downloadMp3(url) {
    const res = await fetch(`${window.location.href}getvideo?url=${url}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${window.location.href}getvideo?url=${url}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert("Invalid url");
    }
}

async function downloadMp4(url) {
    const res = await fetch(`${window.location.href}getvideo?url=${url}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${window.location.href}getvideo?url=${url}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert('Invalid url');
    }
}