import Card from "react-bootstrap/Card";
import {grammar_task_1} from "../../tasks/task_1/grammar";
import {generate} from "../../tasks";

const Latex = require('react-latex')

export const TaskCard = () => {
    const [exp, expLatex] = generate(grammar_task_1, 6, 'int')
    return (
        <Card style={{width: '30em'}}>
            <Card.Body>
                <Card.Title>Вычислите рациональное выражение</Card.Title>
                <div style={{fontSize: '30px'}}>
                    <Latex>
                        {expLatex}
                    </Latex>
                </div>
            </Card.Body>
        </Card>
    )
}