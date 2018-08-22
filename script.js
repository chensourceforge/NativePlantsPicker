var
  SUN = 0, PARTIAL_SHADE = 1, SHADE = 2, DRY = 0, MOIST = 1, WET = 2, CLAY = 0,
  LOAM = 1, SAND = 2, BUTTERFLIES = 0, BIRDS = 1, HUMMINGBIRDS = 2, BEES = 3,
  WHITE = 'white', ORANGE = 'orange', PURPLE = 'purple', GREEN = 'green',
  YELLOW = 'yellow', PINK = 'pink', BLUE = 'blue', RED = 'red';
var trees = [
{
	name: 'American Beech',
	latin: 'Fagus grandifolia',
	light: [PARTIAL_SHADE, SHADE],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [1800, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Balsam Fir',
	latin: 'Abies balsamea',
	light: [SHADE, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [1500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: false
},
{
	name: 'Balsam Poplar',
	latin: 'Populus balsamifera',
	light: [SUN],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: true,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Basswood',
	latin: 'Tilia americana',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [3500, 3500],
	colour: [],
	months: [],
	salt: true,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Bitternut Hickory',
	latin: 'Carya cordiformis',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Black Cherry',
	latin: 'Prunus serotina',
	light: [SUN],
	moisture: [DRY, MOIST],
	soil: [SAND, LOAM],
	height: [2200, 2200],
	colour: [WHITE],
	months: [5, 6],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Black Spruce',
	latin: 'Picea mariana',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST, WET],
	soil: [SAND, CLAY],
	height: [1200, 2000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [BUTTERFLIES],
	deciduous: false
},
{
	name: 'Black Walnut',
	latin: 'Juglans nigra',
	light: [SUN],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [3000, 3000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Blue Beech',
	latin: 'Carpinus caroliniana',
	light: [PARTIAL_SHADE, SHADE],
	moisture: [MOIST],
	soil: [CLAY, LOAM],
	height: [400, 900],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [BUTTERFLIES],
	deciduous: true
},
{
	name: 'Bur Oak',
	latin: 'Quercus macrocarpa',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST, WET],
	soil: [CLAY, LOAM],
	height: [1500, 1500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Chokecherry',
	latin: 'Prunus virginiana',
	light: [SUN],
	moisture: [MOIST, WET],
	soil: [LOAM],
	height: [900, 900],
	colour: [WHITE],
	months: [5, 6],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Eastern Cottonwood',
	latin: 'Populus deltoides',
	light: [SUN],
	moisture: [MOIST, WET],
	soil: [SAND, LOAM],
	height: [3000, 3000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Eastern Hemlock',
	latin: 'Tsuga canadensis',
	light: [PARTIAL_SHADE, SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [3000, 3000],
	colour: [],
	months: [],
	salt: false,
	drought: true,
	wildlife: [],
	deciduous: false
},
{
	name: 'Hackberry',
	latin: 'Celtis occidentalis',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST, WET],
	soil: [CLAY, LOAM],
	height: [1500, 2700],
	colour: [],
	months: [],
	salt: true,
	drought: true,
	wildlife: [BUTTERFLIES],
	deciduous: true
},
{
	name: 'Ironwood',
	latin: 'Ostrya virginiana',
	light: [SHADE],
	moisture: [DRY, MOIST],
	soil: [CLAY, LOAM],
	height: [1200, 1200],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Largetooth Aspen',
	latin: 'Populus grandidentata',
	light: [SUN],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [2000, 2000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Pin Cherry',
	latin: 'Prunus pensylvanica',
	light: [SUN],
	moisture: [DRY],
	soil: [SAND],
	height: [1200, 1200],
	colour: [WHITE],
	months: [5, 6],
	salt: false,
	drought: true,
	wildlife: [],
	deciduous: true
},
{
	name: 'Red Maple',
	latin: 'Acer rubrum',
	light: [SUN],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Red Oak',
	latin: 'Quercus rubra',
	light: [SUN],
	moisture: [DRY, MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: true,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Red Pine',
	latin: 'Pinus resinosa',
	light: [SUN],
	moisture: [DRY, MOIST],
	soil: [SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: false
},
{
	name: 'Shagbark Hickory',
	latin: 'Carya ovata',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST, WET],
	soil: [CLAY, LOAM],
	height: [1900, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Silver Maple',
	latin: 'Acer saccharinum',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST, WET],
	soil: [CLAY, SAND, LOAM],
	height: [3500, 3500],
	colour: [],
	months: [],
	salt: true,
	drought: true,
	wildlife: [],
	deciduous: true
},
{
	name: 'Speckled Alder',
	latin: 'Alnus rugosa',
	light: [SUN],
	moisture: [MOIST, WET],
	soil: [CLAY, SAND, LOAM],
	height: [2000, 2000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Sugar Maple',
	latin: 'Acer saccharum',
	light: [PARTIAL_SHADE, SHADE],
	moisture: [DRY, MOIST],
	soil: [CLAY, LOAM],
	height: [3500, 3500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'Tamarack',
	latin: 'Larix laricina',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: false
},
{
	name: 'Trembling Aspen',
	latin: 'Populus tremuloides',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST, WET],
	soil: [CLAY, SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: true,
	drought: true,
	wildlife: [BUTTERFLIES],
	deciduous: true
},
{
	name: 'White Birch',
	latin: 'Betula papyrifera',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: true,
	drought: false,
	wildlife: [],
	deciduous: true
},
{
	name: 'White Cedar',
	latin: 'Thuja occidentalis',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [1500, 1500],
	colour: [],
	months: [],
	salt: true,
	drought: true,
	wildlife: [],
	deciduous: false
},
{
	name: 'White Elm',
	latin: 'Ulmus americana',
	light: [SUN],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [3500, 3500],
	colour: [],
	months: [],
	salt: false,
	drought: true,
	wildlife: [],
	deciduous: true
},
{
	name: 'White Oak',
	latin: 'Quercus alba',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [3500, 3500],
	colour: [],
	months: [],
	salt: true,
	drought: false,
	wildlife: [BUTTERFLIES],
	deciduous: true
},
{
	name: 'White Pine',
	latin: 'Pinus strobus',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [3000, 3000],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [],
	deciduous: false
},
{
	name: 'White Spruce',
	latin: 'Picea glauca',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [2500, 2500],
	colour: [],
	months: [],
	salt: true,
	drought: true,
	wildlife: [],
	deciduous: false
},
{
	name: 'Yellow Birch',
	latin: 'Betula alleghaniensis',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST, WET],
	soil: [CLAY, SAND, LOAM],
	height: [1500, 2500],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: [HUMMINGBIRDS],
	deciduous: true
}
];
var groundcover = [
{
	name: 'Barren Strawberry',
	latin: 'Waldsteinia fragarioides',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [LOAM, SAND],
	height: [15, 15],
	colour: [YELLOW],
	months: [4, 6],
	salt: false,
	drought: false,
	wildlife: []
},
{
	name: 'Bunchberry',
	latin: 'Cornus canadensis ',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [CLAY, SAND, LOAM],
	height: [7, 20],
	colour: [WHITE],
	months: [5, 6],
	salt: false,
	drought: false,
	wildlife: []
},
{
	name: 'Canada Wild Rye',
	latin: 'Elymus canadensis',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST],
	soil: [CLAY, SAND],
	height: [90, 180],
	colour: [GREEN],
	months: [7, 8],
	salt: false,
	drought: false,
	wildlife: [HUMMINGBIRDS]
},
{
	name: 'Irish Moss',
	latin: 'Sagina subulata',
	light: [PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, CLAY],
	height: [1, 2],
	colour: [WHITE],
	months: [7, 9],
	salt: false,
	drought: false,
	wildlife: []
},
{
	name: 'Little Bluestem',
	latin: 'Schizachyrium scoparium',
	light: [SUN],
	moisture: [DRY, MOIST],
	soil: [SAND, LOAM],
	height: [45, 135],
	colour: [WHITE],
	months: [8, 10],
	salt: false,
	drought: false,
	wildlife: [BUTTERFLIES, BIRDS]
},
{
	name: 'Reindeer Lichen',
	latin: 'Cladonia rangiferina',
	light: [SUN, PARTIAL_SHADE],
	moisture: [DRY, MOIST],
	soil: [SAND],
	height: [5, 10],
	colour: [],
	months: [],
	salt: false,
	drought: false,
	wildlife: []
},
{
	name: 'Shrubby Cinquefoil',
	latin: 'Potentilla fruticosa',
	light: [PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [SAND, CLAY, LOAM],
	height: [120, 120],
	colour: [YELLOW],
	months: [4, 6],
	salt: false,
	drought: false,
	wildlife: [BEES]
},
{
	name: 'White Clover',
	latin: 'Trifolium repens',
	light: [SUN, PARTIAL_SHADE],
	moisture: [MOIST],
	soil: [CLAY, LOAM, SAND],
	height: [10, 10],
	colour: [WHITE],
	months: [6, 6],
	salt: false,
	drought: false,
	wildlife: [BEES]
},
{
	name: 'Wild Blue Phlox',
	latin: 'Phlox divaricata ',
	light: [SUN, PARTIAL_SHADE, SHADE],
	moisture: [MOIST],
	soil: [SAND, LOAM],
	height: [25, 50],
	colour: [BLUE],
	months: [4, 6],
	salt: false,
	drought: false,
	wildlife: [BUTTERFLIES, HUMMINGBIRDS]
}
];
var wildflowers = [
{
  name: 'Black-eyed Susan',
  latin: 'Rudbeckia hirta',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [30, 100],
  colour: [YELLOW],
  months: [7, 10],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Blue Flag Iris',
  latin: 'Iris versicolor',
  light: [SUN],
  moisture: [WET],
  soil: [LOAM],
  height: [30, 60],
  colour: [BLUE],
  months: [5, 7],
  salt: false,
  drought: false,
  wildlife: [HUMMINGBIRDS, BEES]
},
{
  name: 'Blue Giant Hyssop',
  latin: 'Agastache foeniculum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [LOAM, SAND],
  height: [90, 100],
  colour: [PURPLE],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BIRDS, BEES]
},
{
  name: 'Blue Vervain',
  latin: 'Verbena hastata',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [60, 180],
  colour: [BLUE],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Boneset',
  latin: 'Eupatorium perfoliatum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY, LOAM, SAND],
  height: [60, 120],
  colour: [WHITE],
  months: [7, 10],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Butterfly Weed',
  latin: 'Asclepias tuberosa',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [30, 75],
  colour: [ORANGE],
  months: [6, 9],
  salt: false,
  drought: true,
  wildlife: [HUMMINGBIRDS, BUTTERFLIES]
},
{
  name: 'Common Milkweed',
  latin: 'Asclepias syriaca',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [50, 150],
  colour: [PURPLE],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Cylindric Blazing Star',
  latin: 'Liatris cylindracea',
  light: [SUN],
  moisture: [DRY],
  soil: [SAND],
  height: [15, 45],
  colour: [PURPLE],
  months: [8, 10],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Foamflower',
  latin: 'Tiarella cordifolia',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [LOAM],
  height: [15, 30],
  colour: [WHITE],
  months: [4, 5],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Foxglove Beardtongue',
  latin: 'Penstemon digitalis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND],
  height: [60, 150],
  colour: [WHITE],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES, HUMMINGBIRDS, BIRDS]
},
{
  name: 'Hairy Beardtongue',
  latin: 'Penstemon hirsutus',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY],
  soil: [CLAY, LOAM, SAND],
  height: [30, 90],
  colour: [PURPLE],
  months: [5, 7],
  salt: false,
  drought: false,
  wildlife: [HUMMINGBIRDS]
},
{
  name: 'Heath Aster',
  latin: 'Symphyotrichum (Aster) ericoides',
  light: [SUN],
  moisture: [DRY],
  soil: [CLAY, SAND, LOAM],
  height: [30, 90],
  colour: [WHITE],
  months: [7, 10],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Jack-in-the-Pulpit',
  latin: 'Arisaema triphyllum ',
  light: [SHADE],
  moisture: [MOIST],
  soil: [LOAM, SAND],
  height: [30, 90],
  colour: [PURPLE, GREEN],
  months: [4, 6],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Lance-leaved Coreopsis',
  latin: 'Coreopsis lanceolata',
  light: [SUN],
  moisture: [DRY],
  soil: [SAND],
  height: [30, 60],
  colour: [YELLOW],
  months: [5, 7],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES, BIRDS]
},
{
  name: 'Long-fruited Thimbleweed',
  latin: 'Anemone cylindrica',
  light: [SUN],
  moisture: [DRY],
  soil: [SAND],
  height: [20, 80],
  colour: [WHITE],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Marsh Marigold',
  latin: 'Caltha palustris',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY],
  height: [30, 60],
  colour: [YELLOW],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'New England Aster',
  latin: 'Symphyotriclaum (Aster) novae-angliae',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [90, 210],
  colour: [PURPLE],
  months: [8, 10],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Pearly Everlasting',
  latin: 'Anaphalis margaritacea',
  light: [SUN],
  moisture: [DRY],
  soil: [SAND],
  height: [30, 90],
  colour: [WHITE],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Prairie Smoke',
  latin: 'Geum triflorum',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [LOAM, SAND],
  height: [30, 45],
  colour: [PURPLE],
  months: [5, 7],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Purple Coneflower (Echinacea)',
  latin: 'Echinacea purpurea',
  light: [SUN],
  moisture: [DRY],
  soil: [LOAM, SAND],
  height: [15, 60],
  colour: [PURPLE],
  months: [5, 10],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Showy Tick Trefoil',
  latin: 'Desmodium canadense',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [60, 150],
  colour: [PINK],
  months: [6, 9],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Silverrod',
  latin: 'Solidago bicolor',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [30, 90],
  colour: [WHITE],
  months: [7, 10],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Spiderwort',
  latin: 'Tradescantia virginiana',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [LOAM, SAND],
  height: [30, 90],
  colour: [WHITE],
  months: [5, 7],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Spotted Jewelweed',
  latin: 'Impatiens capensis',
  light: [SHADE],
  moisture: [WET],
  soil: [CLAY, LOAM, SAND],
  height: [60, 150],
  colour: [ORANGE],
  months: [6, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, HUMMINGBIRDS, BIRDS]
},
{
  name: 'Spotted Joe-Pye Weed',
  latin: 'Eupatorium maculatum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY, SAND],
  height: [60, 180],
  colour: [PURPLE, PINK],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Spreading Dogbane',
  latin: 'Apocynum androsaemifolium',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [30, 200],
  colour: [PINK],
  months: [6, 7],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Swamp Milkweed',
  latin: 'Asclepias incarnata',
  light: [SUN],
  moisture: [MOIST, WET],
  soil: [LOAM],
  height: [30, 150],
  colour: [PINK],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BEES]
},
{
  name: 'Turtlehead',
  latin: 'Chelone glabra',
  light: [SUN, PARTIAL_SHADE, SHADE],
  moisture: [WET],
  soil: [CLAY, LOAM],
  height: [30, 90],
  colour: [WHITE],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Wild Bergamot',
  latin: 'Monarda fistulosa',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [60, 120],
  colour: [PINK],
  months: [7, 8],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BIRDS, HUMMINGBIRDS]
},
{
  name: 'Wild Columbine',
  latin: 'Aquilegia canadensis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [LOAM],
  height: [30, 60],
  colour: [RED],
  months: [5, 7],
  salt: false,
  drought: true,
  wildlife: [BUTTERFLIES, HUMMINGBIRDS, BIRDS]
},
{
  name: 'Wild Lupine',
  latin: 'Lupinus perennis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [LOAM, SAND],
  height: [30, 60],
  colour: [PURPLE, BLUE],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, HUMMINGBIRDS]
},
{
  name: 'Wood Lily',
  latin: 'Lilium philadelphicum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY],
  soil: [SAND],
  height: [30, 75],
  colour: [RED],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Wild Strawberry',
  latin: 'Fragaria virginiana',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND],
  height: [5, 25],
  colour: [WHITE],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Yellow Coneflower',
  latin: 'Ratibida pinnata',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [CLAY, LOAM, SAND],
  height: [45, 150],
  colour: [YELLOW],
  months: [6, 9],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES, BIRDS]
}
];
var shrubs = [
{
  name: 'Alternate-Leaf Dogwood',
  latin: 'Cornus alternifolia',
  light: [SHADE, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [400, 600],
  colour: [WHITE],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Black Chokeberry',
  latin: 'Aronia melanocarpa',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [100, 300],
  colour: [WHITE],
  months: [5, 6],
  salt: true,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Black Raspberry',
  latin: 'Rubus occidentalis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [300, 300],
  colour: [WHITE],
  months: [5, 6],
  salt: false,
  drought: true,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Bush Honeysuckle',
  latin: 'Diervilla lonicera',
  light: [PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [SAND],
  height: [50, 100],
  colour: [ORANGE, YELLOW],
  months: [6, 7],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Buttonbush',
  latin: 'Cephalanthus occidentalis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [WET],
  soil: [CLAY, SAND, LOAM],
  height: [300, 300],
  colour: [WHITE, PINK],
  months: [7, 8],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES, HUMMINGBIRDS]
},
{
  name: 'Climbing Bittersweet (Vine)',
  latin: 'Celastrus scandens',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND, LOAM],
  height: [200, 700],
  colour: [YELLOW, GREEN],
  months: [5, 6],
  salt: false,
  drought: true,
  wildlife: [BIRDS]
},
{
  name: 'Common Elderberry',
  latin: 'Sambuscus canadensis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [100, 400],
  colour: [WHITE],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES, BEES]
},
{
  name: 'Common Juniper',
  latin: 'Juniperus communis',
  light: [SUN],
  moisture: [DRY],
  soil: [SAND],
  height: [100, 100],
  colour: [YELLOW],
  months: [6, 6],
  salt: false,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Flowering Raspberry',
  latin: 'Rubus odoratus',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [100, 200],
  colour: [PURPLE, PINK],
  months: [6, 9],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Fragrant Sumac',
  latin: 'Rhus aromatica',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [400, 400],
  colour: [YELLOW],
  months: [4, 6],
  salt: false,
  drought: true,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Grey Dogwood',
  latin: 'Cornus racemosa',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [SAND, LOAM],
  height: [200, 200],
  colour: [WHITE],
  months: [5, 7],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Highbush Cranberry',
  latin: 'Viburnum trilobum',
  light: [SUN],
  moisture: [MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [200, 300],
  colour: [WHITE, YELLOW],
  months: [6, 7],
  salt: false,
  drought: true,
  wildlife: [BIRDS, BUTTERFLIES, BEES]
},
{
  name: 'Low Serviceberry',
  latin: 'Amelanchier humilis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND, LOAM],
  height: [300, 600],
  colour: [WHITE],
  months: [5, 6],
  salt: true,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Meadow Rose',
  latin: 'Rosa blanda',
  light: [SUN],
  moisture: [DRY],
  soil: [CLAY, SAND, LOAM],
  height: [150, 150],
  colour: [WHITE, PINK],
  months: [6, 7],
  salt: true,
  drought: false,
  wildlife: []
},
{
  name: 'Narrow-Leaved Meadowsweet',
  latin: 'Spiraea alba',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [100, 100],
  colour: [WHITE],
  months: [6, 7],
  salt: false,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Nannyberry',
  latin: 'Viburnum lentago',
  light: [SUN, PARTIAL_SHADE],
  moisture: [WET],
  soil: [CLAY, SAND, LOAM],
  height: [400, 700],
  colour: [WHITE],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BEES, BUTTERFLIES]
},
{
  name: 'Pasture Rose',
  latin: 'Rosa Carolina',
  light: [SUN],
  moisture: [DRY, MOIST],
  soil: [SAND],
  height: [100, 100],
  colour: [PINK],
  months: [6, 7],
  salt: true,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Peachleaf Willow',
  latin: 'Salix amygdaloides',
  light: [SUN],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [300, 2000],
  colour: [YELLOW],
  months: [4, 5],
  salt: true,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Prairie Willow',
  latin: 'Salix humilis',
  light: [PARTIAL_SHADE],
  moisture: [DRY, MOIST],
  soil: [SAND, LOAM],
  height: [100, 300],
  colour: [WHITE, PINK],
  months: [4, 5],
  salt: false,
  drought: false,
  wildlife: [BEES, BUTTERFLIES]
},
{
  name: 'Red Elderberry',
  latin: 'Sambucus racemosa',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [300, 300],
  colour: [WHITE],
  months: [6, 7],
  salt: false,
  drought: false,
  wildlife: [HUMMINGBIRDS, BUTTERFLIES]
},
{
  name: 'Red Osier Dogwood',
  latin: 'Cornus stolonifera',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [SAND, LOAM],
  height: [200, 400],
  colour: [WHITE],
  months: [5, 7],
  salt: false,
  drought: true,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Shining Willow',
  latin: 'Salix lucida',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [300, 1000],
  colour: [YELLOW],
  months: [5, 6],
  salt: true,
  drought: false,
  wildlife: [BUTTERFLIES]
},
{
  name: 'Silky Dogwood',
  latin: 'Cornus amomum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [300, 300],
  colour: [WHITE],
  months: [3, 4],
  salt: false,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Smooth Gooseberry',
  latin: 'Ribes hirtellum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [100, 100],
  colour: [GREEN, YELLOW],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: 'Smooth Serviceberry',
  latin: 'Amelanchier laevis',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [CLAY, SAND],
  height: [200, 1000],
  colour: [WHITE],
  months: [4, 5],
  salt: true,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Southern Arrowwood',
  latin: 'Viburnum dentatum',
  light: [SUN, PARTIAL_SHADE],
  moisture: [WET],
  soil: [CLAY, SAND, LOAM],
  height: [100, 500],
  colour: [WHITE],
  months: [5, 8],
  salt: true,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Swamp Rose',
  latin: 'Rosa palustris',
  light: [SUN, PARTIAL_SHADE],
  moisture: [WET],
  soil: [CLAY, SAND, LOAM],
  height: [200, 200],
  colour: [PINK],
  months: [6, 8],
  salt: true,
  drought: false,
  wildlife: [BIRDS]
},
{
  name: 'Velvetleaf Blueberry',
  latin: 'Vaccinium myrtilloides',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [SAND, LOAM],
  height: [50, 100],
  colour: [GREEN, WHITE, PINK],
  months: [5, 6],
  salt: false,
  drought: false,
  wildlife: []
},
{
  name: "Virgin's Bower (Vine)",
  latin: 'Clematis virginiana',
  light: [SUN, PARTIAL_SHADE],
  moisture: [MOIST],
  soil: [LOAM],
  height: [200, 300],
  colour: [WHITE, YELLOW, GREEN],
  months: [7, 9],
  salt: false,
  drought: false,
  wildlife: [BEES, BUTTERFLIES, HUMMINGBIRDS]
},
{
  name: 'Winterberry',
  latin: 'Ilex verticillata',
  light: [SUN, PARTIAL_SHADE],
  moisture: [DRY, MOIST, WET],
  soil: [CLAY, SAND, LOAM],
  height: [300, 1000],
  colour: [YELLOW, WHITE, GREEN],
  months: [6, 8],
  salt: false,
  drought: false,
  wildlife: [BIRDS, BUTTERFLIES]
},
{
  name: 'Witch Hazel',
  latin: 'Hamamelis virginiana',
  light: [PARTIAL_SHADE, SHADE],
  moisture: [DRY, MOIST],
  soil: [CLAY, SAND, LOAM],
  height: [300, 500],
  colour: [YELLOW, ORANGE],
  months: [9, 11],
  salt: true,
  drought: false,
  wildlife: [BIRDS]
}
];

