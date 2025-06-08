import { ImageSource, removeBackground } from '@imgly/background-removal'

const blobToBuffer = async (blob: Blob): Promise<Buffer> => {
    try {
        console.log('Converting blob to buffer...')
        const buffer = Buffer.from(await blob.arrayBuffer())
        return buffer
    } catch (error) {
        console.error('Error converting blob to buffer:', error)
        return Buffer.alloc(0)
    }
}

export async function removeImageBackground(imgSource: ImageSource) {
    console.log('Removing image background...')
    console.log('Image source: ', imgSource)
    const blob = await removeBackground(imgSource)
    const buffer = await blobToBuffer(blob)
    const dataURL = `data:image/png;base64,${buffer.toString('base64')}`
    return dataURL
}

