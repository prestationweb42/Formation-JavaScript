/**
 * QUIZZ sur les ARRAY
 * Tableaux des methodes concernant les ARRAY
 */
// liste des methodes
const listeMethodArrayJS = [
    "concat()", // 1
    "copyWithin()",
    "entries()",
    "every()",
    "fill()", // 5
    "filter()",
    "find()",
    "findIndex()",
    "findLast()",
    "findLastIndex()", // 10
    "flat()",
    "flatMap()",
    "forEach()",
    "Array.from()",
    "includes()", // 15
    "indexOf()",
    "Array.isArray()",
    "join()",
    "keys()",
    "lastIndexOf()", // 20
    "map()",
    "Array.of()",
    "pop()",
    "push()",
    "reduce()", // 25
    "reduceRight()",
    "reverse()",
    "shift()",
    "slice()",
    "some()", // 30
    "sort()",
    "splice()",
    "toLocaleString()",
    "toString()",
    "unshift()",
    "values()", // 36
];

// Définitions des methodes
const listeDefinitionsArrayJS = [
    // 1
    "Cette méthode est utilisée pour fusionner deux ou plusieurs tableaux en les concaténant. Elle ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération",
    // 2
    "Cette méthode effectue une copie superficielle (shallow copy) d'une partie d'un tableau sur ce même tableau et le renvoie, sans modifier sa taille.",
    // 3
    "Cette méthode renvoie un nouvel objet de type Array Iterator qui contient le couple clef/valeur pour chaque éléments du tableau.",
    // 4
    "Cette méthode permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.",
    // 5
    "Cette méthode remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau d'origine modifié.",
    // 6
    "Cette méthode crée un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback. Elle ne modifie pas le tableau d'origine.",
    // 7
    "Cette méthode renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.",
    // 8
    "Cette méthode renvoie l'index du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.",
    // 9
    "Cette méthode parcourt un tableau dans le sens inverse et renvoie le premier élément rencontré qui correspond au critère fourni par la fonction passée en argument. Si aucun élément ne correspond au critère de la fonction de test, ce sera, undefined qui sera renvoyé.",
    // 10
    "Cette méthode parcourt le tableau en sens inverse et renvoie l'indice du premier élément qui correspond au critère fourni par une fonction de test. Si aucun élément ne correspond à ce critère, c'est -1 qui est renvoyé.",
    // 11
    "Cette méthode permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.",
    // 12
    "Cette méthode permet d'appliquer une fonction à chaque élément du tableau puis d'aplatir le résultat en un tableau. Cela correspond à l'enchaînement de Array.prototype.map() suivi de Array.prototype.flat() de profondeur 1. flatMap est plus efficace que la combinaison de ces deux opérations, souvent réalisées conjointement.",
    // 13
    "Cette méthode permet d'exécuter une fonction donnée sur chaque élément du tableau.",
    // 14
    "Cette méthode permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.",
    // 15
    "Cette méthode permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.",
    // 16
    "Cette méthode renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.",
    // 17
    "Cette méthode permet de déterminer si l'objet passé en argument est un objet Array, elle renvoie true si le paramètre passé à la fonction est de type Array et false dans le cas contraire.",
    // 18
    "Cette méthode crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.",
    // 19
    "Cette méthode des objets Map (map.keys()) et Set (set.keys()) renvoie un nouvel objet Array Iterator qui contient les clefs pour map ou les valeurs pour set du tableau.",
    // 20
    "Cette méthode permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1. Lors de la recherche, le tableau est parcouru dans le sens des index décroissants, à partir de l'index indexDébut.",
    // 21
    "Cette méthode crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.",
    // 22
    "Cette methode permet de créer une nouvelle instance d'objet Array à partir d'un nombre variable d'arguments, quels que soient leur nombre ou leur type. La différence entre Array.of() et le constructeur Array se situe dans la gestion d'arguments entiers : Array.of(7) crée un tableau avec un seul élément, 7, tandis que Array(7) produit un tableau avec 7 éléments vides (à ne pas confondre avec des éléments qui auraient explicitement la valeur undefined).",
    // 23
    "Cette méthode supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.",
    // 24
    "Cette méthode ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.",
    // 25
    "Cette méthode applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.",
    // 26
    "Cette méthode applique une fonction sur un accumulateur et chaque valeur d'un tableau (de la droite vers la gauche) de sorte à réduire le tableau en une seule valeur.",
    // 27
    "Cette méthode transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.",
    // 28
    "Cette méthode permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.",
    // 29
    "Cette méthode renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.",
    // 30
    "Cette méthode teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.",
    // 31
    "Cette méthode trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères. La complexité en espace mémoire et en temps utilisée pour le tri ne peut pas être garantie car elle dépend de l'implémentation.",
    // 32
    "Cette méthode modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau. On peut ainsi vider ou remplacer une partie d'un tableau.",
    // 33
    "Cette méthode renvoie une chaîne de caractères qui représente les éléments du tableau. Les éléments sont convertis en chaînes de caractères grâce à leurs méthodes toLocaleString et chacune de ces chaînes est séparée des autres avec un séparateur propre à la locale courante (par exemple une virgule ou un point).",
    // 34
    "Cette méthode renvoie une chaine de caractères représentant le tableau spécifié et ses éléments.",
    // 35
    "Cette méthode ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.",
    // 36
    "Cette méthode renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque indice du tableau. Cette méthode est l'implémentation par défaut de Array.prototype[Symbol.Iterator].",
];
