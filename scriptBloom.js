const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ce2c2b0femsh943921cfa13a6fap1a3871jsnfc945cf9d7e6',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};

fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=technology', options)
	.then( (apidata) => {
        return apidata.json();
    })
	.then( (actualData) => {
        console.log(actualData.modules[2]);

        const hdNews = actualData.modules[2];
        const stories = actualData.modules[2].stories;
        displayArticle(hdNews, stories);
        
    })
	.catch(err => console.error(err));

function displayArticle(hdNews, stories){

    document.getElementById('demo').innerHTML =
        `bloomberg technology news articles for the topic ${hdNews.id} are as follows: <br>`;

    for (let i = 0; i < stories.length; i++) {

        const imageArticle = document.createElement("img");
        imageArticle.src = stories[i].image;
        imageArticle.height = '60';
        document.querySelector('#demo').appendChild(imageArticle);

        const title = document.createElement("p");
        title.innerHTML = stories[i].title;
        document.querySelector('#demo').appendChild(title);

        const abstract = document.createElement("p");
        let abstractTemp = "";
        for (let j = 0; j < stories[i].abstract.length; j++) {
            abstractTemp += stories[i].abstract[j] + ". ";
        }

        abstract.innerHTML = abstractTemp;
        document.querySelector('#demo').appendChild(abstract);

        const newsLink = document.createElement("p");
        newsLink.innerHTML = `More details available at: <br> `;
        document.querySelector('#demo').appendChild(newsLink);

        const linkURL = document.createElement("a");
        linkURL.href = stories[i].longURL;
        linkURL.innerHTML = stories[i].longURL + "<br>";
        document.querySelector('#demo').appendChild(linkURL);
        
    }
    
    
}