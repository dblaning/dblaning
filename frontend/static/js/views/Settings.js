import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Choir");
    }

    async getHtml() {
        return `
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
