const url = "https://dummyjson.com/products";
const fecthing = async () => {
    console.log("fetching the data ")
    const res = await fetch(url).
        then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data.firstname);
             console.log("name is ::", data.firstname);
            console.log("name is ::", data.email);
            console.log("name is ::", data.ip);
            console.log("name is ::", data.macAddress);
        })

    console.log("fecthing is completed ");
    
}

fecthing();