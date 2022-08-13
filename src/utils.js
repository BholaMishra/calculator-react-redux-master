export function $(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelector(selector);
}

export function $$(selector, el) {
     if (!el) {
        el = document.body;
    }
     return el.querySelectorAll(selector);
}

export function getElement(tag, id) {
    return new Promise((resolve, reject) => {
        const el = document.createElement(tag);
        if (id) {
            el.id = id;
        }
        resolve(el);
    });
}