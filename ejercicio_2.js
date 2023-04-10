const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];
//const precios = [1045.0, 234, 456.98, 456.98, 456.98, 238.98, 3455, 234, 1045.0, 234]

/**
 * 
 * @param precios 
 * @returns 
 */
const obtenerPromedio = (precios) => {
  if(precios.length === 0) return 0;
  const numeroPrecios = precios.length;
  const sumatoria = obtenerSumatoriaTotal(precios);
  return (sumatoria / numeroPrecios);
}

/**
 * 
 * @param precios 
 * @returns 
 */
const obtenerSumatoriaTotal = (precios) => {
  if (precios.length === 0) return 0;
  return precios.reduce((a , b) => (a + b));

}

/**
 * 
 * @param precios 
 * @returns 
 */
const obtenerValorMaximo = (precios) => {
  let valorMaximo = 0;
  precios.forEach((precio) => {
    if(precio > valorMaximo) valorMaximo = precio;
  })
  return valorMaximo;
}

/**
 * 
 * @param precios 
 * @param valorFiltro 
 * @returns 
 */
const obtenerSumatoriaPreciosMenor = (precios, valorFiltro) => {
  precios = precios.filter((precio) => precio < valorFiltro);
  return obtenerSumatoriaTotal(precios);
}

/**
 * 
 * @param {*} precios 
 * @returns 
 */
const obtenerModa = (precios) => {
  const coincidencia = {}
  if(precios.length === 0) return 0;
  precios.forEach((precio) => { 
    if(coincidencia[precio]){
      coincidencia[precio]++
    } else {
      coincidencia[precio] = 1
    }
  });
  let mayorCoincidencia = obtenerValorMaximo(Object.values(coincidencia));
  return Object.keys(coincidencia)
  .filter(key => coincidencia[key] === mayorCoincidencia);
}


console.log(`PROMEDIO: ${obtenerPromedio(precios)}`);
console.log(`VALOR MAXIMO: ${obtenerValorMaximo(precios)}`);
console.log(`SUMATORIA TOTAL: ${obtenerSumatoriaTotal(precios)}`);
console.log(`SUMATORIA PRECIOS MENORES 1500: ${obtenerSumatoriaPreciosMenor(precios, 1500)}`);
console.log(`MODA: ${obtenerModa(precios).join(" | ")}`);