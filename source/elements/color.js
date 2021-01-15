import html from '../templates/color.js';

export class Color extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-color', Color);