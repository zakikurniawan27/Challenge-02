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


const getInfoPenjualan = dataPenjualan =>{
  //start : total keuntungan
  const beli = dataPenjualanNovel.map((dataPenjualanNovel) => dataPenjualanNovel.hargaBeli)
  const totalBeli = beli.reduce((acc,curr) => acc + curr)
  const jual = dataPenjualanNovel.map((dataPenjualanNovel) => dataPenjualanNovel.hargaJual)
  const totalJual = jual.reduce((acc, curr) => acc + curr)
  const totalLaba =  totalJual - totalBeli
  //end : total keuntungan
  //start : format rupiah
  const rupiah = (n) =>{
    const format = n.toString().split('').reverse().join('')
    const pattern = format.match(/\d{1,3}/g)
    const rupiah = 'Rp' + pattern.join('.').split('').reverse().join('') + ',00'
    return rupiah
    }
  // end : format rupiah
  //start : persenlaba
  let persenLaba = (totalLaba/totalBeli)*(100)
  persenLaba = persenLaba.toFixed(2)
  persenLaba = parseInt(persenLaba)
  const format = persenLaba.toString()
  const pattern = format.match(/\d{1,3}/g)
  persenLaba = pattern.join('') + '%'
  //end : persenLaba
  //start : buku + penulis terlaris
  const bukuLaris = dataPenjualanNovel[2].namaProduk
  const penulisTerlaris = dataPenjualanNovel[2].penulis
  // end : buku + penulis terlaris
  const dataNovel ={
    totalKeuntungan : rupiah(totalLaba),
    totalModal : rupiah(totalBeli),
    persentaseKeuntungan : persenLaba,
    produkBukuTerlaris : bukuLaris,
    penulisTerlaris : penulisTerlaris
    }
    return dataNovel
}
console.log(getInfoPenjualan(dataPenjualanNovel))