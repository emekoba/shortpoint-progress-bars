const progressBars = document.getElementsByClassName("progress");

const changeProgress = (progress) => {
	for (let i = 0; i <= progress; i++) {
		Array.from(progressBars).map((each_bar) => {
			each_bar.textContent = `${i}%`;
			each_bar.style.width = `${i}%`;
		});
	}
};

function finish() {
	changeProgress(100);
}

changeProgress(50);
