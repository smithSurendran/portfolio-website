export function smoothScrollTo(elementid: string) {
    const element = document.getElementById(elementid)
    if (element) {
        const offset = 80 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }
}