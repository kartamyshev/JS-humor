var $ = function(sel) {
    return document.querySelector(sel);
};

var $$ = function(sel) {
    return document.querySelectorAll(sel);
};

var App = {

    ProgressInit: (function() {
        var text = ' of ' + $$('.step').length;

        function insertText() {
            $('.progress').textContent = location.hash.slice(2) + text;
        }

        return function () {
            return insertText();
        };
    }()),

    Impress: (function() {
        return function() {
            return impress().init();
        }
    }()),

    init: function() {
        this.ProgressInit();
        this.Impress();
    }
};

App.init();
window.addEventListener('hashchange', App.ProgressInit);