import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Choir");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com<h1>
            <h2>Marshall High School Choir-Record Album</h2>
            <p>Album was produced and cut in 1970 or 1969</p>
            <p><a href="/static/clickerpage33.pdf" target="_blank">Gavel-33-Oct14_1966</a></p>
            <p><a href="/static/clickerpage34.pdf" target="_blank">Gavel-34-Oct28_1966</a></p>
            <p><a href="/static/clickerpage36.pdf" target="_blank">Gavel-36-Dec16_1966</a></p>
            <p><a href="/static/clickerpage37.pdf" target="_blank">Gavel-37-Mar10_1967</a></p>
            <p><a href="/static/clickerpage38.pdf" target="_blank">Gavel-38-Apr14_1967</a></p>
            <p><a href="/static/clickerpage39.pdf" target="_blank">Gavel-39-Apr28_1967</a></p>
            <p><a href="/static/clickerpage40.pdf" target="_blank">Gavel-40-May12_1967</a></p>
            <p><a href="/static/clickerpage41.pdf" target="_blank">Gavel-41-Sep20_1968</a></p>
            <p><a href="/static/clickerpage42.pdf" target="_blank">Gavel-42-Oct04_1968</a></p>
            <p><a href="/static/clickerpage43.pdf" target="_blank">Gavel-43-Oct18_1968</a></p>
            <p><a href="/static/clickerpage44.pdf" target="_blank">Gavel-44-Nov01_1968</a></p>
            <p><a href="/static/clickerpage45.pdf" target="_blank">Gavel-45-Nov15_1968</a></p>
            <p><a href="/static/clickerpage46.pdf" target="_blank">Gavel-46-Dec06_1968</a></p>
            <p><a href="/static/clickerpage47.pdf" target="_blank">Gavel-47-Dec20_1968</a></p>
            <p><a href="/static/clickerpage48.pdf" target="_blank">Gavel-48-Jan17_1969</a></p>
            <p><a href="/static/clickerpage49.pdf" target="_blank">Gavel-49-Feb21_1969</a></p>
            <p><a href="/static/clickerpage50.pdf" target="_blank">Gavel-50-Mar07_1969</a></p>
            <p><a href="/static/clickerpage51.pdf" target="_blank">Gavel-51-Mar21_1969</a></p>
            <p><a href="/static/clickerpage52.pdf" target="_blank">Gavel-52-Apr25_1969</a></p>
            <p><a href="/static/clickerpage53.pdf" target="_blank">Gavel-53-May16_1969</a></p>
            <p><a href="/static/clickerpage54.pdf" target="_blank">Gavel-54-Jun06_1969</a></p>
            <p><a href="/static/clickerpage61.pdf" target="_blank">Gavel-61-Sep19_1969</a></p>
            <p><a href="/static/clickerpage62.pdf" target="_blank">Gavel-62-Oct03_1969</a></p>
            <p><a href="/static/clickerpage63.pdf" target="_blank">Gavel-63-Oct17_1969</a></p>
            <p><a href="/static/clickerpage64.pdf" target="_blank">Gavel-64-Oct31_1969</a></p>
            <p><a href="/static/clickerpage65.pdf" target="_blank">Gavel-65-Nov21_1969</a></p>
            <p><a href="/static/clickerpage66.pdf" target="_blank">Gavel-66-Dec12_1969</a></p>
            <p><a href="/static/clickerpage67.pdf" target="_blank">Gavel-67-Jan16_1970</a></p>
            <p><a href="/static/clickerpage68.pdf" target="_blank">Gavel-68-Feb20_1970</a></p>
            <p><a href="/static/clickerpage69.pdf" target="_blank">Gavel-69-Mar06_1970</a></p>
            <p><a href="/static/clickerpage70.pdf" target="_blank">Gavel-70-Mar20_1970</a></p>
            <p><a href="/static/clickerpage71.pdf" target="_blank">Gavel-71-Apr17_1970</a></p>
            <p><a href="/static/clickerpage72.pdf" target="_blank">Gavel-72-May01_1970</a></p>
            <p><a href="/static/clickerpage73.pdf" target="_blank">Gavel-73-May15_1970</a></p>
            <p><a href="/static/clickerpage74.pdf" target="_blank">Gavel-74-Jun05_1970</a></p>
        `;
    }
}
