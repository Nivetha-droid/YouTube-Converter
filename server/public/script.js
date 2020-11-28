let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');

function myFunction() {
    const url = URLinput.value;
    URLinput.value = '';
    if (!url) {
        alert('Enter YouTube URL');
    } else {
        if (select.value == 'mp3') {
            downloadMp3(url);
        } else if (select.value == 'mp4') {
            downloadMp4(url);
        }
    }
};

async function downloadMp3(url) {
    const res = await fetch(`${window.location.href}downloadmp3?url=${url}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${window.location.href}downloadmp3?url=${url}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert("Invalid url");
    }
}

async function downloadMp4(url) {
    const res = await fetch(`${window.location.href}downloadmp4?url=${url}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${window.location.href}downloadmp4?url=${url}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert('Invalid url');
    }
}