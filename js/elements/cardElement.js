class CardElement extends HTMLElement {
	connectedCallback() {
		const id = this.attributes.id.value;
		const image = this.attributes.image.value;
		const title = this.attributes.title.value;
		const year = this.attributes.year.value;
		this.innerHTML = `<div class="m-1 cursor-pointer" onclick="navigateToDetail(${id})">
                         <div class=" inline-block">
                              <div class="">
                                   <img src="https://image.tmdb.org/t/p/w500/${image}" class="w-small-image rounded-big" alt="">
                              </div>
                              <div class=" py-1 px-1 rounded-big bg-black text-cream">
                                   <h5>${
								title.length > 15
									? title.slice(0, 15) + "..."
									: title
							} <br> (${new Date(
			year
		).getFullYear()})</h5>
          
                              </div>
                         </div>
                    </div>`;
	}
}
customElements.define("card-component", CardElement);
