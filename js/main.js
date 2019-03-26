const home={
	template: `
		<div class="container-fluid">
			<h1>Welcome to the San Jose City Animal Shelter</h1>
			<div class="row">
				<div class="col-12 text-center">
				<img src="img/cats.jpg" alt="cats" class="float">
				<p>Help us connect humans with furry friends! Our list of available animals, 
				friendly and helpful adoption staff, and many adoption centers between San Francisco, Milpitas, 
				and San Jose will make your adoption process easy-breezy.</p>
				<router-link to="/adopt">Click here to browse our adoptable pets</router-link>
				<p>Note: Animals come into our care daily and this page is updated continuously as animals are adopted 
				and new ones become available. If you're actively looking for a new pet to adopt, please refresh your 
				search often! Visiting our locations is also an excellent way to see animals that have come in as they're made available.
				</p>
				</div>
			</div>
		</div>
		`
}

const adopt={
	template: `
		<div class="container-fluid">
			<h1>Adoptable Pets</h1>
			<div class="row">
				<div class="col-4">
					<router-link to="/cats">
						<h2>Cats</h2>
						<img src="img/cats.jpg" alt="cats">
					</router-link>
				</div>
				<div class="col-4">
					<router-link to="/dogs">
						<h2>Dogs</h2>
						<img src="img/dogs.jpg" alt="dogs">
					</router-link>
				</div>
				<div class="col-4">
					<router-link to="/smalls">
						<h2>Small Animals</h2>
						<img src="img/smalls.jpg" alt="small animals">
					</router-link>
				</div>
			</div>
		</div>
	`
}
const cats={
	template: `
		<div>
		<router-link to="/adopt">Back</router-link>
			<h1>Adoptable Cats</h1>
		</div>
	`
}

const dogs={
	template: `
		<div>
		<router-link to="/adopt">Back</router-link>
			<h1>Adoptable Dogs</h1>
		</div>
	`
}

const smalls={
	template: `
		<div>
		<router-link to="/adopt">Back</router-link>
		<h1>Other pets</h1>
		</div>
	`
}


const router = new VueRouter ({
	routes:[
		{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/adopt',
			component: adopt
		},
		{
			path: '/cats',
			component: cats
		},
		{
			path: '/dogs',
			component: dogs
		},
		{
			path: '/smalls',
			component: smalls
		}
	]
})

var routeTest = new Vue({
	router,
	el: '#app',
	data: {
	},
	methods: {
	}
}).$mount('#app')