var GROUNDCOVER = 0, WILDFLOWER = 1, SHRUB = 2, TREE = 3;
var plants = [groundcover, wildflowers, shrubs, trees];
var elemMonths = new Array(12);
var monthlyColours = new Array(12);
var monthlyColoursPositions = new Array(12);
var plotObjects = [];
var numButterflies, numBirds, numHummingbirds, numBees,
    workspace, bloomAnimation;

window.onload = init;

function init(){
	for(var i = 0; i < 12; i++){
		elemMonths[i] = document.getElementById("bloom" + (i + 1));
	}
	numButterflies = document.getElementById("numButterflies");
	numBirds = document.getElementById("numBirds");
	numHummingbirds = document.getElementById("numHummingbirds");
	numBees = document.getElementById("numBees");
	workspace = document.getElementById("workspace");
	document.getElementById("btnAdd").onclick = createPlot;
	sortData(); // sort data by bloom times
}

function sortData(){
	var i, j, len, k = 0, nPlantCategories = plants.length, order = 0;
	for(; k < nPlantCategories; k++){
		var arr = plants[k];
		len = arr.length;
		// insertion sort
		for(i = 1; i < len; i++){
			var orig = arr[i];
			var o0 = orig.months[0];
			if(o0 == undefined) continue;
			for(j = i - 1; j >= 0; j--){
				var comp = arr[j];
				var c0 = comp.months[0];
				if(c0 != undefined){
					if(o0 > c0){ // condition 1: bloom start ascending
						break;
					}
					if(o0 == c0){ // condition 2: bloom end ascending
						if(orig.months[1] >= comp.months[1]){
							break;
						}
					}
				}
				arr[j] = orig;
				arr[j+1] = comp;
			}
		}
		for(i = 0; i < len; i++, order++){
			arr[i].order = order;
		}
	}
}

