import sample from "lodash";

export const store = {
    number: [
        {
            type: 'double',
            method: (min, max) => (Math.random() * (max - min) + min).toFixed(1)
        },
        {
            type: 'int',
            method: (min, max) => Math.floor(Math.random() * (max - min) + min)
        },
        {
            type: 'degree',
            method: (func) => {
                func == 'tg' || func == 'ctg'
                    ? sample([30, 60, 120, 150, 210, 240])
                    : sample([30, 60, 90, 120, 150, 180])
            }
        }
        ]
}