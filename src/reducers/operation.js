import verify from '../algorithm/EntryVerify';

export default function operation(state, action) {
    let newEntry = state.entry
    switch (action.value) {
        case '+':
            newEntry += '+';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history 
                }
            );
        case '-':
            newEntry += '-';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        case '*':
            newEntry += '*';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        case '/':
            newEntry += '/';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        case '(':
            newEntry += '(';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        case ')':
            newEntry += ')';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        case '.':
            newEntry += '.';
            return Object.assign({},
                {
                    entry: verify(newEntry),
                    history: state.history
                }
            );
        default:
            return state;
    }
}