function rotateBloomColours(){
	var i, len, pos;
	for(i = 0; i < 12; i++){
		len = monthlyColours[i].length;
		if(len < 2) continue;
		pos = monthlyColoursPositions[i];
		elemMonths[i].className = monthlyColours[i][pos];
		monthlyColoursPositions[i] = (pos + 1) % len;
	}
}

function updateTotals(){
	clearInterval(bloomAnimation);
	var i, j, k, a, b, c, len, len2, arr, obj, nPlantCategories = plants.length;
	var nButterflies = 0, nBirds = 0, nHummingbirds = 0, nBees = 0;
	for(i = 0; i < 12; i++){
		monthlyColours[i] = [];
		monthlyColoursPositions[i] = 0;
	}
	len = 0;
	for(i = 0; i < nPlantCategories; i++){
		len += plants[i].length;
	}
	var chosen = new Array(len);
	for(i = 0; i < len; i++){
		chosen[i] = false;
	}
	len = plotObjects.length;
	for(i = 0; i < len; i++){
		arr = plotObjects[i].list; len2 = arr.length;
		for(j = 0; j < len2; j++){
			if(!arr[j].ignore) chosen[arr[j].plant.order] = true;
		}
	}
	var wildlife, months, colour;
	for(i = 0, k = 0; i < nPlantCategories; i++){
		arr = plants[i]; len = arr.length;
		for(j = 0; j < len; j++, k++){
			if(chosen[k]){
				obj = arr[j]; 
				wildlife = obj.wildlife; months = obj.months; colour = obj.colour;
				len2 = wildlife.length;
				for(a = 0; a < len2; a++){
					switch(wildlife[a]){
						case BUTTERFLIES: nButterflies++; break;
						case BIRDS: nBirds++; break;
						case HUMMINGBIRDS: nHummingbirds++; break;
						case BEES: nBees++; break;
					}
				}
				if(months.length > 0){
					a = months[0] - 1; b = months[1] - 1;
					for(; a <= b; a++){
						for(c = 0; c < colour.length; c++){
							if(!containsInArray(colour[c], monthlyColours[a]))
								monthlyColours[a].push(colour[c]);
						}
					}
				}
			}
		}
	}

	numButterflies.innerHTML = nButterflies;
	numBirds.innerHTML = nBirds;
	numHummingbirds.innerHTML = nHummingbirds;
	numBees.innerHTML = nBees;
	
	j = 0;
	for(i = 0; i < 12; i++){
		switch(monthlyColours[i].length){
			case 0: elemMonths[i].className = "nocolor"; break;
			case 1: elemMonths[i].className = monthlyColours[i][0]; break;
			default: j = 1; break;
		}
	}
	if(j == 1) {
		rotateBloomColours();
		bloomAnimation = setInterval(rotateBloomColours, 1000);
	}
}

