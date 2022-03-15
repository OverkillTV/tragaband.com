$(document).ready(function() {
    let pageName = "";
    const currentUrl = window.location.href;
    const splitCurrentUrl = currentUrl.split('/');
    if(splitCurrentUrl.length > 0) {
        const currentPage = splitCurrentUrl[splitCurrentUrl.length - 1];
        console.log("currentPage", currentPage);
        const splitPage = currentPage.split('.');
        if(splitPage.length > 0) {
            pageName = splitPage[0];
        }
    }

    $("#selLanguage").off("change").on("change", function() {
        var selectedLan = $(this).val();

        if(selectedLan == "mk") {
            if(pageName != "") {
                if(pageName.indexOf("_en") > -1) {
                    pageName += ".html";
                    pageName = pageName.replace("_en", "");

                    window.location.href = pageName;
                }
            } else {
                window.location.href = "index.html";
            }
        }
        if(selectedLan == "en") {
            if(pageName != "") {
                pageName += "_en.html";

                window.location.href = pageName;
            } else {
                window.location.href = "index_en.html";
            }
        }
    });
});