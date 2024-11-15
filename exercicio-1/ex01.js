const selectCores = document.getElementById("cores");

selectCores.addEventListener("change", function () {
    const cor = selectCores.value;

    switch (cor) {
        case "value":
            document.body.style.backgroundColor = "white"
            break;
        case "laranja":
            document.body.style.backgroundColor = "#ffac81";
            break;
        case "rosa":
            document.body.style.backgroundColor = "#ff928b";
            break;
        case "nude":
            document.body.style.backgroundColor = "#fec3a6";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "#efe9ae";
            break;
        case "verde":
            document.body.style.backgroundColor = "#cdeac0";
            break;
    }
});
