import { useState } from 'react';

export const coffee= [
    {
        id: 1,
        name: "Expresso Tradicional",
        tags: [
            "Tradicional"
        ],
        description: "O tradicional café feito com água quente e grãos moídos",
        price: "9.90",
        stock: 100
    },
    {
        id: 2,
        name: "Expresso Americano",
        tags: [
            "Tradicional"
        ],
        description: "Expresso diluído, menos intenso que o tradicional",
        price: "9.90",
        stock: 100
    },
    {
        id: 3,
        name: "Expresso Cremoso",
        tags: [
            "Tradicional"
        ],
        description: "Café expresso tradicional com espuma cremosa",
        price: "9.90",
        stock: 100
    },
    {
        id: 4,
        name: "Expresso Gelado",
        tags: [
            "Tradicional",
            "gelado"
        ],
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: "9.90",
        stock: 100
    },
    {
        id: 5,
        name: "Café com Leite",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: "9.90",
        stock: 100
    },
    {
        id: 6,
        name: "Latte",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: "9.90",
        stock: 100
    },
    {
        id: 7,
        name: "Capuccino",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: "9.90",
        stock: 100
    },
    {
        id: 8,
        name: "Macchiato",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: "9.90",
        stock: 100
    },
    {
        id: 9,
        name: "Mocaccino",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: "9.90",
        stock: 100
    },
    {
        id: 10,
        name: "Chocolate Quente",
        tags: [
            "Tradicional",
            "com leite"
        ],
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: "9.90",
        stock: 100
    },
    {
        id: 11,
        name: "Cubano",
        tags: [
            "Tradicional",
            "alcoólico",
            "gelado"
        ],
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: "9.90",
        stock: 100
    },
    {
        id: 12,
        name: "Havaiano",
        tags: [
            "especial",
        ],
        description: "Bebida adocicada preparada com café e leite de coco",
        price: "9.90",
        stock: 100
    },
    {
        id: 13,
        name: "Árabe",
        tags: [
            "especial",
        ],
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: "9.90",
        stock: 100
    },
    {
        id: 14,
        name: "Irlandês",
        tags: [
            "especial",
            "alcoólico"
        ],
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: "9.90",
        stock: 100
    }
]

const [coffee, setCoffee] = useState<coffee>([]);