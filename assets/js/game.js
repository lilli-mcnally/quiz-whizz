let api = new XMLHttpRequest();

api.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
        document.getElementById("test").innerHTML = this.responseText;
    }
};

api.open("GET", "https://opentdb.com/api.php?amount=50&category=11&type=multiple");

api.send();