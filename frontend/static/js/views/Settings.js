import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com<h1>
            <h2>Under Construction</h2>
            <p>This webpage is Under Construction</p>
        `;
    }
}
