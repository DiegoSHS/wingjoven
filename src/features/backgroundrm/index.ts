import { ImageSource, removeBackground } from '@imgly/background-removal-node'
async function removeImageBackground(imgSource: ImageSource) {
    removeBackground(imgSource)

}