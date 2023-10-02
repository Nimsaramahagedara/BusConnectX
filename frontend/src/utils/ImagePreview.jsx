export const handleImageChange = (event, setImageCb,imageSrcCb) => {
    const previewFile = (img) => {
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onloadend = () => {
            imageSrcCb(reader.result)
        }
    }

    const file = event.target.files[0]
    //Need a SetState Function to set the File
    setImageCb(file);
    //Need a preview Image Function
    previewFile(file)
};