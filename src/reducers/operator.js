import verify from '../algorithm/EntryVerify';

export default function operator(state, action) {
    const newEntry = state.entry + action.value.toString(10);

    return Object.assign({},
        { entry: verify(newEntry) },
        { history: state.history }
    );
}