import { useEffect, useState } from 'react';

const useScrollDirection = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isManualScroll, setIsManualScroll] = useState(false); // Estado para detectar scroll manual

    useEffect(() => {
        const handleScroll = () => {
            if (isManualScroll) return; // Evitar que la lógica de scroll normal se ejecute durante el scroll manual

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsScrollingUp(false); // Hacia abajo
            } else if (currentScrollY < lastScrollY) {
                setIsScrollingUp(true); // Hacia arriba
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isManualScroll]);

    // Función para activar y desactivar el scroll manual
    const setManualScroll = (scrolling) => {
        setIsManualScroll(scrolling);

        // Después de un retraso, desactivamos el scroll manual
        if (!scrolling) {
            setTimeout(() => {
                setIsManualScroll(false);
            }, 500); // Ajusta el tiempo según sea necesario
        }
    };

    return { isScrollingUp, setManualScroll };
};

export default useScrollDirection;
