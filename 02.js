function listGifts(letter) {
	// ¡Tú puedes!
	const cartasArr = letter.split(" ").filter(regalo => regalo[0] !== '_')

	let regalos = {}
	cartasArr.forEach(regalo => {
		if(regalo !== "") {
			if (regalos[regalo] === undefined) {
				regalos = { ...regalos, [regalo]: 1 }
			} else {
				regalos[regalo] += 1
			}
		}
	})
	return regalos
}

const carta = 'bici coche balón _playstation bici coche peluche'
console.log(listGifts(carta))