'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('receta', [
      [,
        JSON.stringify({
          "nombre": "Healthy Creamy Pepper Sauce",
          "ingredientes": "2 pimentones, 1 cebolla, 1 taza de leche descremada, 1/2 taza de queso parmesano, 3 cdas de maicena, sal, ajo en polvo, pimenton dulce y hojas de albahaca.",
          "preparacion": "1. Hornea los pimentones y la cebolla por unos 45 minutos o hiérvenos hasta que ablanden.2. Espera a que enfríen y licua los vegetales con la taza de leche y condimentos.3. Agrega el licuado de vegetales y leche en una olla disuelve las cucharadas de maicena en unpoco de leche tibia,agrégalo a la olla y revuelve constantemente hasta que obtengas unaconsistencia espesa. 4. Agrega el queso parmesano, mezcla por última vez y listo ",
          "imagen": "https://github.com/parra1996/healthyByC_frontend/blob/master/src/img/pasta.png?raw=true",
          "createdAt": "2021-05-13 21:08:22",
          "updateddAt": "2021-08-25 01:46:18"
        }),
        JSON.stringify({
          "nombre": "Green Bowl",
          "ingredientes": "50 g de brotes de lechugas80 gr. de habas o edamame 1/2 cebolleta 50g brócoli 1/2 calabacín a tiras 1/2 manzana verde 1/2 aguacat15gr almendras troceadas1 chorrito de limón 1 cucharada de Aceite de Olivasal y pimienta al gusto ",
          "preparacion": "1. Cuece los edamames y el brócoli en una olla con agua por unos 8-10 minutos. Cuando enfríen,quita la cáscara de los edamames.2.Corta la cebolleta en julianas, el aguacate en trozos y la manzana finamente.3.Corta el calabacín en tiras y enróllalas.4.Agrega todos los ingredientes en un bol y añade el aceite de oliva, el zumo de lima, las almendras trituradas y sal y pimienta al gusto",
          "imagen": "http://dummyimage.com/245x100.png/ff4444/ffffff",
          "createdAt": "2021-09-28 17:37:29",
          "updateddAt": "2021-05-14 18:39:43"
        })
      ]
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};