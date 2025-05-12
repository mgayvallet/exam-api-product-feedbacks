const search = document.querySelector("#search");

async function afficheProduct() {
	const res = await fetch(`http://51.38.232.174:3002/V1/feedbacks`);
	const data = await res.json();
	console.log(data);
	const feedbackWrapper = document.querySelector(".feedback-wrapper");
	for (let i = 0; i < data.length; i++) {
		const feedback = document.createElement("div");
		feedback.classList.add("feedback-item");
		feedback.innerHTML = `
            <div class="feedback-item-votes">
				<svg viewBox="0 0 24 24">
					<path
						d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
						style="fill: currentcolor"
					></path>
				</svg>
				<span class="text-regular-3">${data[i].votes}</span>
			</div>
			<div class="feedback-item-text">
				<h3 class="heading-3">${data[i].title}</h3>
				<p>${data[i].description}.</p>
				<div class="feedback-chip text-regular-3">${data[i].category}</div>
			</div>
			<div class="feedback-item-comments">
				<svg class="grey-lighten-1-text" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"
					></path>
				</svg>
				<span class="bold">${data[i].comments}</span>
			</div>
        `;
		feedbackWrapper.appendChild(feedback);
	}
}

search.addEventListener("click", async (e) => {
	e.preventDefault();
	const filterPage = document.querySelector("#filter-page");
	const filterSort = document.querySelector("#filter-sort");
	let url = "http://51.38.232.174:3002/V1/feedbacks";

	if (filterSort.value == "upvotes") {
		url = url + "?sort=upvotes";
	}

	const res = await fetch(url);
	const data = await res.json();
	console.log(data);

	const feedbackWrapper = document.querySelector(".feedback-wrapper");
	feedbackWrapper.innerHTML = "";
	for (let i = 0; i < filterPage.value; i++) {
		const feedback = document.createElement("div");
		feedback.classList.add("feedback-item");
		feedback.innerHTML = `
            <div class="feedback-item-votes">
                <svg viewBox="0 0 24 24">
                    <path
                        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                        style="fill: currentcolor"
                    ></path>
                </svg>
                <span class="text-regular-3">${data[i].votes}</span>
            </div>
            <div class="feedback-item-text">
                <h3 class="heading-3">${data[i].title}</h3>
                <p>${data[i].description}.</p>
                <div class="feedback-chip text-regular-3">${data[i].category}</div>
            </div>
            <div class="feedback-item-comments">
        `;
		feedbackWrapper.appendChild(feedback);
	}
});

window.addEventListener("DOMContentLoaded", () => {
	afficheProduct();
});