function updatePlot(backingObj){
	redrawPlotFromList(backingObj);
	updateTotals();
}

function deletePlot(backingObj){
	var i, o;
	for(i = plotObjects.length - 1; i >= 0; i--){
		o = plotObjects[i];
		if(o == backingObj){
			workspace.removeChild(o.plot);
			plotObjects.splice(i, 1);
			updateTotals();
			break;
		}
		else{
			// change background text on existing plots
			o.plot.firstChild.firstChild.firstChild.nodeValue = "Plot " + i;
		}
	}
}

function createPlot(){
	var backingObj = {
		list: [],
		plants: [false, false, false, false],
		filters: {
			light: [false, false, false],
			moisture: [false, false, false],
			soil: [false, false, false],
			wildlife: [false, false, false, false],
			min_height: 0,
			max_height: 5000,
			salt: false,
			drought: false,
			deciduous: false,
			coniferous: false
		},
		plot: undefined
	};
	plotObjects.push(backingObj);
	
	var plot = document.createElement("div");
	backingObj.plot = plot;
	plot.className = "plot";
	var main = document.createElement("div");
	main.className = "main";
	var background = document.createElement("div");
	background.className = "background";
	background.appendChild(document.createTextNode("Plot " + plotObjects.length));
	main.appendChild(background);
	plot.appendChild(main);

	var options = document.createElement("div");
	options.className = "options";

	var fieldset = createFieldset("Native Plants");
	appendOptionPlant(fieldset, "groundcover", "Groundcover",
		addRemovePlantType(backingObj, GROUNDCOVER));
	appendOptionPlant(fieldset, "wildflowers", "Wildflowers",
		addRemovePlantType(backingObj, WILDFLOWER));
	appendOptionPlant(fieldset, "shrubs", "Shrubs",
		addRemovePlantType(backingObj, SHRUB));
	appendOptionPlant(fieldset, "trees", "Trees",
		addRemovePlantType(backingObj, TREE));
	
	options.appendChild(fieldset);
	fieldset = createFieldset("Requirements");

	appendOptionHeading(fieldset, "Light Exposure");
	appendOption(fieldset, "sun.png", "Sun", true,
		addRemoveFilter(backingObj, "light", SUN));
	appendOption(fieldset, "partial_shade.png", "Partial Shade", true,
		addRemoveFilter(backingObj, "light", PARTIAL_SHADE));
	appendOption(fieldset, "shade.png", "Shade", true,
		addRemoveFilter(backingObj, "light", SHADE));
	
	appendOptionHeading(fieldset, "Moisture");
	appendOption(fieldset, "dry.png", "Dry", true,
		addRemoveFilter(backingObj, "moisture", DRY));
	appendOption(fieldset, "moist.png", "Moist", true,
		addRemoveFilter(backingObj, "moisture", MOIST));
	appendOption(fieldset, "wet.png", "Wet", true,
		addRemoveFilter(backingObj, "moisture", WET));

	appendOptionHeading(fieldset, "Soil Type");
	appendOption(fieldset, "clay.png", "Clay", true,
		addRemoveFilter(backingObj, "soil", CLAY));
	appendOption(fieldset, "loam.png", "Loam", true,
		addRemoveFilter(backingObj, "soil", LOAM));
	appendOption(fieldset, "sand.png", "Sand", true,
		addRemoveFilter(backingObj, "soil", SAND));

	appendOptionHeading(fieldset, "Wildlife");
	appendOption(fieldset, "butterflies.png", "Butterflies", true,
		addRemoveFilter(backingObj, "wildlife", BUTTERFLIES));
	appendOption(fieldset, "birds.png", "Birds", true,
		addRemoveFilter(backingObj, "wildlife", BIRDS));
	appendOption(fieldset, "hummingbirds.png", "Hummingbirds", true,
		addRemoveFilter(backingObj, "wildlife", HUMMINGBIRDS));
	appendOption(fieldset, "bees.png", "Bees", true,
		addRemoveFilter(backingObj, "wildlife", BEES));

	appendOptionHeight(fieldset, 
		minHeightChanged(backingObj), maxHeightChanged(backingObj));

	appendOption(fieldset, "salt.png", "Salt Tolerant", false,
		addRemoveFilterSingle(backingObj, "salt"));

	appendOption(fieldset, "drought.png", "Drought Tolerant", false,
		addRemoveFilterSingle(backingObj, "drought"));

	appendOption(fieldset, "deciduous.png", "Deciduous Tree", false,
		addRemoveFilterTree(backingObj, true));

	appendOption(fieldset, "coniferous.png", "Coniferous Tree", false,
		addRemoveFilterTree(backingObj, false));

	options.appendChild(fieldset);
	plot.appendChild(options);
	var btnClose = document.createElement("button");
	btnClose.className = "btnClose";
	btnClose.appendChild(document.createTextNode("x"));
	btnClose.onclick = btnCloseClicked(backingObj);
	plot.appendChild(btnClose);
	workspace.appendChild(plot);
}

