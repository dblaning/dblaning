import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com</h1>
            <p><iframe src="/static/2021-08-06_13-19-56-DavidLaningProfileCropped.png" width="800" height="600"></iframe></p>
        `;
    }
}
 
