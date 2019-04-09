// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
bulletTrain.identify("development_user_123456");

bulletTrain.init({
    environmentID:"n3CUGDLNdGo3kSSLJAuGC3",
    onChange: (oldFlags, params) => { // Occurs whenever flags are changed

        const { isFromServer } = params; // Determines if the update came from the server or local cached storage

        // Check for a feature
        if (bulletTrain.hasFeature("disabled-button")) {
            myCoolFeature();
        }

        // Or, use the value of a feature
        const bannerSize = bulletTrain.getValue("disabled-button");

        // Check whether value has changed
        const bannerSizeOld = oldFlags["disabled-button"] && oldFlags["disabled-button"].value;
        if (bannerSize !== bannerSizeOld) {
            $(".aCacher").hide();
        }
    }
});