let namen = ["Vinni", "Mattes", "Eren", "Bombaclatt", "Mr.sins", "Drachenlord", "Die Haider", "Die Schanze" , "Du" , "Ich"];

let zufall = Math.floor(Math.random() * namen.length);
console.log(zufall);

for (let i = 0; i < namen.length; i++)
{
    console.log(namen[zufall]);
}

