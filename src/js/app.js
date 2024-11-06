import orderByProps from './sort';

export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};

console.log(orderByProps(obj, [
    'name', 'level'
]));

export const newObj = {
    health: 10,
    name: 'мечник',
    level: 2,
    defence: 40,
    attack: 80
};

console.log(orderByProps(newObj, [ 'attack' ]));