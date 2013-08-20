Function.prototype.multiLine = function () {
    for (var b = this.toString().split("\n"), c = null, d = null, a = 0; a < b.length; a++) /\/\*\~/.test(b[a]) ? c = a + 1 : /~\*\//g.test(b[a]) && (d = a);
    return b.slice(c, d).join("\n")
};
