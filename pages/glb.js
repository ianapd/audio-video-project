import { Box, Container, Heading, Button } from '@chakra-ui/react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Scene, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding, EquirectangularReflectionMapping } from 'three'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Glb() {
  let camera, scene, renderer

  useEffect(() => {
    loadGLTF()
    render()
  }, [])

  function loadGLTF() {
    const container = document.getElementById('main-box')

		document.body.appendChild( container )

    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100 )
		camera.position.set( - 1.8, 2, 5 )

    scene = new Scene()

    new RGBELoader()
    .setPath( './assets/')
    .load('studio_small_08_2k.hdr', function ( texture ) {

      texture.mapping = EquirectangularReflectionMapping

      scene.background = texture
      scene.environment = texture

      render()

      const loader = new GLTFLoader().setPath( './assets/glb/source/Glb/' )
      loader.load('KAPO190019-AR.glb', 
        function ( glb ) {
          scene.add( glb.scene )
          render()
        },

        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },

        function ( error ) {
          console.log( 'An error happened: ' + error )
        }
      )
    })

    renderer = new WebGLRenderer( { antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    renderer.outputEncoding = sRGBEncoding
    container.appendChild( renderer.domElement )

    const controls = new OrbitControls( camera, renderer.domElement )
    controls.addEventListener( 'change', render )
    controls.minDistance = 1
    controls.maxDistance = 10
    controls.target.set( 0, 0, - 0.2 )
    controls.update()

    window.addEventListener( 'resize', onWindowResize() )
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize( window.innerWidth, window.innerHeight )

    render()
  }

  function render() {
    renderer.render(scene, camera)
  }

  return (
    <Box mt={16}>
      <Container maxW="container.lg" mb={8}>
        <Heading mb={4}>Glb File</Heading>
        <Link href="/">
          <Button>Back to home page</Button>
        </Link>
      </Container>
      <Box id="main-box" />
    </Box>
  )
}