import { Box, Button, Container, Heading, Link, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box mt={16}>
      <Container maxW="container.lg">
        <Heading mb={8}>Audio Players</Heading>
        <Heading size="lg" mb={4}>MP3 File</Heading>
        <audio controls>
          <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3" type="audio/mp3" />
        </audio>
        <Heading size="lg" my={4}>WAV File</Heading>
        <audio controls>
          <source src="http://labrosa.ee.columbia.edu/sounds/music/around_the_world-atc-midi.wav" type="audio/wav" />
        </audio>
        <Heading size="lg" my={4}>OGA File</Heading>
        <audio controls>
          <source src="https://mario.wiki.gallery/images/a/a2/Example.oga" />
        </audio>
        <Heading size="lg" my={4}>OGG File</Heading>
        <audio controls>
          <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/lose.ogg" type="audio/ogg" />
        </audio>
        <Heading my={8}>3D Video Player</Heading>
        <Heading size="lg" my={4}>GLTF File</Heading>
        <Link href="/gltf">
          <Button>View GLTF</Button>
        </Link>
        <Heading size="lg" my={4}>GLB File</Heading>
        <Link href="/glb">
          <Button>View GLB</Button>
        </Link>
        <Heading my={8}>Video Players</Heading>
        <Heading size="lg" my={4}>WEBM File</Heading>
        <video controls>
          <source src="https://files.catbox.moe/9t731a.webm" type="video/webm" />
        </video>
        <Heading size="lg" my={4}>MP4 File</Heading>
        <video controls>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
        <Heading size="lg" my={4}>M4V File</Heading>
        <video controls>
          <source src="https://sites.lafayette.edu/newquisk/files/2011/08/ken-video.m4v" type="video/mp4" />
        </video>
        <Heading size="lg" my={4}>OGV File</Heading>
        <video controls>
          <source src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Xacti-AC8EX-Sample_video-001.ogv" type="video/ogg" />
        </video>
        <Heading size="lg" my={4}>OGG File</Heading>
        <video controls>
          <source src="https://file-examples-com.github.io/uploads/2018/04/file_example_OGG_480_1_7mg.ogg" type="video/ogg" />
        </video>
      </Container>
    </Box>
  )
}
