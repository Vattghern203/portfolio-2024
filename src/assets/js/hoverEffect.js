document.getElementById("tech__container").onmousemove = e => {
    
    for (const card of document.querySelectorAll(".tech__card")) {
        
        const { currentTarget: target } = e
        
        const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top
        
        console.log(rect)
        
        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }
    
}