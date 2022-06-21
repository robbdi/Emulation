
var initlang = function () {
    var type = navigator.appName;
    var lang = navigator.language.slice(0, 2);
    var confirmtext="";
    switch (lang) {
        case "fr":
            confirmtext="<span class=\"spancentury\">Je confirme avoir lu et accepté le CLUF et les Conditions d'utilisation.</span>";
            break;
        case "de":
            confirmtext="<span class=\"spancentury\">Ich bestätige, die EULA und die Nutzungsbedingungen gelesen zu haben, und erkläre mich mit ihnen einverstanden.</span>";
            break;
        case "it":
            confirmtext="<span class=\"spancentury\">Confermo di aver letto e accettato l'EULA e i termini di servizio.</span>";
            break;
        case "es":
            confirmtext="<span class=\"spancentury\">Confirmo que he leído y acepto el ALUF y las Condiciones del servicio.</span>";
            break;
        case "ja":
            confirmtext="<span class=\"spansteelfish\">ソフトウェア利用許諾契約と利用規約を読み、これに同意します。</span>";
            break;
        case "zh":
            confirmtext=" <span class=\"spanm1p\">本人确认已阅读并同意本最终用户许可协议及服务条款。</span>";
            break;
        default:
            lang = 'en';
            confirmtext = "<span class=\"spancentury\">I confirm that I have read and consent to the EULA and Terms of Service.</span>";
            break;
    }
    load(lang,confirmtext);
};

function load(lang,confirmtext) {
    var html = '<object width=100% height=100% type="text/html" data="lang/eula_termsofservice/eula_termsofservice_';
    html +=  lang;
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