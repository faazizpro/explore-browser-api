console.log('Promt JS connected');

// alert('Kmn aso bou?')
const showAlert = () => {
    const num = Math.random()*5;
    console.log(num);
    if(num < 10){

        alert('AMi Ajk Biye Korbo')
    }
}

const askSomething = () => {
    const decision = confirm('Are You Going To Marry?')
    console.log(decision);
    if(decision === true){
        alert('Lets go to the shopping mall')
    }
    else{
        alert('Lets go to the kaji office')
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell me your fathers phone number');
    console.log(name);
}