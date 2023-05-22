import { Camera, Event, Object3D, Scene } from "three"
import { hotPoints } from '../json/hotPoints.json'

const cubeFun = (THREE: typeof import("three"), scene: Scene, camera: Camera) => {
  // 添加一个球体
  const geometry = new THREE.SphereGeometry(5, 32, 32)
  // 加载hdr环境图
  const texture = new THREE.TextureLoader().load('/src/assets/imgs/scene/scene.jpeg')
  const materials = new THREE.MeshBasicMaterial({ map: texture })
  const sphera = new THREE.Mesh(geometry, materials)
  // 也要进行旋转才能看到
  sphera.geometry.scale(1, 1, -1)
  scene.add(sphera)

  /**
   * 添加信息点
   * 
   * 在VR全景中，我们需要放置一些信息点，用户点击之后做一些动作。
   */
  // 添加信息点的指示图
  const pointTexture = new THREE.TextureLoader().load('/src/assets/imgs/scene/hot.png');
  const material = new THREE.SpriteMaterial({ map: pointTexture });

  const poiObjects: Object3D<Event>[] = [];


  hotPoints.forEach(point => {
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.1, 0.1, 0.1);
    sprite.position.set(point.position.x, point.position.y, point.position.z);

    scene.add(sprite);

    sprite.detail = point.detail;
    poiObjects.push(sprite);
  })


  document.querySelector(".container")?.addEventListener("click", function (event) {
    event.preventDefault();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / document.body.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / document.body.clientHeight) * 2 + 1;


    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(poiObjects);

    if (intersects.length > 0) {
      alert("点击了热点" + intersects[0].object.detail.title);
    }
  });



  return {

  }
}


export default cubeFun