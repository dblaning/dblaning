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
              <a href="/static/2021-08-06_13-19-56-DavidLaningProfileCropped.png" target="_blank" width="797" height="4366" >LinkedIn Profile</a><br>
              
            </p>
            <p>
                <a href="/posts" data-link>View Marshall Gavels</a>.
            </p>
                        <p>
                <a href="/settings" data-link>Listen to Marshall's Choir</a>.
            </p>
            <p><iframe src="/static/2021-08-06_13-19-56-DavidLaningProfileCropped.png" width="200" height="200"></iframe></p>
        `;
    }
}
 
