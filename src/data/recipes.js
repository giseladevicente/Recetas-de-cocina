import espaguetisBolognesa from '../assets/imgs/Espaguetis_Boloñesa.jpg';
import caesarSalad from '../assets/imgs/Caesar_salad.jpg';
import pancakes from '../assets/imgs/Panqueques.jpg';
import cheeseBread from '../assets/imgs/Panecillos-de-queso.jpg';

export const recipes = [
  {
    id: 1,
    title: 'Espaguetis a la Boloñesa',
    description: 'Una deliciosa receta de espaguetis con salsa boloñesa.',
    image: espaguetisBolognesa,
    ingredients:  [
      '2 bolsas de espagueti (680 gramos)',
      '450 gramos de carne molida',
      '1 cebolla',
      '4 jitomates',
      '3 dientes de ajo',
      '⅓ taza de crema',
      '½ taza de vino tinto',
      '1 cucharada de soya',
      '¾ taza de zanahoria rayada',
      '2 cucharadas de aceite de oliva',
      '1 cucharada de orégano y albahaca',
      'Sal',
      'Agua',
      'Pimienta'
    ],
    instructions: [
      'Corta el jitomate y la cebolla en cubitos. Reserva.', 
      'En un sartén a fuego medio-alto pon a calentar aceite. Después, sofríe la cebolla, la zanahoria y el ajo.',  
      'Añade carne molida y mezcla con el resto de los ingredientes.',
      'Sazona con albahaca y orégano. Salpimienta al gusto.',
      'Agrega vino tinto, jitomates y soya.',
      'Suma la crema y una taza de agua a la preparación. Mezclalo todo.',
      'Mientras preparas la salsa, pon a hervir agua caliente con un poco de sal. Una vez que esté hirviendo, coloca la pasta. Mantenla allí hasta que esté al dente.',
      'Sirve la pasta y báñala con la salsa.',
      '¡Disfruta!',
    ],
  },

  {
    id: 2,
    title: 'Ensalada César',
    description: 'Receta de ensalada césar con pollo y aderezo cremoso.',
    image: caesarSalad,
    ingredients:  [
      '1 yema de huevo',
      '3 anchoas',
      '0.5 cup queso parmesano rallado',
      '0.5 tsp mostaza',
      '1 chorrito de salsa inglesa',
      '1 limón en jugo',
      '1 cup aceite vegetal',
      '1 pechuga de pollo sin hueso ni piel',
      '2 tbsp aceite de oliva',
      '4 corazones de lechuga romana deshojados',
      '1.5 cup crutones de pan',
    ],
    instructions: [
      'Licua la yema de huevo con las anchoas. Baja la velocidad e integra poco a poco el parmesano, la mostaza, la salsa inglesa y el jugo de limón.',
      'Agrega poco a poco el aceite para crear una emulsión (salpimienta si es necesario).',
      'Sazona el pollo y ásalo en una plancha caliente con el aceite de oliva hasta que notes que se dora. Cuando esté cocida, córtala en rebanadas gruesas. Reserva.',
      'Mezcla la lechuga con los crutones y el pollo, agrega la cantidad de aderezo deseado y sirve.',
    ],
  },

  {
    id: 3,
    title: 'Panqueques',
    description: 'Tortitas americanas, hotcakes, pancakes, panquecas o panqueques son una delicia que se puede comer con dulce o con salado a cualquier hora del día.',
    image: pancakes,
    ingredients:  [
      '1 taza de harina leudante o harina de repostería',
      '1 huevo',
      '1 chorro de aceite de oliva',
      ' ¾ taza de leche (180 mililitros)',
      ' 1 cucharadita de mantequilla',
      '1 chorro de miel',
    ],
    instructions: [
      'Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).',
      'Para terminar de hacer la masa de los panqueques caseros, agrega un chorrito de aceite y mezcla bien. Verás que el aceite hace que se terminen de disolver los grumos de harina y quede una masa lisa y homogénea.',
      'Para hacer los panqueques, calienta una sartén a fuego medio-bajo con un poquito de aceite o mantequilla. Cuando la sartén esté caliente, añade una cucharada de mezcla y déjala al fuego hasta que empiecen a salir burbujas en la superficie, entonces dale la vuelta y cocina por el otro lado.',
      'Para servir la receta de panqueques súper fáciles de hacer, añade un poquito de mantequilla y miel y a disfrutar. Si quieres comerlos con algo salado, puedes servirlos con bacon y huevos fritos o un revuelto con jamón.',
    ],
  },

  {
    id: 4,
    title: 'Pan de queso',
    description: 'Sencillo paso a paso de pancitos con harina leudante con sabor a queso, también similares a los scones de queso.',
    image: cheeseBread,
    ingredients:  [
      '300 gramos de harina leudante',
      '50 gramos de manteca',
      '125 mililitros de leche',
      '50 gramos de queso rallado',
      '1 cucharada postre de nuez moscada',
      '1 pizca de pimienta',
    ],
    instructions: [
      'Dispón la harina sobre una mesada limpia y haz una corona para agregar allí los condimentos, es decir, la nuez moscada y pimienta, los cuales son optativos y, si te gustan, el queso rallado y la leche.',
      'Comienza a unir los ingredientes y añade la manteca en cubos, integra y amasa unos 5 minutos. Verás que poco a poco se formará un bollo liso y bien hidratado por la materia grasa. Si necesita más líquido, agrega de forma progresiva la leche que habías reservado.',
      'Cuando tengas tu masa lista, divídela en bollitos del tamaño que deseas que tenga tu pan de queso con harina leudante. En este caso, bollitos de unos 25 gramos.',
      'Lleva el pan con harina leudante a una asadera apta para horno previamente engrasada. Cocínalos en el horno precalentado a temperatura máxima, es decir, 200-220 ºC por unos 15 minutos o hasta que la superficie se quiebre ligeramente y la base se dore.',
      'Pasado ese tiempo, sirve y disfruta tus pancitos de queso con harina leudante. ¡A comer!',
    ],
  }
];









