import entryTransArray from '../algorithm/EntryTransArray';
import ShuntingYard from '../algorithm/ShuntingYard';
import RPN from '../algorithm/ReversePolishNotation';
import verify from '../algorithm/EntryVerify';

export default function operation(state, action) {
    switch (action.value) {
        case 'ALL_CLEAR':
            return Object.assign({},
                { entry: '0' },
                { history: state.history }
            );
        case 'DELETE':
            return Object.assign({},
                { entry: verify(state.entry.slice(0, state.entry.length - 1)) },
                { history: state.history }
            );
        case 'COMPUTE':
            const ans = verify(RPN(ShuntingYard(entryTransArray(state.entry))));
            
            return Object.assign({},
                { entry: ans },
                { history: [ans].concat(state.history) }
            );
        default:
            return state;
    }
}