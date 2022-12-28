// Importamos la función que queremos testar
import { fetchConect } from "../";

// Definimos un bloque describe para dar contexto a los tests
describe("#fetchConect", () => {
  // Definimos un test para comprobar que devuelve "Hola!"
  it("responde OK si la api está bien", () => {
    expect(fetchConect()).toBe(true);
  });
});
