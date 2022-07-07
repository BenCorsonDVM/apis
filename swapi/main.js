let getResidentsButton = document.querySelector('button')

const buttonClicked = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then(res => {
        const residents = res.data.results[0].residents
        for(i=0;i<residents.length;i++){
            axios.get(residents[i]).then(res => {
                let h2 = document.createElement('h2')
                h2.textContent = res.data.name
                document.body.appendChild(h2)
            })
        }
    })
}

getResidentsButton.addEventListener('click', buttonClicked)
