// To convert dataUrl (which we get from our blob) to a a file object
export default function dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let i = bstr.length - 1;
    const u8arr = new Uint8Array(bstr.length);
    for (i = bstr.length - 1; i >= 0; i -= 1) {
        u8arr[i] = bstr.charCodeAt(i);
    }
    console.log(u8arr);
    console.log(mime);
    return new File([u8arr], filename, { type: mime });
}
