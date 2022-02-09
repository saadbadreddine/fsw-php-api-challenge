window.onload = () => {
	const fetchXY = async (x, y) => {
		const response = await fetch(`xy_api.php?x=${x}&y=${y}`);
		const result = await response.json();
		return result;
	};

	fetchXY(5, 10).then((result) => {
		console.log(result);
	});
};
