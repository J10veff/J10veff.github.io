(function () {
    'use strict';
    var key = 'junhao-homepage-theme';
    var modes = ['system', 'light', 'dark'];
    var preference = 'system';
    var system = window.matchMedia('(prefers-color-scheme: dark)');
    try {
        var saved = localStorage.getItem(key);
        if (modes.indexOf(saved) !== -1) preference = saved;
    } catch (_) {}

    function apply() {
        var dark = preference === 'dark' || (preference === 'system' && system.matches);
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
        document.querySelectorAll('.theme-toggle').forEach(function (button) {
            var next = modes[(modes.indexOf(preference) + 1) % modes.length];
            button.textContent = { system: '◐ Auto', light: '☀ Light', dark: '☾ Dark' }[preference];
            button.setAttribute('aria-label', 'Theme: ' + preference + '. Switch to ' + next + ' theme');
            button.title = 'Theme: ' + preference + ' · Click for ' + next;
            button.hidden = false;
        });
    }
    apply();
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.theme-toggle').forEach(function (button) {
            button.addEventListener('click', function () {
                preference = modes[(modes.indexOf(preference) + 1) % modes.length];
                try { localStorage.setItem(key, preference); } catch (_) {}
                apply();
            });
        });
        apply();
    });
    system.addEventListener('change', function () { if (preference === 'system') apply(); });
    window.addEventListener('storage', function (event) {
        if (event.key !== key) return;
        preference = modes.indexOf(event.newValue) !== -1 ? event.newValue : 'system';
        apply();
    });
})();
