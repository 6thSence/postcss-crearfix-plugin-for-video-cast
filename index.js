var postcss = require('postcss');

module.exports = postcss.plugin('postcss-clearfix', (opts) => {
    opts = opts || {};

    return function (css, result) {

        css.walkDecls(decl => {
            if (decl.prop === 'clearfix') {
                const parent = decl.parent;
                const rule = postcss.rule({ selector: decl.parent.selector + ':after' });
                rule.append({
                        type: 'decl',
                        prop: 'clear',
                        value: 'both',
                        source: parent.source,
                        raws: {
                            before: "\n\t",
                            between: ": "
                        }
                    },
                    {
                        type: 'decl',
                        prop: 'display',
                        value: 'block',
                        source: parent.source,
                        raws: {
                            before: "\n\t",
                            between: ": "
                        }
                    },
                    {
                        type: 'decl',
                        prop: 'content',
                        value: '""',
                        source: parent.source,
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
