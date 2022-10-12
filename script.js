const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ce2c2b0femsh943921cfa13a6fap1a3871jsnfc945cf9d7e6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=India', options)
	.then( (apidata) => {
        return apidata.json();
    })
    .then( (actualData) => {
        console.log(actualData);
        const currentData = actualData.current;
        const locationData = actualData.location;

        document.getElementById('demo').innerHTML =
        `The current weather of ${locationData.name} is as follows: <br>
        Current temperature in celcuis is : ${currentData.feelslike_c} <br>
        Current humidity is : ${currentData.humidity} <br>`;
    })
	.catch(err => console.error(err));