function containsInArray(item, arr){
	var i, len = arr.length;
	for(i = 0; i < len; i++){
		if(item == arr[i]) return true;
	}
	return false;
}

function andTest(arrFilter, arrCapacity){
	var i, len = arrFilter.length;
	for(i = 0; i < len; i++){
		if(arrFilter[i]){
			if(!containsInArray(i, arrCapacity)) return false;
		}
	}
	return true;
}

function areRequirementsMet(backingObj, candidate){
	var filters = backingObj.filters;
	if(!andTest(filters.light, candidate.light)) return false;
	if(!andTest(filters.moisture, candidate.moisture)) return false;
	if(!andTest(filters.soil, candidate.soil)) return false;
	if(!andTest(filters.wildlife, candidate.wildlife)) return false;
	if(filters.salt && !candidate.salt) return false;
	if(filters.drought && !candidate.drought) return false;
	if(filters.max_height < candidate.height[0]) return false;
	if(filters.min_height > candidate.height[1]) return false;
	if(filters.deciduous && candidate.deciduous != undefined &&
		!candidate.deciduous) return false;
	if(filters.coniferous && candidate.deciduous != undefined &&
		candidate.deciduous) return false;
	return true;
}

function addPlantType(backingObj, pos){
	backingObj.plants[pos] = true;
	var from = plants[pos], to = backingObj.list, candidate;
	var i, fromLen = from.length, insertPos = 0, toLen = to.length;
	for(i = 0; i < fromLen; i++){
		candidate = from[i];
		if(!areRequirementsMet(backingObj, candidate)) continue;
		if(insertPos == 0){
			for(; insertPos < toLen; insertPos++){
				if(to[insertPos].plant.order > candidate.order) break;
			}
		}
		to.splice(insertPos, 0, {plant: candidate, ignore: false});
		insertPos++;
	}
	if(insertPos > 0) updatePlot(backingObj);
}

