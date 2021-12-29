import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'; 


let camera, scene, renderer;


const loader = new GLTFLoader();




export function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 4;
    camera.rotation.z = 4;

    scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0xffffff, 2); 
    scene.add(light);

	var mx = 300;
        var my = 500; 
        function saveMouse(event){
            mx = event.clientX;
            my = event.clientY;
        }
        document.onmousemove = saveMouse;
        var model;
        var boton = document.querySelector(".btn");
        var hero = document.querySelector(".hero");
        var plans = document.querySelector(".plans");

    loader.load("/models/drone/scene.gltf", (gltf)=>{
        model = gltf.scene;
        model.scale.set(.0, .0, .0);
        model.position.set( 1.55, 1.25, .0);
        

        gsap.to(camera.position, {
            z:1,
            dureation:1, 
            ease: "back.out(1,7)"
        })
        gsap.to(camera.rotation, {
            z:0,
            dureation:1, 
            ease: "back.out(1.7S)"
        })
        /*gsap.to(model.rotation,{
            y:Math.PI *3.75,
            duration:2,
            delay:1
        })*/
        gsap.to(model.scale,{
            delay:1,
            duration:1,
            
            x:.35,
            y:.35,
            z:.35
        })
        gsap.to(model.position,{
            delay:1,
            position:1,
            x:.55,
            y:0.15
        })
        
        
        boton.onclick = function(){
            gsap.to(model.position,{
                delay:0.2,
                position:1,
                x:.0,
                y:0.45   
            });
            gsap.to(model.scale,{
                delay:0,
                duration:1,
                
                x:.25,
                y:.25,
                z:.25
            });
            gsap.to(hero,{
                delay:0,
                duration:0.5,
                opacity:0,
                yPercent: -10
                
                 
            })
            gsap.to(hero,{
                delay:1,
                display:"none"   
            })
            gsap.to(plans,{
                delay:0.5,
                duration:1,
                opacity:1,
                yPercent: 10,
                display:"flex"
                
                 
            })
            
             
        }
        scene.add(model);
        
        
    })
    function myClick() {
        setTimeout(
          function() {
            model.rotation.y = mx/1500-1000; 
            model.rotation.x = my/1500-0.0;
          }, 1100);
      }
     


	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
    renderer.setClearColor(0xfa58c8c,1);
	document.body.appendChild( renderer.domElement );

    window.addEventListener('resize', ()=>{
        camera.aspect= window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    function droneMoveMouse() {};

    function droneMoveMouse() {
      setTimeout(
        function() {model.position.x = mx/2000;}, 1100);
        console.log(my)
    }
    
    function animation( time ) {
        myClick();
        
    
        renderer.render( scene, camera );
    
    }
    boton.onclick = function animation( time ) {
        myClick();
        droneMoveMouse()
    
        renderer.render( scene, camera );
    
    }
}

