var App = (function(){

    var $ = function(sel) { return document.querySelector(sel);},
        $$ = function(sel) { return document.querySelectorAll(sel);},
        stepsCount = $$('.step').length;

    return {

        setProgress: function () {
            var text = ' of ' + stepsCount;

            return function insertText() {
                $('.progress').textContent = location.hash.slice(2) + text;
            }();

        },

        impress: function () {
            return impress().init();
        },

        setDataXAttrs: function () {
            var windowWidth = window.innerWidth;
            for (var i = 1, j = 0; i <= stepsCount; i++, j++) {
                $('.step:nth-child(' + i + ')').setAttribute('data-x', windowWidth * j);
            }
        },

        init: function () {
            this.setDataXAttrs();
            this.setProgress();
            this.impress();
        }
    };

}());

App.init();
window.addEventListener('hashchange', App.setProgress, false);