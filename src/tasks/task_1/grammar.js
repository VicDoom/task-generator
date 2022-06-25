export const grammar_task_1 = (type) => {
    function grammar_with_type() {
        return {
            v_n: ['S', 'A', 'B', 'C', 'D'],
            v_t: [`number.${type}`],
            start: 'S',
            startLatexSyntax: '$$S$$',
            P: {
                'S': [
                    {
                        rule: '(D) : (D)',
                        value: 1,
                        latexSyntaxRule: '\\frac{D}{D}'
                    }
                ],
                'D': [
                    {
                        rule: 'B',
                        value: 0,
                        latexSyntaxRule: ' B '
                    },
                    {
                        rule: 'B + B',
                        value: 1,
                        latexSyntaxRule: ' B+B '
                    },
                    {
                        rule: 'B - B',
                        value: 1,
                        latexSyntaxRule: ' B-B '
                    }
                ],
                'B': [
                    {
                        rule: 'C',
                        value: 0,
                        latexSyntaxRule: ' C '
                    },
                    {
                        rule: 'B * C',
                        value: 1,
                        latexSyntaxRule: ' B \\cdot C '
                    },
                    {
                        rule: 'B : C',
                        value: 1,
                        latexSyntaxRule: ' \\frac{B}{C} '
                    },
                ],
                'C': [
                    {
                        rule: '(D)',
                        value: 2,
                        latexSyntaxRule: ' D '
                    },
                    {
                        rule: 'A',
                        value: 0,
                        latexSyntaxRule: ' A '
                    }
                ],
                'A': [
                    {
                        rule: `number.${type}`,
                        value: 0,
                        latexSyntaxRule: ` number.${type} `,
                    }
                ]
            }
        }
    }
    return grammar_with_type
}