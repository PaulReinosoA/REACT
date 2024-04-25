//Opcion de promesa no en cadena
const getImage = async()=>{

    try {
        const apiKey='T3qDfU9cijcYAtiQWfurTgMByqzuJJuI';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
        const resp = await peticion.json();
        const {data} = resp;

        const {url} = data[0].images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
        
    } catch (error) {
        console.error(error);
    }
}

getImage();

