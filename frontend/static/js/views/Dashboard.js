import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com - Home</h1>
            <p>
              This website is under development.  Please enjoy reading the Marshall High School Gavels while this site is being developed.<br>
              Best regards<br>
              Dave Laning<br>
              <a href="https://www.linkedin.com/in/davidblaning-scd-pe-mba/" target="_blank">LinkedIn Profile</a>
              
            </p>
            <p>
                <a href="/posts" data-link>View Marshall Gavels</a>.
            </p>
                        <p>
                <a href="/posts" data-link>Listen to Marshall's Choir</a>.
            </p>
        `;
    }
}
