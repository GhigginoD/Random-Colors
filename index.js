function get_random_color(){ 
    const random_color = Math.floor(Math.random() * 4);
    return random_color;
}

function verify_user_response(){
    let verify = true;
    array_1 = sequences.toString();
    array_2 = user_sequences.toString();
    array_1 === array_2 ? verify : verify = false;
    console.log(verify);

    verify ? sequences.push(get_random_color()) : console.log('Sequência errada.');
    console.log(sequences);
}

async function lighten(id) {
    let color = document.getElementById(id.toString());
    color.style.background = light_colors[id];
    color.style.boxShadow = shadows[id];
    await timeout(3000);
    color.style.background = colors[id];
    color.style.boxShadow = 'none';
}

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pisca_tudo() {
    lighten(0);
    lighten(1);
    lighten(2);
    lighten(3);
    await timeout(3000);
}

async function show_sequences() {
    await pisca_tudo();

    for(let i = 0; i < sequences.length; i++) {
        let color = document.getElementById(sequences[i].toString());
        color.style.background = light_colors[sequences[i]];
        color.style.boxShadow = shadows[sequences[i]];
        await timeout(1000);
        color.style.background = colors[sequences[i]];
        color.style.boxShadow = 'none';
        await timeout(500);
    }
    return null;
}

const colors = [
  '#D00000',
  '#FFBA08',
  '#084B83',
  '#2BA84A'
];

const light_colors = [
  '#fb2333',
  '#ffcc4d',
  '#0d72c5',
  '#1ae24c'
];

const shadows = [
  '-12px -12px 12px #fb2333', 
  '12px -12px 12px #ffcc4d', 
  '-12px 12px 12px #0d72c5', 
  '12px 12px 12px #1ae24c'
];

const sequences = [get_random_color()];
let user_sequences = [];

document.addEventListener('click', (event) =>{
    const event_id = event.target.id;
    
    if(!event_id || event_id === 'container' || event_id === 'button'){
        return null;
    }
    user_sequences.push(event_id);

    if(user_sequences.length == sequences.length) {
        verify_user_response();
        user_sequences = [];
    }
});