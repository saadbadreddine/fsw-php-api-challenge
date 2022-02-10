window.onload = () => {
	document.getElementById('xy-form').addEventListener('submit', (e) => {
		e.preventDefault();
		let x = document.getElementById('x-input').value;
		let y = document.getElementById('y-input').value;
		fetchXY(x, y).then((result) => (document.getElementById('xy-output').innerText = result.result));
	});

	document.getElementById('palindrome-form').addEventListener('submit', (e) => {
		e.preventDefault();
		let palindrome = document.getElementById('palindrome-input').value;
		isPalindrome(palindrome).then(
			(result) => (document.getElementById('palindrome-output').innerText = result.result)
		);
	});

	document.getElementById('removeblanks-form').addEventListener('submit', (e) => {
		e.preventDefault();
		let string = document.getElementById('removeblanks-input').value;
		rmBlanks(string).then((result) => (document.getElementById('rmblanks-output').innerText = result.result));
	});

	document.getElementById('password-form').addEventListener('submit', (e) => {
		e.preventDefault();
		let pass = document.getElementById('password-input').value;
		shaPass(pass).then(
			(result) =>
				(document.getElementById('password-output').innerText = `${result.result}, hash: ${result.hash}`)
		);
	});

	const fetchXY = async (x, y) => {
		const response = await fetch(`xy_api.php?x=${x}&y=${y}`);
		const data = await response.json();
		return data;
	};

	//fetchXY(5, 10).then((result) => console.log(result));

	const isPalindrome = async (string) => {
		const response = await fetch(`palindrome_api.php?string=${string}`);
		const data = await response.json();
		return data;
	};

	//isPalindrome('saadaas').then((data) => console.log(data));

	const rmBlanks = async (string) => {
		const response = await fetch(`rmblank_api.php?string=${string}`);
		const data = await response.json();
		return data;
	};

	//rmBlank('jsakdnkasaskldkla ajkdsaskd').then((data) => console.log(data));

	const shaPass = async (password) => {
		const response = await fetch(`hash_api.php?password=${password}`);
		const data = await response.json();
		return data;
	};

	//shaPass('password123').then((data) => console.log(data));
};
