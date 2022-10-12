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
        //console.log(actualData);
        console.log(actualData.modules[2]);

        const hdNews = actualData.modules[2];
        const stories = actualData.modules[2].stories;
        var articles = '';
        //var articles = JSON.stringify(stories);
        for (let i = 0; i < actualData.modules[2].stories.length; i++) {
            articles += actualData.modules[2].stories[i].title + "\n";
            
        }
        console.log(articles);
        document.getElementById('demo').innerHTML =
        `bloomberg technology news articles for the topic ${hdNews.id} are as follows: <br>
        ${articles}`;
    })
	.catch(err => console.error(err));