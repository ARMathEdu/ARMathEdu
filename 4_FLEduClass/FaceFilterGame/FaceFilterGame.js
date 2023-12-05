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

//adding face mesh - 시작: blank mesh 넣어두기
const faceMesh1 = mindarThree.addFaceMesh();
const faceMesh2 = mindarThree.addFaceMesh();
const faceMesh3 = mindarThree.addFaceMesh();
const faceMesh4 = mindarThree.addFaceMesh();
const faceMesh5 = mindarThree.addFaceMesh();
const faceMesh6 = mindarThree.addFaceMesh();
const faceMesh7 = mindarThree.addFaceMesh();

const blankTexture = await loadTexture("./0_blank.png")

faceMesh1.material.map = blankTexture;
faceMesh1.material.transparent = true;
faceMesh1.material.needsUpdate = true;

faceMesh2.material.map = blankTexture;
faceMesh2.material.transparent = true;
faceMesh2.material.needsUpdate = true;

faceMesh3.material.map = blankTexture;
faceMesh3.material.transparent = true;
faceMesh3.material.needsUpdate = true;

faceMesh4.material.map = blankTexture;
faceMesh4.material.transparent = true;
faceMesh4.material.needsUpdate = true;

faceMesh5.material.map = blankTexture;
faceMesh5.material.transparent = true;
faceMesh5.material.needsUpdate = true;

faceMesh6.material.map = blankTexture;
faceMesh6.material.transparent = true;
faceMesh6.material.needsUpdate = true;

faceMesh7.material.map = blankTexture;
faceMesh7.material.transparent = true;
faceMesh7.material.needsUpdate = true;


scene.add(faceMesh1);
scene.add(faceMesh2);
scene.add(faceMesh3);
scene.add(faceMesh4);
scene.add(faceMesh5);
scene.add(faceMesh6);
scene.add(faceMesh7);

//제작한 faceFilter 추가하기
const texture1 = await loadTexture("./FaceMesh_Sample.png")
const texture2 = await loadTexture("./FaceMesh_Sample2.png")
const texture3 = await loadTexture("./FaceMesh_Sample5.png")

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

// const changeFilter = document.querySelector("#changeButton")
// var numofClick = 0;
// changeFilter.addEventListener("click",()=>{
//     numofClick++
//     console.log(numofClick)
//     if (numofClick%3===1){
//         faceMesh1.material.map = texture2;
//     } else if (numofClick%3===2){
//         faceMesh1.material.map = texture3;
//     } else{
//         faceMesh1.material.map = texture;
//     }
// });

//Hidden Button Showing Code
const category1 = document.querySelector('#categoryButton1')
const category2 = document.querySelector('#categoryButton2')
const category3 = document.querySelector('#categoryButton3')
const category4 = document.querySelector('#categoryButton4')
const category5 = document.querySelector('#categoryButton5')
const category6 = document.querySelector('#categoryButton6')
const category7 = document.querySelector('#categoryButton7')

const changeButton1 = document.querySelector('#changeButton1')
const changeButton2 = document.querySelector('#changeButton2')
const changeButton3 = document.querySelector('#changeButton3')
const changeButton4 = document.querySelector('#changeButton4')
const changeButton5 = document.querySelector('#changeButton5')
const changeButton6 = document.querySelector('#changeButton6')
const changeButton7 = document.querySelector('#changeButton7')


category1.addEventListener("click",()=>{
    changeButton1.style.display = "inline-block";
    changeButton2.style.display = "none";
    changeButton3.style.display = "none";
    changeButton4.style.display = "none";
    changeButton5.style.display = "none";
    changeButton6.style.display = "none";
    changeButton7.style.display = "none";
})
category2.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "inline-block";
    changeButton3.style.display = "none";
    changeButton4.style.display = "none";
    changeButton5.style.display = "none";
    changeButton6.style.display = "none";
    changeButton7.style.display = "none";
})
category3.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
    changeButton3.style.display = "inline-block";
    changeButton4.style.display = "none";
    changeButton5.style.display = "none";
    changeButton6.style.display = "none";
    changeButton7.style.display = "none";
})
category4.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
    changeButton3.style.display = "none";
    changeButton4.style.display = "inline-block";
    changeButton5.style.display = "none";
    changeButton6.style.display = "none";
    changeButton7.style.display = "none";
})
category5.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
    changeButton3.style.display = "none";
    changeButton4.style.display = "none";
    changeButton5.style.display = "inline-block";
    changeButton6.style.display = "none";
    changeButton7.style.display = "none";
})
category6.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
    changeButton3.style.display = "none";
    changeButton4.style.display = "none";
    changeButton5.style.display = "none";
    changeButton6.style.display = "inline-block";
    changeButton7.style.display = "none";
})
category7.addEventListener("click",()=>{
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
    changeButton3.style.display = "none";
    changeButton4.style.display = "none";
    changeButton5.style.display = "none";
    changeButton6.style.display = "none";
    changeButton7.style.display = "inline-block";
})

//changeFunction - category 1
var numofClickCat1 = 0;
changeButton1.addEventListener("click",()=>{
    numofClickCat1++
    if (numofClickCat1%3===1){
        faceMesh1.material.map = texture1;
    } else if (numofClickCat1%3===2){
        faceMesh1.material.map = texture2;
    } else{
        faceMesh1.material.map = blankTexture;
    }
});

//changeFunction - category 2
var numofClickCat2 = 0;
changeButton2.addEventListener("click",()=>{
    numofClickCat2++
    if (numofClickCat2%3===1){
        faceMesh2.material.map = texture1;
    } else if (numofClickCat2%3===2){
        faceMesh2.material.map = texture2;
    } else{
        faceMesh2.material.map = blankTexture;
    }
});