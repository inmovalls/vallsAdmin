const insertarUrls = (urls) => {
    let view = ``

    for (let i = 0; i < urls.length; i++) {    
        view += `
            <img src="${urls[i]}" id="imagen-con-id-${i}" style="width: 100px; height: 100px;">
        `;
    }

    return view
}


setTimeout(() => {
    const inputText = document.getElementById('imagenes_url')

    inputText.parentElement.parentElement.parentElement.style.display = 'block'
    inputText.parentElement.parentElement.style.maxWidth = '100%'
    inputText.parentElement.parentElement.style.width = '100%'

    const exp = /https?:\/\/[\w\-\.]+\.\w{2,6}\/?\S*/gi
    const imgUrls = inputText.value.match(exp)

    inputText.outerHTML += `
                <div id="vista-imagenes-url">
                    ${insertarUrls(imgUrls)}
                </div>
    `;

}, 3000);

