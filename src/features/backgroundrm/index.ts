import { ImageSource, removeBackground } from '@imgly/background-removal-node'

const blobToBuffer = async (blob: Blob): Promise<Buffer> => {
    try {
        const buffer = Buffer.from(await blob.arrayBuffer())
        return buffer
    } catch (error) {
        console.error('Error converting blob to buffer:', error)
        return Buffer.alloc(0)
    }
}

export async function removeImageBackground(imgSource: ImageSource) {
    const blob = await removeBackground(imgSource)
    const buffer = await blobToBuffer(blob)
    const dataURL = `data:image/png;base64,${buffer.toString('base64')}`
    return dataURL
}

