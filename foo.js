window.onload = () => {
	const fetchXY = async (x, y) => {
		const response = await fetch(`xy_api.php?x=${x}&y=${y}`);
		const data = await response.json();
		return data;
	};

	fetchXY(5, 10).then((result) => console.log(result));

	const isPalindrome = async (string) => {
		const response = await fetch(`palindrome_api.php?string=${string}`);
		const data = await response.json();
		return data;
	};

	isPalindrome('saadaas').then((data) => console.log(data));

	const rmBlank = async (string) => {
		const response = await fetch(`rmblank_api.php?string=${string}`);
		const data = await response.json();
		return data;
	};

	rmBlank('jsakdnkasaskldkla ajkdsaskd').then((data) => console.log(data));

	const shaPass = async (password) => {
		const response = await fetch(`hash_api.php?password=${password}`);
		const data = await response.json();
		return data;
	};

	shaPass('password123').then((data) => console.log(data));
};
