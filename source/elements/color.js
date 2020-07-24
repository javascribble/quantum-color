import html from '../templates/color.js';

export class Color extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-color', Color);