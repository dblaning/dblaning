import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Scrapbook");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com - Scrapbook#1</h1>
            <h2>John Marshall High School Gavels (And Some Other Stuff!)</h2>
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
            <p><a href="/static/clickerpage81.pdf" target="_blank">Gavel-81-Sep25_1970</a></p>
            <p><a href="/static/clickerpage82.pdf" target="_blank">Gavel-82-Oct02_1970</a></p>
            <p><a href="/static/clickerpage83.pdf" target="_blank">Gavel-83-Oct23_1970</a></p>
            <p><a href="/static/clickerpage84.pdf" target="_blank">Gavel-84-Nov13_1970</a></p>
            <p><a href="/static/clickerpage85.pdf" target="_blank">Gavel-85-Dec04_1970</a></p>
            <p><a href="/static/clickerpage86.pdf" target="_blank">Gavel-86-Dec18_1970</a></p>
            <p><a href="/static/clickerpage87.pdf" target="_blank">Gavel-87-Jan29_1971</a></p>
            <p><a href="/static/clickerpage88.pdf" target="_blank">Gavel-88-Feb19_1971</a></p>
            <p><a href="/static/clickerpage89.pdf" target="_blank">Gavel-89-Mar05_1971</a></p>
            <p><a href="/static/clickerpage90.pdf" target="_blank">Gavel-90-Mar19_1971</a></p>
            <p><a href="/static/clickerpage91.pdf" target="_blank">Gavel-91-Apr02_1971</a></p>
            <p><a href="/static/clickerpage92.pdf" target="_blank">Gavel-92-Apr30_1971</a></p>
            <p><a href="/static/clickerpage93.pdf" target="_blank">Gavel-93-May14_1971</a></p>
            <p><a href="/static/clickerpage94.pdf" target="_blank">Gavel-94-May28_1971</a></p>
             <br></br>
             <h1>DavidLaning.com - Scrapbook#2<h1>
            <h2>John Marshall High School Choir-Record Album</h2>
            <p>Album was produced and cut in 1970 or 1969</p>
            <p><a href="/static/01XV-01%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track01</a></p>
            <p><a href="/static/01XV-02%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track02</a></p>
            <p><a href="/static/01XV-03%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track03</a></p>
            <p><a href="/static/01XV-04%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track04</a></p>
            <p><a href="/static/01XV-05%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track05</a></p>
            <p><a href="/static/01XV-06%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track06</a></p>
            <p><a href="/static/01XV-07%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track07</a></p>
            <p><a href="/static/01XV-08%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track08</a></p>
            <p><a href="/static/01XV-09%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track09</a></p>
            <p><a href="/static/01XV-10%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track10</a></p>
            <p><a href="/static/01XV-11%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track11</a></p>
            <p><a href="/static/01XV-12%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track12</a></p>
            <p><a href="/static/01XV-13%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track13</a></p>
            <p><a href="/static/01XV-14%20-%20Here%20We%20Come%20A%20Caroling.mp3" target="_blank">Track14</a></p>
            <p><a href="/static/IMG_2137.jpg" target="_blank">AlbumCover01</a></p>
            <p><a href="/static/IMG_2138.jpg" target="_blank">AlbumCover02</a></p>
            <p><a href="/static/IMG_2139.jpg" target="_blank">AlbumCover03</a></p>
            <p><a href="/static/IMG_2140.jpg" target="_blank">AlbumCover04</a></p>
            <p><a href="/static/IMG_2142.jpg" target="_blank">AlbumCover05</a></p>
            <p><a href="/static/IMG_2143.jpg" target="_blank">AlbumCover06</a></p>
            <p><a href="/static/IMG_2144.jpg" target="_blank">AlbumCover07</a></p>
            <p><a href="/static/IMG_2145.jpg" target="_blank">AlbumCover08</a></p>
            <p><a href="/static/IMG_2146.jpg" target="_blank">AlbumCover09</a></p>
            <p><a href="/static/IMG_2147.jpg" target="_blank">AlbumCover10</a></p>
            <p><a href="/static/IMG_2148.jpg" target="_blank">AlbumCover11</a></p>
            <p><a href="/static/IMG_2149.jpg" target="_blank">AlbumCover12</a></p>
            <p><a href="/static/IMG_2151.jpg" target="_blank">AlbumCover13</a></p>
            <p><a href="/static/IMG_2152.jpg" target="_blank">AlbumCover14</a></p>
            <p><a href="/static/IMG_2153.jpg" target="_blank">AlbumCover15</a></p>
            <p><a href="/static/David.B.Laning.PhD.MBA.gif" target="_blank">Thank you for visiting</a></p>
                    `;
    }
}
