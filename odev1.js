function daireAlaniHesapla(yaricap) {
  yaricap = process.argv[2] * 1;
  const alan = Math.PI * (yaricap * yaricap);
  console.log(alan);
}

daireAlaniHesapla();
