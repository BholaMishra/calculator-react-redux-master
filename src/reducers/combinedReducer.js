import command from './command';
import operation from './operation';
import operator from './operator';

export default function combinedReducer(state = { entry: '0', history: [] }, action) {
    switch (action.type) {
        case 'command':
            return command(state, action);
        case 'operation':
            return operation(state, action);
        case 'operator':
            return operator(state, action);
        default:
            return state;
    }
}