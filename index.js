function function1(){
    /* 0 -> red, 1 -> green, 2 -> yellow, 3 -> blue */    
    const random_color = Math.floor(Math.random() * 4);
    return random_color;
}

const colors = ['#D00000',"FFBA08",'#084B83','#2BA84A'];
const sequences = [function1()];
document.addEventListener('click', (event) =>{
    const event_id =event.target.id;
    console.log(event_id);
    let verify = true;
    if(!event_id){
        return null;
    }
    switch (event_id) {
        case 0:
            for (let i=0;i<sequences.length();i++){
                if(!i==event_id)
                    verify = false;
            }
            return verify;
        case 1:
            for (let i=0;i<sequences.length();i++){
                if(!i==event_id)
                    verify = false;
            }
            return verify;

        case 2:
            for (let i=0;i<sequences.length();i++){
                if(!i==event_id)
                    verify = false;
            }
            return verify;
            
        case 3:
            for (let i=0;i<sequences.length();i++){
                if(!i==event_id)
                    verify = false;
            }
            return verify;
        }
})
async function get_user_response(){
    
    return null;
}


    /* map[random_color1]
    red - red 
    map.append(function1()) -> map[random_color1, random_color2]
    for i in map:
        red ? map[i]
   
     */