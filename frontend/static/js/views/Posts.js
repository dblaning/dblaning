import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>DavidLaning.com - Gavels</h1>
            <h2>Marshall High School Gavels</h2>
            <p>The only known copies of Marshall Gavels from the 60s and early 70s!</p>
            <p><a href="/static/1971ChampionshipRoutine.gif" target="_blank">1971ChampionshipRoutine</a></p
            <p><a href="/static/clickerpage31.pdf" target="_blank">Gavel-31-Sep22_1966</a></p>

            <p><a href="/static/clickerpage33.pdf" target="_blank">Gavel-33-Oct14_1966</a></p>
            <p><a href="/static/clickerpage34.pdf" target="_blank">Gavel-34</a></p>

            <p><a href="/static/clickerpage36.pdf" target="_blank">Gavel-36</a></p>
            <p><a href="/static/clickerpage37.pdf" target="_blank">Gavel-37</a></p>
            <p><a href="/static/clickerpage38.pdf" target="_blank">Gavel-38</a></p>
            <p><a href="/static/clickerpage39.pdf" target="_blank">Gavel-39</a></p>
            <p><a href="/static/clickerpage40.pdf" target="_blank">Gavel-40</a></p>
            <p><a href="/static/clickerpage41.pdf" target="_blank">Gavel-41</a></p>
            <p><a href="/static/clickerpage42.pdf" target="_blank">Gavel-42</a></p>
            <p><a href="/static/clickerpage43.pdf" target="_blank">Gavel-43</a></p>
            <p><a href="/static/clickerpage44.pdf" target="_blank">Gavel-44</a></p>
            <p><a href="/static/clickerpage45.pdf" target="_blank">Gavel-45</a></p>
            <p><a href="/static/clickerpage46.pdf" target="_blank">Gavel-46</a></p>
            <p><a href="/static/clickerpage47.pdf" target="_blank">Gavel-47</a></p>
            <p><a href="/static/clickerpage48.pdf" target="_blank">Gavel-48</a></p>
            <p><a href="/static/clickerpage49.pdf" target="_blank">Gavel-49</a></p>
            <p><a href="/static/clickerpage50.pdf" target="_blank">Gavel-50</a></p>
            <p><a href="/static/clickerpage51.pdf" target="_blank">Gavel-51-Mar21_1969</a></p>
            <p><a href="/static/clickerpage52.pdf" target="_blank">Gavel-52-Apr25_1969</a></p>
            <p><a href="/static/clickerpage53.pdf" target="_blank">Gavel-53</a></p>
            <p><a href="/static/clickerpage54.pdf" target="_blank">Gavel-54</a></p>

            <p><a href="/static/clickerpage61.pdf" target="_blank">Gavel-61</a></p>
            <p><a href="/static/clickerpage62.pdf" target="_blank">Gavel-62</a></p>
            <p><a href="/static/clickerpage63.pdf" target="_blank">Gavel-63</a></p>
            <p><a href="/static/clickerpage64.pdf" target="_blank">Gavel-64</a></p>
            <p><a href="/static/clickerpage65.pdf" target="_blank">Gavel-65</a></p>
            <p><a href="/static/clickerpage66.pdf" target="_blank">Gavel-66</a></p>
            <p><a href="/static/clickerpage67.pdf" target="_blank">Gavel-67</a></p>
            <p><a href="/static/clickerpage68.pdf" target="_blank">Gavel-68</a></p>
            <p><a href="/static/clickerpage69.pdf" target="_blank">Gavel-69</a></p>
            <p><a href="/static/clickerpage70.pdf" target="_blank">Gavel-70-Mar20_1970</a></p>
            <p><a href="/static/clickerpage71.pdf" target="_blank">Gavel-71-Apr19_1970</a></p>
            <p><a href="/static/clickerpage72.pdf" target="_blank">Gavel-72-May01_1970</a></p>
            <p><a href="/static/clickerpage73.pdf" target="_blank">Gavel-73-May15_1970</a></p>
            <p><a href="/static/clickerpage74.pdf" target="_blank">Gavel-74</a></p>

            <p><a href="/static/clickerpage81.pdf" target="_blank">Gavel-81</a></p>
            <p><a href="/static/clickerpage82.pdf" target="_blank">Gavel-82</a></p>
            <p><a href="/static/clickerpage83.pdf" target="_blank">Gavel-83</a></p>
            <p><a href="/static/clickerpage84.pdf" target="_blank">Gavel-84</a></p>
            <p><a href="/static/clickerpage85.pdf" target="_blank">Gavel-85</a></p>
            <p><a href="/static/clickerpage86.pdf" target="_blank">Gavel-86</a></p>
            <p><a href="/static/clickerpage87.pdf" target="_blank">Gavel-87</a></p>
            <p><a href="/static/clickerpage88.pdf" target="_blank">Gavel-88</a></p>
            <p><a href="/static/clickerpage89.pdf" target="_blank">Gavel-89</a></p>
            <p><a href="/static/clickerpage90.pdf" target="_blank">Gavel-90-Mar19_1971</a></p>
            <p><a href="/static/clickerpage91.pdf" target="_blank">Gavel-91</a></p>
            <p><a href="/static/clickerpage92.pdf" target="_blank">Gavel-92</a></p>
            <p><a href="/static/clickerpage93.pdf" target="_blank">Gavel-93-May14_1971</a></p>
            <p><a href="/static/clickerpage94.pdf" target="_blank">Gavel-94-May28_1971</a></p>          `;
    }
}
