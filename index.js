// ===== State =====
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

const freelancersArr = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
let averagePrice = 0;

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];    
    const price = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    freelancersArr.push({ name, occupation, price });
}

function getAverage() {
    const total = freelancersArr.reduce((total, freelancer) => total + freelancer.price,0);
    averagePrice = total/freelancersArr.length;
}

// ===== Render =====
function renderFreelancers() {
    const table = document.querySelector("tbody");
    const freelancers = freelancersArr.map((freelancer) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.price}</td>
            <td>${freelancer.occupation}</td>
        `;
        return tr;
    });
    table.replaceChildren(...freelancers);
}

function renderAveragePrice() {
    const avg = document.querySelector(".avg");
    avg.textContent = `$${averagePrice.toFixed(2)}`;
}

// ===== Script =====

function render() {
    getAverage();
    renderFreelancers();
    renderAveragePrice();
}
render();

const freelancer = setInterval(() => {
    addFreelancer();
    getAverage();
    render();
}, 1000);