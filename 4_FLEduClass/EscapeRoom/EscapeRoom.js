import * as THREE from 'three';
import {MindARThree} from 'mindar-image-three';
import {loadGLTF, loadAudio} from '../../applications/libs/loader.js';

document.addEventListener('DOMContentLoaded',() => {
    const start = async () => {

        // initialize MindAR 
        const mindarThree = new MindARThree({
            container: document.body,
            imageTargetSrc: './MultiTarget.mind',
          });
        const {renderer, scene, camera} = mindarThree;

        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);


        //create anchor
        const Anchor1 = mindarThree.addAnchor(0);
        const Anchor2 = mindarThree.addAnchor(1);
        const Anchor3 = mindarThree.addAnchor(2);

        
        const audioClip1 = await loadAudio("./MusicSource/AudioSource.mp3");
        const audioClip2 = await loadAudio("./MusicSource/ItsMeMario.mp3");
        const audioClip3 = await loadAudio("./MusicSource/AudioSource.mp3");

        const listner = new THREE.AudioListener();
        camera.add(listner);
        const audio = new THREE.PositionalAudio(listner);
        const audio2 = new THREE.PositionalAudio(listner);

        Anchor1.group.add(audio);
        audio.setRefDistance(100000); //값을 바꿔가면서 테스트해봐야 함
        audio.setBuffer(audioClip1);
        audio.setLoop(true);

        Anchor2.group.add(audio);
        audio2.setRefDistance(100000); //값을 바꿔가면서 테스트해봐야 함
        audio2.setBuffer(audioClip2);
        audio2.setLoop(true);

        Anchor3.group.add(audio);
        audio.setRefDistance(100000); //값을 바꿔가면서 테스트해봐야 함
        audio.setBuffer(audioClip3);
        audio.setLoop(true);


        //Multiple Detection을 사용할 때 필요할 수 있음
        Anchor1.onTargetFound = () => {
            console.log("on target found");
            audio.play();
        }

        Anchor1.onTargetLost = () => {
            console.log("on target lost");
            audio.pause();
        }

        Anchor2.onTargetFound = () => {
            console.log("on target found");
            audio2.play();
        }

        Anchor2.onTargetLost = () => {
            console.log("on target lost");
            audio2.pause();
        }

        // start AR
        await mindarThree.start();
        renderer.setAnimationLoop(()=>{
            renderer.render(scene, camera);
        });
    }
    start();
});