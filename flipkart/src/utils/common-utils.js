

// Ellipsis means ... line are not shown if we click it will be shown to us

export const addEllipsis = (text) =>{
    if(text.length > 50){
        return text.substring(0, 50) + '...';
     }
}