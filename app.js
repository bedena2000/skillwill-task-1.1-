const clicker = document.querySelector(".modal-clicker");
const closer = document.querySelector(".close-modal");
const modal = document.querySelector(".modal-wrapper");
const modalBackground = document.querySelector(".modal-background");

function changeModal() {
	const classesOfModal = Array.from(modal.classList);
	const classesOfModalBackground = Array.from(modalBackground.classList);
	if(classesOfModal.includes("hidden") && classesOfModalBackground.includes("hidden")) {
		modal.classList.remove("hidden");
		modalBackground.classList.remove("hidden");
	} else {
		modal.classList.add("hidden");
		modalBackground.classList.add("hidden");
	};
};

function setClickerOnButton(ourButtonElement) {
	ourButtonElement.addEventListener('click', function(event) {
		changeModal();
	});
};

setClickerOnButton(clicker);
setClickerOnButton(closer);
setClickerOnButton(modalBackground);