function removePlantType(backingObj, pos){
	backingObj.plants[pos] = false;
	var list = backingObj.list, i, order, hasChanged = false;
	var min = plants[pos][0].order, max = min + plants[pos].length;
	for(i = list.length - 1; i >= 0; i--){
		order = list[i].plant.order;
		if(order >= min && order < max){
			list.splice(i, 1);
			hasChanged = true;
		}
		else if(hasChanged) break;
	}
	if(hasChanged) updatePlot(backingObj);
}

function addFilter(backingObj, key, pos){
	backingObj.filters[key][pos] = true;
	var list = backingObj.list, hasChanged = false;;
	for(var i = list.length - 1; i >= 0; i--){
		if(!containsInArray(pos, list[i].plant[key])){
			list.splice(i, 1);
			hasChanged = true;
		}
	}
	if(hasChanged) updatePlot(backingObj);
}

function removeFilter(backingObj, key, pos){
	backingObj.filters[key][pos] = false;
	addEligibleToList(backingObj);
}

function addEligibleToList(backingObj){
	var arr1, arr2 = backingObj.list, len1, len2 = arr2.length, 
	len3 = plants.length, i, ii = 0, iii, cpr, candidate;

	if(ii < len2) cpr = arr2[ii].plant;

	for(iii = 0; iii < len3; iii++){
		if(!backingObj.plants[iii]) continue;
		arr1 = plants[iii];
		len1 = arr1.length;
		for(i = 0; i < len1; i++){
			candidate = arr1[i];
			if(cpr == candidate){
				ii++;
				if(ii < arr2.length) cpr = arr2[ii].plant;
				else cpr = undefined;
				continue;
			}
			if(!areRequirementsMet(backingObj, candidate)) continue;
			arr2.splice(ii, 0, {plant: candidate, ignore: false});
			ii++;
		}
	}
	if(arr2.length != len2) updatePlot(backingObj);
}

