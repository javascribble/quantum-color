import html from '../templates/color.js';

const { Component, template, define } = quantum;

export class Color extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-color', Color);