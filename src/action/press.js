export default function press(key) {
    if (typeof key === 'number') {
        return {
            type: 'operator',
            value: key
        }
    } else if (key.length === 1) {
        return {
            type: 'operation',
            value: key
        }
    } else {
        return {
            type: 'command',
            value: key
        }
    }
}