function addRemovePlantType(backingObj, pos){
	function callback(){
		if(this.checked){ addPlantType(backingObj, pos); }
		else{ removePlantType(backingObj, pos); }
	}
	return callback;
};

function addRemoveFilter(backingObj, key, pos){
	function callback(){
		if(this.checked){ addFilter(backingObj, key, pos); }
		else{ removeFilter(backingObj, key, pos); }
	}
	return callback;
};

function addRemoveFilterSingle(backingObj, key){
	function callback(){
		if(this.checked){
			backingObj.filters[key] = true;
			var i, list = backingObj.list, hasChanged = false;
			for(i = list.length - 1; i >= 0; i--){
				if(!list[i].plant[key]){
					list.splice(i, 1);
					hasChanged = true;
				}
			}
			if(hasChanged) updatePlot(backingObj);
		}
		else{
			backingObj.filters[key] = false;
			addEligibleToList(backingObj);
		}
	}
	return callback;
}

function addRemoveFilterTree(backingObj, isDeciduous){
	function callback(){
		if(isDeciduous) backingObj.filters.deciduous = this.checked;
		else backingObj.filters.coniferous = this.checked;
		if(this.checked){
			var i, list = backingObj.list, hasChanged = false;
			for(i = list.length - 1; i >= 0; i--){
				var deciduous = list[i].plant.deciduous;
				if(deciduous == undefined) continue;
				if(isDeciduous != deciduous){
					list.splice(i, 1);
					hasChanged = true;
				}
			}
			if(hasChanged) updatePlot(backingObj);
		}
		else{
			addEligibleToList(backingObj);
		}
	}
	return callback;
}

function btnCloseClicked(backingObj){
	function callback(){
		deletePlot(backingObj);
	}
	return callback;
}

function appendImage(elem, src){
	var img = document.createElement("img");
	img.src = src;
	elem.appendChild(img);
}

function appendOptionHeading(options, txt){
	var div = document.createElement("div");
	div.className = "optionHeading";
	div.appendChild(document.createTextNode(txt));
	options.appendChild(div);
}

function appendOption(options, img, txt, indent, callback){
	var div = document.createElement("div");
	if(indent) { div.className = "indent"; }
	var label = document.createElement("label");
	appendImage(label, img);
	label.appendChild(document.createTextNode(txt));
	var input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.onclick = callback;
	label.appendChild(input);
	div.appendChild(label);
	options.appendChild(div);
}

function appendOptionPlant(options, cls, txt, callback){
	var div = document.createElement("div");
	div.className = cls;
	var label = document.createElement("label");
	label.appendChild(document.createTextNode(txt));
	var input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.onclick = callback;
	label.appendChild(input);
	div.appendChild(label);
	options.appendChild(div);
}

function minHeightChanged(backingObj){
	function callback(){
		var oldValue = backingObj.filters.min_height;
		var newValue = parseInt(this.value);
		// validate input
		if(isNaN(newValue)){ this.value = oldValue; return; }
		var other = backingObj.filters.max_height;
		if(newValue > other){ this.value = newValue = other; }

		if(newValue == oldValue) return;
		backingObj.filters.min_height = newValue;
		if(newValue < oldValue){
			addEligibleToList(backingObj);
		}
		else {
			var i, arr = backingObj.list, hasChanged = false;
			for(i = arr.length - 1; i >= 0; i--){
				if(newValue > arr[i].plant.height[1]){
					arr.splice(i, 1);
					hasChanged = true;
				}
			}
			if(hasChanged){ updatePlot(backingObj); }
		}
	}
	return callback;
}

function maxHeightChanged(backingObj){
	function callback(){
		var oldValue = backingObj.filters.max_height;
		var newValue = parseInt(this.value);
		// validate input
		if(isNaN(newValue)){ this.value = oldValue; return; }
		var other = backingObj.filters.min_height;
		if(newValue < other){ this.value = newValue = other; }

		if(newValue == oldValue) return;
		backingObj.filters.max_height = newValue;
		if(newValue > oldValue){
			addEligibleToList(backingObj);
		}
		else {
			var i, arr = backingObj.list, hasChanged = false;
			for(i = arr.length - 1; i >= 0; i--){
				if(newValue < arr[i].plant.height[0]){
					arr.splice(i, 1);
					hasChanged = true;
				}
			}
			if(hasChanged){ updatePlot(backingObj); }
		}
	}
	return callback;
}

function appendOptionHeight(options, minHeightCallback, maxHeightCallback){
	var div = document.createElement("div");
	appendImage(div, "height.png");
	div.appendChild(document.createTextNode("Height: "));
	var input = document.createElement("input");
	input.setAttribute("type", "number");
	input.className = "number";
	input.min = 0;
	input.max = 9999;
	input.value = 0; // min
	input.onchange = minHeightCallback;
	div.appendChild(input);
	div.appendChild(document.createTextNode(" - "));
	input = document.createElement("input");
	input.setAttribute("type", "number");
	input.className = "number";
	input.min = 0;
	input.max = 9999;
	input.value = 5000; // max
	input.onchange = maxHeightCallback;
	div.appendChild(input);
	div.appendChild(document.createTextNode("cm"));
	options.appendChild(div);
}

