
var initlang = function () {
    var type = navigator.appName;
    var lang = navigator.language.slice(0, 2);
    var confirmtext = "";
    switch (lang) {
        case "fr":
            confirmtext = "<span class=\"spancentury\">J'accepte la Politique de confidentialité.</span>";
            break;
        case "de":
            confirmtext = "<span class=\"spancentury\">Ich stimme der Datenschutzerklärung zu.</span>";
            break;
        case "it":
            confirmtext = "<span class=\"spancentury\">Accetto la Politica sulla privacy.</span>";
            break;
        case "es":
            confirmtext = "<span class=\"spancentury\">Acepto la Política de privacidad.</span>";
            break;
        case "ja":
            confirmtext = "<span class=\"spansteelfish\">プライバシーポリシーに同意します。</span>";
            break;
        case "zh":
            confirmtext = " <span class=\"spanm1p\">我接受此隐私政策。</span>";
            break;
        default:
            lang = 'en';
            confirmtext = "<span class=\"spancentury\">I agree to the Privacy Policy.</span>";
            break;
    }
    load(lang, confirmtext);
};

function load(lang,confirmtext) {
    var html = '<object width=100% height=100% type="text/html" data="lang/privacypolicy/privacypolicy_';
    html += lang;
    html += '.html" ></object>';
    document.getElementById("content").innerHTML = html;
    document.getElementById("confirmtext").innerHTML = confirmtext;
}

initlang();




var BUTTON_CONFIRM_INDEX = 1;

var update = function () {
    var pad;
    if (navigator.getGamepads && navigator.getGamepads()[0]) {
        pad = navigator.getGamepads()[0];

        if (pad.buttons[BUTTON_CONFIRM_INDEX].pressed) {
            if (window.nx && window.nx.playSystemSe) {
                window.nx.playSystemSe('SeFooterDecideBack');
            }
            close();
            return;
        }
    }
    requestAnimationFrame(update);
};

// invalidate A/B/X/Y/L/R
if (window.nx && window.nx.footer && window.nx.footer.unsetAssign) {
    ['A', 'B', 'X', 'Y', 'L', 'R'].forEach(function (aKey) {
        window.nx.footer.unsetAssign(aKey);
    });
}

// invalidate Up/Down/Left/Right
window.addEventListener('keydown', function (event) {
    event.preventDefault();
});


update();