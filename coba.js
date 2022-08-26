const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  console.log('==== data total beli====')
  const beli = dataPenjualanNovel.map((dataPenjualanNovel) => dataPenjualanNovel.hargaBeli)
  console.log(beli)
  const totalBeli = beli.reduce((acc,curr) => acc + curr)
  const rpBeli = (n) =>{
	const format = n.toString().split('').reverse().join('')
	const pattern = format.match(/\d{1,3}/g)
	const rupiah = 'Rp' + pattern.join('.').split('').reverse().join('') + ',00'
	return rupiah
  } 
  console.log(rpBeli(totalBeli))

  console.log('==== data total jual====')
  const jual = dataPenjualanNovel.map((dataPenjualanNovel) => dataPenjualanNovel.hargaJual)
  console.log(jual)
  const totalJual = jual.reduce((acc, curr) => acc + curr)
  console.log(totalJual)

  console.log('==== total keuntungan====')
  const totalLaba =  totalJual - totalBeli
  console.log(totalLaba)

  console.log('==== persen laba====')
  let persenLaba = (totalLaba/totalBeli)*(100)
  persenLaba = persenLaba.toFixed(2)
  console.log(persenLaba)