import { Component, template } from '../../references/quantum.js';
import html from '../templates/color.js';

export class Color extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-color', Color);