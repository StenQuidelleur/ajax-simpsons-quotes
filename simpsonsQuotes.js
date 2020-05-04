function fetchSimpsonQuotesJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
  
        // Build a block of HTML
        const simpsonsQuotesHtml = `
          <p><strong>${quotes[0].character}</strong></p>
          <img src="${quotes[0].image}" />
          <p>${quotes[0].quote}</p>
        `;
        document.querySelector('#simpsons-quotes').innerHTML = simpsonsQuotesHtml;
      });
  }
  
  fetchSimpsonQuotesJSON();