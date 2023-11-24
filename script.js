//your code here!
const container = document.getElementById("infi-list");

let count = 1;
for(; count <= 10; count++){
	const listItems = document.createElement("li");
	listItems.innerText = `Items ${count}`;
	container.appendChild(listItems);
}

container.addEventListener(('scroll'), () => {
	const scrollHeight = container.scrollTop;
	const maxScrollHeight = container.scrollHeight - container.clientHeight;

	if(maxScrollHeight - scrollHeight <= 5){
		addTwoMoreItems();
	}
});

function addTwoMoreItems() {
	const listItems1 = document.createElement("li");
	listItems1.innerText = `Items ${count++}`;
	
	const listItems2 = document.createElement("li");
	listItems2.innerText = `Items ${count++}`;

	container.append(listItems1,listItems2);
}