
// , {
    //     method: 'POST',
    //     headers: {
        //         'content-type': 'application/JSON',
        //     },
        //     body: JSON.stringify({
            //         nama: 'baobsoa',
            //         email: 'ahahah@gmail.com'
            //     }),
            // }


// GET
const AlamatApi = "https://reqres.in/api/users/2";
            
fetch(AlamatApi)
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })

  .then(({data}) => {
    console.log(data);
    mainUI(data);
})
.catch((error) => console.error("FETCH ERROR:", error));

function mainUI(data){
    var main = document.getElementById('main');
    // image
    const imgSrc = data.avatar;
    const imageContent = document.createElement('img');
    imageContent.src = imgSrc;
    main.appendChild(imageContent);
    // nama
    const h1 = data.first_name;
    const heading = document.createElement('h1');
    heading.innerHTML = h1;
    main.appendChild(heading);
    // email
    const emailResult = document.createElement('h2');
    emailResult.innerHTML = data.email;
    main.appendChild(emailResult)
}
