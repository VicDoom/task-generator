import { terminal_replacer } from "../helpers/terminal_replacer.js";

// примеры можно представлять в таком виде $$\frac{29}{\frac{69}{43}}$$

export const generate = (grammarWithoutType, complexity, numberType = 'int') => {
    const grammar = grammarWithoutType(numberType)()
    let expression = grammar.start
    let expressionLatex = grammar.startLatexSyntax
    const expReg = new RegExp(grammar.v_n.join('|'))

    while (complexity > 0 || expReg.test(expression)) {
        if (!expReg.test(expression)) {
            break
        }

        const allMatches = expReg.exec(expression)
        let matched = allMatches[Math.floor(Math.random() * allMatches.length)]

        let ruleTargets = grammar.P[matched]
        let chosenRule = undefined
        if (complexity <= 0) {
            chosenRule = ruleTargets.find(item => item.value == 0)
        } else {
            while (true) {
                chosenRule = ruleTargets[Math.floor(Math.random() * ruleTargets.length)]
                if (chosenRule.value <= complexity) {
                    break
                }
            }
        }
        expression = expression.replace(matched, chosenRule.rule)
        expressionLatex = expressionLatex.replace(matched, chosenRule.latexSyntaxRule)
        complexity -= chosenRule.value
    }

    return terminal_replacer(expression, expressionLatex, grammar.v_t)
}