import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com - Gavels</h1>
            <h2>Marshall High School Gavels (And Some Other Stuff!)</h2>
            <p>The only known copies of Marshall Gavels from the 60s and early 70s!</p>
            <p><b>Top #5 songs in the USA (March 1971)</b></p>
            <p>The Osmonds - One Bad Apple</p>
            <p>Jackson 5 - Mama's Pearl</p>
            <p>Janis Joplin - Me And Bobby McGee</p>
            <p>The Temptations - Just My Imagination (Running Away With Me)</p>
            <p>Gordon Lightfoot - If You Could Read My Mind</p>
            <br></br>
            <p><b>Top #5 songs in the UK (March 1971)</b></p>
            <p>Mungo Jerry - Baby Jump</p>
            <p>T Rex - Hot Love</p>
            <p>Paul McCartney - Another Day</p>
            <p>Lynn Anderson - Rose Garden</p>
            <p>George Harrison - My Sweet Lord</p>
            <br></br>
            <p><b>Top #5 R&B songs (March 1971)</b></p>
            <p>The Temptations - Just My Imagination (Running Away With Me)</p>
            <p>Jackson 5 - Mama's Pearl</p>
            <p>Wilson Pickett - Don't Let The Green Grass Fool You</p>
            <p>Johnnie Taylor - Jody's Got Your Girl And Gone</p>
            <p>Marvin Gaye - What's Going On</p>
            <br></br>
            <p><a href="/static/1971ChampionshipRoutine.gif" target="_blank">1971MilwaukeeCityChampionshipRoutine-Mar06_1971</a></p>
            <br></br>
            <p><a href="/static/clickerpage31.pdf" target="_blank">Gavel-31-Sep22_1967</a></p>

            <p><a href="/static/clickerpage33.pdf" target="_blank">Gavel-33-Oct14_1966</a></p>
            <p><a href="/static/clickerpage34.pdf" target="_blank">Gavel-34-DateToBeEntered</a></p>

            <p><a href="/static/clickerpage36.pdf" target="_blank">Gavel-35-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage36.pdf" target="_blank">Gavel-36-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage37.pdf" target="_blank">Gavel-37-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage38.pdf" target="_blank">Gavel-38-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage39.pdf" target="_blank">Gavel-39-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage40.pdf" target="_blank">Gavel-40-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage41.pdf" target="_blank">Gavel-41-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage42.pdf" target="_blank">Gavel-42-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage43.pdf" target="_blank">Gavel-43-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage44.pdf" target="_blank">Gavel-44-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage45.pdf" target="_blank">Gavel-45-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage46.pdf" target="_blank">Gavel-46-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage47.pdf" target="_blank">Gavel-47-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage48.pdf" target="_blank">Gavel-48-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage49.pdf" target="_blank">Gavel-49-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage50.pdf" target="_blank">Gavel-50-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage51.pdf" target="_blank">Gavel-51-Mar21_1969</a></p>
            <p><a href="/static/clickerpage52.pdf" target="_blank">Gavel-52-Apr25_1969</a></p>
            <p><a href="/static/clickerpage53.pdf" target="_blank">Gavel-53-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage54.pdf" target="_blank">Gavel-54-DateToBeEntered</a></p>

            <p><a href="/static/clickerpage61.pdf" target="_blank">Gavel-61-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage62.pdf" target="_blank">Gavel-62-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage63.pdf" target="_blank">Gavel-63-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage64.pdf" target="_blank">Gavel-64-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage65.pdf" target="_blank">Gavel-65-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage66.pdf" target="_blank">Gavel-66-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage67.pdf" target="_blank">Gavel-67-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage68.pdf" target="_blank">Gavel-68-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage69.pdf" target="_blank">Gavel-69-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage70.pdf" target="_blank">Gavel-70-Mar20_1970</a></p>
            <p><a href="/static/clickerpage71.pdf" target="_blank">Gavel-71-Apr19_1970</a></p>
            <p><a href="/static/clickerpage72.pdf" target="_blank">Gavel-72-May01_1970</a></p>
            <p><a href="/static/clickerpage73.pdf" target="_blank">Gavel-73-May15_1970</a></p>
            <p><a href="/static/clickerpage74.pdf" target="_blank">Gavel-74-DateToBeEntered</a></p>

            <p><a href="/static/clickerpage81.pdf" target="_blank">Gavel-81-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage82.pdf" target="_blank">Gavel-82-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage83.pdf" target="_blank">Gavel-83-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage84.pdf" target="_blank">Gavel-84-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage85.pdf" target="_blank">Gavel-85-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage86.pdf" target="_blank">Gavel-86-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage87.pdf" target="_blank">Gavel-87-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage88.pdf" target="_blank">Gavel-88-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage89.pdf" target="_blank">Gavel-89-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage90.pdf" target="_blank">Gavel-90-Mar19_1971</a></p>
            <p><a href="/static/clickerpage91.pdf" target="_blank">Gavel-91-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage92.pdf" target="_blank">Gavel-92-DateToBeEntered</a></p>
            <p><a href="/static/clickerpage93.pdf" target="_blank">Gavel-93-May14_1971</a></p>
            <p><a href="/static/clickerpage94.pdf" target="_blank">Gavel-94-May28_1971</a></p>          `;
    }
}
