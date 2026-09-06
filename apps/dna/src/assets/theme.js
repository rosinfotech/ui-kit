(function () {
    var KEY = "dna-theme";
    var root = document.documentElement;
    var mq = window.matchMedia("(prefers-color-scheme: light)");

    function apply(theme) {
        root.dataset.theme = theme;
    }

    function stored() {
        try {
            var v = localStorage.getItem(KEY);
            return v === "light" || v === "dark" ? v : null;
        } catch {
            return null;
        }
    }

    var initial = stored();
    apply(initial || (mq.matches ? "light" : "dark"));

    if (mq.addEventListener) {
        mq.addEventListener("change", () => {
            if (!stored()) {
                apply(mq.matches ? "light" : "dark");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        var btn = document.getElementById("theme-toggle");
        if (!btn) return;
        btn.addEventListener("click", () => {
            var next = root.dataset.theme === "dark" ? "light" : "dark";
            apply(next);
            try {
                localStorage.setItem(KEY, next);
            } catch {}
        });
    });
})();
