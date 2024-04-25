const apiKey='T3qDfU9cijcYAtiQWfurTgMByqzuJJuI'
const peticio = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);

//dificil de mantener
/*
peticio.then((resp)=>{    
    resp.json().then((data)=>{
        console.log(data)
    })
}).catch(console.warn)
*/

//PROMESA EN CADENA
peticio
.then((resp)=> resp.json())
.then(({data})=> {//desestructuro para no usar data.data
    const {url} = data[0].images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.warn)


