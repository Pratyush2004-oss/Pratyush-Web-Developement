const s = document.querySelectorAll(".slide")
s.forEach((index,slide)=>{
    slide.style.left = `${index*100}%`
})
const slideImage = () =>{
    s.forEach((slide)=>{
        slide.style.transform = `translate(-${counter*100}%)`
    })
}