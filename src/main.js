console.log('script is running!')

//referenties gemaakt naar de html elementen//
const input = document.getElementById('input-field');
const output = document.getElementById('output-field');
const submit = document.getElementById('submit-btn');

//functies declareren//
const handleSubmit = () => {

    console.log('Submit is being handled')
    console.log( input.value )
    output.innerText = input.value
    //hierdoor wordt de value weer op 0 gezet na submit//
    input.value = ''

}

// geen ronde haken achter hadleSubmit anders gaat hij al voor de click//
submit.addEventListener('click', handleSubmit )

// keypress//
// input.addEventListener( 'keyup', (e)=>{
//     // console.log(e)
//     if(e.key === 'Enter') {
//         handleSubmit()
//     }
//
// })