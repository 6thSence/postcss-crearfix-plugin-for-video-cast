import * as postcss from 'postcss';

export default postcss.plugin('postcss-reverse-props', (options = {}) => {
    return css => {

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
