import { ImageSource, removeBackground } from '@imgly/background-removal-node'

const blobToBuffer = async (blob: Blob): Promise<Buffer> => {
    const buffer = Buffer.from(await blob.arrayBuffer())
    return buffer
}

async function removeImageBackground(imgSource: ImageSource) {
    const blob = await removeBackground(imgSource)
    const buffer = blobToBuffer(blob)
    const dataURL = `data:image/png;base64,${buffer.toString('base64')}`
    return dataURL
}