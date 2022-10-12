// Add loading indicator
const divTag = document.getElementById('demo');
const loadingIndicator = document.createElement('img');
loadingIndicator.src = 'ajax-loader.gif';
loadingIndicator.height = '50';
loadingIndicator.position = 'absolute';
loadingIndicator.top = '100px';

divTag.appendChild(loadingIndicator);
const loaderInfo = document.createElement('p');
loaderInfo.innerHTML = 'Loading curated news just for you';
divTag.appendChild(loaderInfo);

//Styling loading indicator
divTag.style.display = 'block';
divTag.style.width = '100%';
divTag.style.height = '100%';

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
        `bloomberg technology news articles on the trendy topic "${hdNews.id}" are : <br>`;

    document.getElementById('demo').innerHTML = "";

    for (let i = 0; i < stories.length; i++) {

        const newDiv = document.createElement("div");
        newDiv.className = "box-news-story-div";

        const imageArticle = document.createElement("img");
        imageArticle.src = stories[i].image;
        imageArticle.height = '100';
        newDiv.appendChild(imageArticle);

        const title = document.createElement("p");
        title.innerHTML = stories[i].title;
        newDiv.appendChild(title);

        const abstract = document.createElement("p");
        let abstractTemp = "";
        for (let j = 0; j < stories[i].abstract.length; j++) {
            abstractTemp += stories[i].abstract[j] + ". ";
        }

        abstract.innerHTML = abstractTemp;
        newDiv.appendChild(abstract);

        const newsLink = document.createElement("p");
        newsLink.innerHTML = `More details available at: <br> `;
        newDiv.appendChild(newsLink);

        const linkURL = document.createElement("a");
        linkURL.href = stories[i].longURL;
        linkURL.innerHTML = stories[i].longURL + "<br>";
        newDiv.appendChild(linkURL);

        //Styling newDiv
        newDiv.style.padding = "10px";
        newDiv.style.margin = "20px";
        newDiv.style.borderRadius = "15px";
        newDiv.style.fontFamily = "Helvetica";
        newDiv.style.display = "block";
        newDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        newDiv.onmouseover = () => {
            newDiv.style.boxShadow = "0 16px 32px 0 rgba(0, 0, 0, 0.2)";
        };
        newDiv.onmouseout = () => {
            newDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        };
        newDiv.style.maxWidth = "400px";
        newDiv.style.textAlign = "center";
        newDiv.style.marginBottom = "10px";
        newDiv.style.backgroundColor = "lightgray";
         
        //style titleNews
        document.getElementById("titleNews").style.fontFamily = "Helvetica";
        document.getElementById("titleNews").style.display = "block";
        document.getElementById("titleNews").style.margin = "10px";
        document.getElementById("titleNews").textAlign = "center";

        

        document.querySelector('#demo').appendChild(newDiv);
        
    }
    
    
}
