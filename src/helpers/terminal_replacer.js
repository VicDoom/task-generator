import { store } from "../store.js";

export const terminal_replacer = (expression, expressionLatex, v_t) => {
    for (let terminal of v_t) {
        const path = terminal.split('.')
        const terminalRegExp = new RegExp(terminal)
        const method = path.length == 1 ? store.path[0].method : store[path[0]].find(item => item.type === path[1]).method
        console.log(terminal)
        while (terminalRegExp.test(expression)) {
            console.log(expression)
            if (terminal === 'number.int') {
                const generatedNumber = method(1, 100)
                expression = expression.replace('number.int', generatedNumber)
                expressionLatex = expressionLatex.replace('number.int', generatedNumber)
            } else if (terminal === 'number.double') {
                const generatedNumber = method(1.0, 100.0)
                expression = expression.replace('number.double', generatedNumber)
                expressionLatex = expressionLatex.replace('number.double', generatedNumber)
            }
        }
    }
    return [expression, expressionLatex]
}