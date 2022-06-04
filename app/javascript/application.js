// Entry point for the build script in your package.json
import renderGame from './render_game';
import get_char_api from './get_char_api';
import isMatching from './is_matching';

console.log("Welcome!");

let offsetX;
let offsetY;
const check_infos = [];

function reOffset(canvas){    
    offsetX = canvas.getBoundingClientRect().left;
    offsetY = canvas.getBoundingClientRect().top; 
} 

function getProcentage(canvas, x, y){
    const x_procentage = x  / canvas.getBoundingClientRect().width;
    const y_procentage = y  / canvas.getBoundingClientRect().height;
    console.log(x_procentage, y_procentage);
    return {x_procentage, y_procentage};
}

function setCheckAttributes(checks, canvas, check_infos){   
    const zoomOutRatio =  canvas.getBoundingClientRect().width / 1369;
    checks.forEach( check => {
        for(let i = 0; i < checks.length; i++){
            if(check_infos[i].id === check.id){
                check.value.setAttribute("style", `left: ${ (canvas.getBoundingClientRect().width) * ( check_infos[i].x + 0.016 )}px; 
                                 top: ${(canvas.getBoundingClientRect().height) * ( check_infos[i].y + 0.024 )}px;
                                 transform-origin: bottom right; 
                                 transform:scale(${zoomOutRatio})   
                                `);
            }
        }
    });    
} 

function handleMouse(e){     

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    console.log(x, y);
    return {x, y};
}

get_char_api().then((characters) => { 
    
    const button = document.getElementById("play-button");
    button.addEventListener('click', () => {
        renderGame();
        const game = document.getElementById('game');
        const canvas = document.getElementById("level-img");

        for(let i = 0; i < characters.length; i++){
            const coords_obj = {"id": characters[i].id, "x": null, "y": null};
            check_infos.push(coords_obj);
        }

        console.log('CHARACTERS: ', characters.length);

        const checks = [];
        for(let i = 0; i < characters.length; i++){

            const check = document.createElement("div");
            check.className = "check";
            const new_obj = {"id":i+1, "value": check }
            checks.push(new_obj);
        }       

        reOffset(canvas);
        window.onscroll = function() { reOffset(canvas) };
        window.onresize = function() { reOffset(canvas) };
        window.onresize = function() { setCheckAttributes(checks, canvas, check_infos) };
        
        canvas.addEventListener('click', (e) => {

            const click_coords = handleMouse(e);              
            const click_coords_procentage = getProcentage(canvas, click_coords.x, click_coords.y);                       
            

            characters.forEach((character) => {
                if(isMatching(click_coords_procentage.x_procentage, click_coords_procentage.y_procentage, character.left, character.right, character.top, character.bottom)) {
                    console.log("Match!");

                    for(let i = 0; i < checks.length; i++){
                        if(checks[i].id === character.id){
                            game.appendChild(checks[i].value);
                            check_infos[i].x = click_coords_procentage.x_procentage;
                            check_infos[i].y = click_coords_procentage.y_procentage;
                            setCheckAttributes(checks, canvas, check_infos);
                            let marked = document.getElementById(i+1);
                            marked.classList.add("marked");
                        }
                    }                    
                    
                    
                    characters = characters.filter(function(value, index, arr){ 
                        return value.id != character.id;
                    });

                        

                    if(characters.length === 0){
                        console.log("You win!");
                        const text = document.createElement('div');
                        const clear_checks = document.querySelectorAll('.check');
                        const sideMenu = document.querySelector('.side-menu');
                        for(let i = 0; i < clear_checks.length; i++){
                            game.removeChild(clear_checks[i]);
                        }
                        text.className = "text";
                        text.innerHTML = "You Win!";
                        game.removeChild(canvas);
                        game.removeChild(sideMenu);
                        game.appendChild(text);

                    }
                    else {
                        console.log('CHARACTERS LEFT: ', characters.length);
                    }
                }
                    
            });
        });    
    });

});






