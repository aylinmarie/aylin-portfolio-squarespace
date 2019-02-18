// Disable Parallax Scroll for Homepage
window.parallaxDisabler = function () {
    var collectionId = document.body.id;
    var disableOn = {
        "collection-56df1cd01d07c087e663dc8c": true
    };
    if (disableOn[collectionId]) {
        window.Static.SQUARESPACE_CONTEXT.tweakJSON["tweak-overlay-parallax-enabled"] = false;
    }
};
window.addEventListener("mercury:load", parallaxDisabler);
document.addEventListener("DOMContentLoaded", parallaxDisabler);