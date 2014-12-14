var App = (function(window, document, undefined){

    var $ = function(sel) { return document.querySelector(sel);},
        $$ = function(sel) { return document.querySelectorAll(sel);},
        stepsCount = $$('.step').length;


    window.document.addEventListener('DOMContentLoaded', function() {
        App.go();
    }, false);


    window.addEventListener('hashchange', function() {
        App.init.setProgress();
    } , false);

    return {

        go: function () {
            var i, j = this.init;
            for (i in j) {
                j.hasOwnProperty(i) && j[i]();
            }
        },

        init: {
            setDataXAttrs: function () {
                var windowWidth = window.innerWidth;
                for (var i = 1, j = 0; i <= stepsCount; i++, j++) {
                    $('.step:nth-child(' + i + ')').setAttribute('data-x', windowWidth * j);
                }
            },
            setProgress: function () {
                var text = ' of ' + stepsCount;

                return function insertText() {
                    $('.progress').textContent = location.hash.slice(2) + text;
                }();

            },
            impress: function () {
                return impress().init();
            }
        }

    };

}(this, this.document));