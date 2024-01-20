/**
 * QUIZZ sur Number
 * Tableaux des methodes Number
 */
// liste des methodes
const listeMethodNumberJS = [
    "BigInt", // 1
    "isFinite()",
    "isInteger()",
    "isNaN()",
    "isSafeInteger()", // 5
    "parseFloat()",
    "parseInt()",
    "toExponential()",
    "toFixed()",
    "toLocaleString()", // 10
    "toPrecision()",
    "toString()",
    "valueOf()",
];

// liste des définitions
const listeDefinitionsNumberJS = [
    "Un grand entier est appelé BigInt, c'est une valeur primitive bigint, créée en ajoutant un n à la fin d'un littéral d'entier, par exemple : 10n, ou en appelant le constructeur BigInt() (sans utiliser l'opérateur new) en lui fournissant un entier ou une chaîne de caractères en argument.",
    "Cette fonction permet de déterminer si la valeur fournie est un nombre fini.",
    "Cette fonction permet de déterminer si l'argument est un nombre entier.",
    "Cette fonction permet de déterminer si la valeur passée en argument est NaN, avec un type Number. Cette version est plus robuste que la méthode de l'objet global isNaN.",
    "Cette fonction permet de déterminer si une valeur passée en argument, est un entier sûr et renvoie une valeur booléenne. Note : un entier sûr est une valeur entière qui peut être exactement représentée comme un numéro de double précision IEEE-754 sans arrondi et représenté comme ceci : -(253 - 1)253 - 1.",
    "Cette fonction analyse et convertit une chaîne de caractères, fournie en argument, en un nombre flottant.",
    "Cette fonction analyse et convertit une chaine de caractères, fournie en argument, en un entier dans la base souhaitée.",
    "cette méthode renvoie une chaîne de caractères, représentant l'objet Number en notation exponentielle.",
    "cette méthode permet de formater le nb de chiffre après la virgule en sachant que ce dernier chiffre est arrondi au chiffre supérieur ou inférieur.",
    "cette méthode Number permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte des paramètres régionaux du nombre.",
    "cette méthode renvoie une chaîne de caractères représentant un nombre avec la précision donnée et en arrondissant le dernier chiffre.",
    "cette méthode renvoie une chaîne de caractère représentant l'objet Number.",
    "cette méthode renvoie la valeur primitive correspondant à celle représentée par l'objet Number.",
];
