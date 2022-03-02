class CardDetailElements extends HTMLElement {
	connectedCallback() {
		const image = this.attributes.image.value;
		const title = this.attributes.title.value;
		const year = this.attributes.year.value;
		const logo_path = this.attributes.logo_path.value;
		const production_companies =
			this.attributes.production_companies.value;
		const genres = this.attributes.genres.value;
		const overview = this.attributes.overview.value;
		this.innerHTML = `
          <div class="  rounded-big my-3">
               <img src="https://image.tmdb.org/t/p/w500/${image}" class="w-100 rounded-big" alt="" id="img-film">
          <div class="mx-2 my-1">
               <h1 class="">${title} (${new Date(year).getFullYear()})</h1>
               <hr class="my-1">
               
               <h3 class=""> ${genres}</h3>
               
               <p class="py-2">${overview}</p>
               <div class="flex align-center my-1 justify-center py-2">
                    <img  src="https://image.tmdb.org/t/p/w500/${logo_path}" class="rounded-pill-small"> 
                    <h3 class="mx-1"> ${production_companies}</h3>
               </div>
          </div>
     </div>`;
	}
}
customElements.define("card-detail-component", CardDetailElements);
