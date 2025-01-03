import { useEffect, useState } from 'react'

const useScrollDirection = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setIsScrollingUp(false) // Hacia abajo
            } else if (currentScrollY < lastScrollY) {
                setIsScrollingUp(true) // Hacia arriba
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return isScrollingUp
}

export default useScrollDirection
