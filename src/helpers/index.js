import dataFunctions from '../db/functions.json'
import dataLimits from '../db/limits.json'
import dataDerivatives from '../db/derivatives.json'
import dataIntegrals from '../db/integrals.json'

const database = {
  functions: { name: 'Funciones', data: dataFunctions },
  limits: { name: 'Límites', data: dataLimits },
  derivatives: { name: 'Derivadas', data: dataDerivatives },
  integrals: { name: 'Integrales', data: dataIntegrals },
}

export const createRoutes = () => {
  const result = {}

  for (const key in database) {
    const category = database[key]
    const categoryRoutes = category.data[key]

    result[key] = {
      name: category.name,
      path: key,
      routes: categoryRoutes.map((route) => ({
        name: route.topic,
        path: route.name,
      })),
    }
  }

  return result
}
