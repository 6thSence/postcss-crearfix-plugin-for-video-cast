var postcss = require('postcss');

module.exports = postcss.plugin('postcss-clearfix', function (opts) {
    opts = opts || {};

    return function (css, result) {

        css.walkDecls(decl => {
            if (decl.prop === 'clearfix') {
                const rule = postcss.rule({ selector: decl.parent.selector + ':after' });
                rule.append({
                        type: 'decl',
                        prop: 'clear',
                        value: 'both',
                        raws: {
                            before: "\n\t",
                            between: ": "
                        }
                    },
                    {
                        type: 'decl',
                        prop: 'display',
                        value: 'block',
                        raws: {
                            before: "\n\t",
                            between: ": "
                        }
                    },
                    {
                        type: 'decl',
                        prop: 'content',
                        value: '""',
                        raws: {
                            before: "\n\t",
                            between: ": "
                        }
                    });

                decl.root().insertAfter(decl.parent, rule)
                rule.source = decl.parent.source;
                decl.remove();
            }
    });

    };
});