function createFieldset(title){
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.appendChild(document.createTextNode(title));
	fieldset.appendChild(legend);
	return fieldset;
}

function getMonth(num){
	switch(num){
		case 1: return "Jan";
		case 2: return "Feb";
		case 3: return "Mar";
		case 4: return "Apr";
		case 5: return "May";
		case 6: return "Jun";
		case 7: return "Jul";
		case 8: return "Aug";
		case 9: return "Sep";
		case 10: return "Oct";
		case 11: return "Nov";
		case 12: return "Dec";
		default: return "";
	}
}

function toggleIgnore(item){
	function callback(){
		item.ignore = !item.ignore;
		if(item.ignore){
			this.className = "ignore " + this.className;
		}
		else{
			this.className = this.className.slice(7);
		}
		updateTotals();
	}
	return callback;
}

function redrawPlotFromList(backingObj){
	var main = backingObj.plot.firstChild;
	// remove existing
	var children = main.childNodes;
	if(children.length > 1){
		main.removeChild(children[1]);
	}
	// populate new
	var foreground = document.createElement("div");
	var list = backingObj.list;
	var lowerboundTree = trees[0].order;
	var lowerboundShrub = shrubs[0].order;
	var lowerboundWildflower = wildflowers[0].order;
	var i, len = list.length, j, len2, arr;
	for(i = 0; i < len; i++){
		var obj = list[i], plant = obj.plant, category;
		if(plant.order >= lowerboundTree) category = TREE;
		else if(plant.order >= lowerboundShrub) category = SHRUB;
		else if(plant.order >= lowerboundWildflower) category = WILDFLOWER;
		else category = GROUNDCOVER;
		
		var elem = document.createElement("div");
		var line1 = document.createElement("div");
		line1.className = "name";
		line1.appendChild(document.createTextNode(plant.name));
		var line2 = document.createElement("div");
		line2.appendChild(document.createTextNode(plant.latin));
		line2.className = "latin";
		var line3 = document.createElement("div");
		arr = plant.light; len2 = arr.length;
		for(j = 0; j < len2; j++){
			switch(arr[j]){
				case SUN: appendImage(line3, "sun.png"); break;
				case PARTIAL_SHADE: appendImage(line3, "partial_shade.png"); break;
				case SHADE: appendImage(line3, "shade.png"); break;
			}
		}
		arr = plant.moisture; len2 = arr.length;
		for(j = 0; j < len2; j++){
			switch(arr[j]){
				case DRY: appendImage(line3, "dry.png"); break;
				case MOIST: appendImage(line3, "moist.png"); break;
				case WET: appendImage(line3, "wet.png"); break;
			}
		}
		arr = plant.soil; len2 = arr.length;
		for(j = 0; j < len2; j++){
			switch(arr[j]){
				case CLAY: appendImage(line3, "clay.png"); break;
				case LOAM: appendImage(line3, "loam.png"); break;
				case SAND: appendImage(line3, "sand.png"); break;
			}
		}
		appendImage(line3, "height.png");
		var h0 = plant.height[0], h1 = plant.height[1];
		if(h0 < h1){
			if(category == GROUNDCOVER || category == WILDFLOWER)
				line3.appendChild(document.createTextNode(h0 + "-" + h1 + "cm"));
			else
				line3.appendChild(document.createTextNode((h0/100) +"-"+ (h1/100) +"m"));
		}
		else {
			if(category == GROUNDCOVER || category == WILDFLOWER)
				line3.appendChild(document.createTextNode(h0 + "cm"));
			else line3.appendChild(document.createTextNode((h0/100) + "m"));
		}
		arr = plant.colour; len2 = arr.length;
		for(j = 0; j < len2; j++){
			switch(arr[j]){
				case WHITE: appendImage(line3, "white.png"); break;
				case ORANGE: appendImage(line3, "orange.png"); break;
				case PURPLE: appendImage(line3, "purple.png"); break;
				case GREEN: appendImage(line3, "green.png"); break;
				case YELLOW: appendImage(line3, "yellow.png"); break;
				case PINK: appendImage(line3, "pink.png"); break;
				case BLUE: appendImage(line3, "blue.png"); break;
				case RED: appendImage(line3, "red.png"); break;
			}
		}
		if(plant.months.length > 0){
			appendImage(line3, "months.png");
			var m0 = plant.months[0], m1 = plant.months[1];
			if(m0 < m1){
				line3.appendChild(document.createTextNode(
					getMonth(m0) + "-" + getMonth(m1)));
			}
			else {
				line3.appendChild(document.createTextNode(getMonth(m0)));
			}
		}
		if(plant.salt){ appendImage(line3, "salt.png"); }
		if(plant.drought){ appendImage(line3, "drought.png"); }
		arr = plant.wildlife; len2 = arr.length;
		for(j = 0; j < len2; j++){
			switch(arr[j]){
				case BUTTERFLIES: appendImage(line3, "butterflies.png"); break;
				case BIRDS: appendImage(line3, "birds.png"); break;
				case HUMMINGBIRDS: appendImage(line3, "hummingbirds.png"); break;
				case BEES: appendImage(line3, "bees.png"); break;
			}
		}
		switch(category){
			case GROUNDCOVER:
				if(obj.ignore){ elem.className = "ignore plant groundcover"; }
				else { elem.className = "plant groundcover"; }
				break;
			case WILDFLOWER:
				if(obj.ignore){ elem.className = "ignore plant wildflowers"; }
				else { elem.className = "plant wildflowers"; }
				break;
			case SHRUB:
				if(obj.ignore){ elem.className = "ignore plant shrubs"; }
				else { elem.className = "plant shrubs"; }
				break;
			case TREE:
				if(plant.deciduous){ appendImage(line3, "deciduous.png"); }
				else { appendImage(line3, "coniferous.png"); }
				if(obj.ignore){ elem.className = "ignore plant trees"; }
				else { elem.className = "plant trees"; }
				break;
		}

		elem.appendChild(line1);
		elem.appendChild(line2);
		elem.appendChild(line3);
		elem.onclick = toggleIgnore(obj);
		foreground.appendChild(elem);
	}
	main.appendChild(foreground);
}

