import { useEffect, useState } from "react";

function useKeyPress(targetKey) {

    // stato che indica se il tasto è premuto oppure no
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        // quando premi un tasto
        const handleKeyDown = (e) => {
            if (e.key === targetKey) {
                setIsPressed(true);
            }
        };

        // quando rilasci un tasto
        const handleKeyUp = (e) => {
            if (e.key === targetKey) {
                setIsPressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [targetKey])
    return isPressed;
}

export default useKeyPress; 