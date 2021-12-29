import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';



let camera, scene, renderer;


const loader = new GLTFLoader();


export function init2() {
    var container = document.getElementById( 'cont' );
    document.body.appendChild( container );
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 3;
   
    

    scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0xffffff, 2); 
    scene.add(light);

	

    
    /*Modelo 3*/
    loader.load("/models/starwar2/scene.gltf", (gltf)=>{
        let model3 = gltf.scene;
        model3.scale.set(10, 10, 10)
        
        
        
       
        scene.add(model3)
    });


   
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize(200,200);
	renderer.setAnimationLoop( animation );
    renderer.setClearColor(0x3fff82,1);
	container.appendChild( renderer.domElement );

    container.addEventListener('resize', ()=>{
        camera.aspect= container.innerWidth / container.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.innerWidth, container.innerHeight);
    });

}

function animation( time ) {


    
	renderer.render( scene, camera );

}