// 11. 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const initFun = (THREE: typeof import("three")) => {
  // 2. 初始化场景
  const scene = new THREE.Scene()

  // 3. 初始化相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  // 10.设置相机位置 (才能见到物体) 尽量靠近相机位置更逼真5 ---> 0.1
  camera.position.z = 0.1 // 这里只能看到z轴的面，需要添加控制器进行查看物体

  // 4. 初始化渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)


  // 7.定义一个渲染函数
  const render = () => {
    // 14.需要动态更新
    controls.update()

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }

  // 12.添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  // 13. 添加控制器阻尼的感觉,让控制器更有真实效果
  controls.enableDamping = true

  return {
    // 渲染器
    renderer,
    // 渲染函数
    render,
    // 场景
    scene
  }
}


export default initFun