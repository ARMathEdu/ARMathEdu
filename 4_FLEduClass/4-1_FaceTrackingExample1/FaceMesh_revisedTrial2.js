import { loadTexture } from "../../applications/libs/loader.js"
import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';


const mindarThree = new MindARThree({
    container: document.querySelector("#container"),
    });

//Flipping image of front camera
container.style.webkitTransform = 'scaleX(-1)';
container.style.transform = 'scaleX(-1)';

const {renderer, scene, camera} = mindarThree;

//lights
const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1);
scene.add(light)

//adding face mesh
const faceMesh1 = mindarThree.addFaceMesh();
const faceMesh2 = mindarThree.addFaceMesh();

const texture = await loadTexture("./FaceMesh_Sample.png")
const texture2 = await loadTexture("./FaceMesh_Sample2.png")
const texture3 = await loadTexture("./FaceMesh_Sample5.png")


faceMesh1.material.map = texture;
faceMesh1.material.transparent = true;
faceMesh1.material.needsUpdate = true;

faceMesh2.material.map = texture2;
faceMesh2.material.transparent = true;
faceMesh2.material.needsUpdate = true;

scene.add(faceMesh1);
scene.add(faceMesh2);

//start function
const start = async() => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
        });
    }

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
startButton.addEventListener("click", () => {
    start();
});
stopButton.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
});
const changeFilter = document.querySelector("#changeButton")
var numofClick = 0;
changeFilter.addEventListener("click",()=>{
    numofClick++
    console.log(numofClick)
    if (numofClick%3===1){
        faceMesh1.material.map = texture2;
    } else if (numofClick%3===2){
        faceMesh1.material.map = texture3;
    } else{
        faceMesh1.material.map = texture;
    }
});