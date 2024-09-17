const names = [
	"Aaran",
 	"Abaan",
 	"Ace",
 	"Adain",
 	"Aedan",
 	"Babatunmise",
 	"Beau",
 	"Beinn",
 	"Ben",
 	"Boab",
 	"Bob",
 	"Bobby",
 	"Bodhan",
 	"Boedyn",
 	"Bogdan",
 	"Bohbi",
 	"Bony",
 	"Bowen",
 	"Caden",
 	"Caethan",
 	"Cahl",
    "Carol",
 	"Cahlum",
 	"Cailean",
 	"Coby",
 	"Codey",
 	"Dagon",
 	"Daithi",
 	"Daksh",
 	"Dale",
 	"Dalong",
 	"Danar",
 	"Dane",
 	"Danial",
 	"Danny",
 	"Dante",
 	"Danyal",
 	"Danyil",
 	"Danys",
 	"Daood",
 	"Dara",
 	"Darach",
 	"Deniss",
 	"Dennan",
 	"Dennin", 	
 	"Efan",
 	"Efe",
 	"Ege",
 	"Ehsan",
 	"Ehsen",
 	"Eiddon",
 	"Enrique",
 	"Enzo",
 	"Eoghain",
 	"Eoghan",
 	"Eoin",
 	"Eonan",
 	"Erdehan",
 	"Eren",
 	"Farhaan",
 	"Fyn",
 	"Fynlay",
 	"Fynn",
 	"Gabriel",
 	"Gareth",
 	"Geordie",
 	"George",
 	"Jon",
 	"Jonny",
 	"Jonothan"
];

const occupations = [
    "Data Scientist",
    "Software Engineer",
    "Banker",
    "Lawyer",
    "Accountant",
    "Writer",
    "Teacher",
    "Programmer"
];

const prices = [
	20,
	30,
	40,
	50,
	60,
	70,
	80,
	90,
	100
];

const listOfoccupations = [
	{
		name: "Alice",
		occupation: "Writer",
		price: 30
	},
	{
		name: "Bob",
		occupation: "Teacher",
		price: 50
	},
	{
		name: "Carol",
		occupation: "Programmer",
		price: 70
	}
];

function addNewName() {
	const name = names[Math.floor(Math.random() * names.length)];
	const occupation = occupations[Math.floor(Math.random() * occupations.length)];
	const price = prices[Math.floor(Math.random() * occupations.length)];
	listOfoccupations.push({ name, occupation, price });
}

function renderOccupations() {
	const freelancerName = document.querySelector(".freelancer-name");
	const nameElements = listOfoccupations.map((element) => {
		const nameElement = document.createElement("li");
		nameElement.append(element.name);
		return nameElement;
	});
	freelancerName.replaceChildren(...nameElements);

	const freelancerOccupation = document.querySelector(".freelancer-occupation");
	const occupationElements = listOfoccupations.map((element) => {
		const occupationElement = document.createElement("li");
		occupationElement.append(element.occupation);
		return occupationElement;
	});
	freelancerOccupation.replaceChildren(...occupationElements);

	const freelancerPrice = document.querySelector(".freelancer-price");
	const priceElements = listOfoccupations.map((element) => {
		const priceElement = document.createElement("li");
		priceElement.append(element.price);
		return priceElement;
	});
	freelancerPrice.replaceChildren(...priceElements);
}



setInterval(() => {
	addNewName();
	renderOccupations();
}, 1000);

renderOccupations();