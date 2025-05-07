import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'images/*', dest: 'images' },
        { src: 'blogentries/*.html', dest: 'blogentries' },
        { src: 'musicblogentries/*.html', dest: 'musicblogentries' }
      ]
    })
  ],
  
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        blog: './blog.html',
        music: './music.html'
      }
    }
  }
})