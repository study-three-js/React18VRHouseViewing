import { Scene } from "three"
// 19.导入hdr文件数据加载器的RGBELoader 
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const cubeFun = (THREE: typeof import("three"), scene: Scene) => {
  // 9.添加立方体 (但是设置完看不到)
  // const geometry = new THREE.BoxGeometry(10, 10, 10)
  // const meterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // const cube = new THREE.Mesh(geometry, meterial)
  // scene.add(cube)

  // 15. 物体贴图
  // const cub_imgList = ['4_l', '4_r', '4_u', '4_d', '4_b', '4_f']
  // const boxMaterials: any[] | undefined = []
  // cub_imgList.forEach(imgName => {
  //   // 纹理加载
  //   const texture = new THREE.TextureLoader().load(`/src/assets/imgs/living/${imgName}.jpg`)

  //   // 17.是旋转后发现上面和下面的图片位置不正确，需要旋转
  //   if (imgName === '4_u' || imgName === '4_d') {
  //     // 旋转角度设置
  //     texture.rotation = Math.PI
  //     // 旋转中心设置
  //     texture.center = new THREE.Vector2(0.5, 0.5)
  //   }

  //   // 创建材质
  //   boxMaterials.push(new THREE.MeshBasicMaterial({
  //     map: texture
  //   }))
  // })
  // const cube = new THREE.Mesh(geometry, boxMaterials)

  // /**
  //  * 16. 把new THREE.BoxGeometry(1, 1, 1) 改成 new THREE.BoxGeometry(10, 10, 10)后
  //  * 导致在盒子内部设计黑漆漆的，需要将外部的贴图旋转到里面来
  //  * 
  //  * 但是旋转后发现上面和下面的图片位置不正确，需要旋转
  //  */
  // cube.geometry.scale(1, 1, -1)

  // scene.add(cube)


  // 18. 添加一个球体，使用hdr文件
  const geometry = new THREE.SphereGeometry(5, 32, 32)
  // 加载hdr环境图
  const rgbELoader = new RGBELoader()
  rgbELoader.load('/src/assets/imgs/hdr/Living.hdr', (texture) => {
    const materials = new THREE.MeshBasicMaterial({ map: texture })
    const sphera = new THREE.Mesh(geometry, materials)
    // 也要进行旋转才能看到
    sphera.geometry.scale(1, 1, -1)
    scene.add(sphera)
  })



  return {

  }
}


export default cubeFun