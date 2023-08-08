function getData(cb) {
    let api = new XMLHttpRequest();
    let data;

    api.open("GET", "https://opentdb.com/api.php?amount=50&category=11&type=multiple");
    api.send();

    api.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

}

function accessApi(data) {
    console.log(data);
}

getData(accessApi);