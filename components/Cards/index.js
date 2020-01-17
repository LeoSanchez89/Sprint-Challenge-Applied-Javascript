// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(object) {
	const card = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgContainer = document.createElement("div");
	const authorImg = document.createElement("img");
	const authorName = document.createElement("span");

	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(authorImg);
	author.appendChild(authorName);

	card.classList.add("card");
	headline.classList.add("headline");
	author.classList.add("author");
	imgContainer.classList.add("img-container");

	headline.textContent = `${object.headline}`;
	authorImg.src = object.authorPhoto;
	authorName.textContent = `By ${object.authorName}`;

	return card;
}

const cardsContainer = document.querySelector(".cards-container");

axios
	.get("https://lambda-times-backend.herokuapp.com/articles")

	.then(response => {
		console.log(response.data.articles);
		response.data.articles.javascript.forEach(item => {
			const newCard = createCard(item);
			cardsContainer.appendChild(newCard);
		});
		return response;
	})

	.then(response => {
		// console.log(response.data.articles);
		response.data.articles.bootstrap.forEach(item => {
			const newCard1 = createCard(item);
			cardsContainer.appendChild(newCard1);
		});
		return response;
	})

	.then(response => {
		// console.log(response.data.articles);
		response.data.articles.technology.forEach(item => {
			const newCard2 = createCard(item);
			cardsContainer.appendChild(newCard2);
		});
		return response;
	})

	.then(response => {
		// console.log(response.data.articles);
		response.data.articles.jquery.forEach(item => {
			const newCard3 = createCard(item);
			cardsContainer.appendChild(newCard3);
		});
		return response;
	})

	.then(response => {
		// console.log(response.data.articles);
		response.data.articles.node.forEach(item => {
			const newCard4 = createCard(item);
			cardsContainer.appendChild(newCard4);
		});
		return response;
	})

	.catch(error => {
		console.log("the data was not returned", error);
	});
