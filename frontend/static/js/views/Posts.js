import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts by Dave!</p>
            <p><a href="https://1drv.ms/p/s!AjQFDnjd2WJCgaRrKpVWRIkEt642Gw?e=zsXc05">Gavel May 17, 1971</a></p>
        `;
    }
}
