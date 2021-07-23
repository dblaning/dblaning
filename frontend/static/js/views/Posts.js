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
            <p><a href="https://1drv.ms/p/s!AjQFDnjd2WJCgaRrKpVWRIkEt642Gw?e=zsXc05" target="_blank">Gavel May 17, 1971</a></p>
            <p><a href="../clickerpage42.pdf" target="_blank">Gavel-date?-ONE_up</a></p>
            <p><a href="../../clickerpage42.pdf" target="_blank">Gavel-date?-TWO_up</a></p>
            <p><a href="../../../clickerpage42.pdf" target="_blank">Gavel-date?-THREE_up</a></p>
                  
        `;
    }
}
