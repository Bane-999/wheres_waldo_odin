import level1 from './levels/level1.jpeg';
import odlaw_pic from './images/odlaw-profile-pic-18cbff92eda4cfb2af39905cc598cb0c.jpg';
import wizard_pic from './images/wizard-profile-pic-87308bb2e8939478743143f57112f7a0.jpg';
import waldo_pic from './images/waldo-profile-pic-e3d5b4d0b571303065c2b09c88b64ccd.jpg';
import wenda_pic from './images/wenda-profile-pic-581c5b23231ba318621bf1878585aad1.jpg';

export default function renderGame() {
    const image = document.createElement("img");
    const game = document.createElement("div");
    const load = document.getElementById('load-page')
    const sideMenu = document.createElement("div");

    const odlaw = document.createElement("img");
    odlaw.className = "side-pic";
    odlaw.src = odlaw_pic;
    odlaw.setAttribute("id", 1);

    const wizard = document.createElement("img");
    wizard.className = "side-pic";
    wizard.src = wizard_pic;
    wizard.setAttribute("id", 2);

    const wenda = document.createElement("img");
    wenda.className = "side-pic";
    wenda.src = wenda_pic;
    wenda.setAttribute("id", 3);

    const waldo = document.createElement("img");
    waldo.className = "side-pic";
    waldo.src = waldo_pic;
    waldo.setAttribute("id", 4);
    

    game.setAttribute('id',"game");
    sideMenu.className = "side-menu";
    document.body.appendChild(game);
    document.body.removeChild(load);
    image.setAttribute('id',"level-img");
    image.setAttribute('src', level1);
    game.appendChild(image);
    game.appendChild(sideMenu);
    sideMenu.appendChild(odlaw);
    sideMenu.appendChild(wizard);
    sideMenu.appendChild(waldo);
    sideMenu.appendChild(wenda);
}