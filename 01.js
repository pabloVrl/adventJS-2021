function contarOvejas(ovejas) {
	// aquí tu magia
	ovejas = ovejas.filter(oveja => (
		oveja.color === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a')
	))

	return ovejas
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

console.log(contarOvejas(ovejas))