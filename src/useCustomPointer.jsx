import { useState, useEffect } from "react";

function useCustomPointer(pointerContent = "🔥") {
    // stato che salva la posizione attuale del mouse   
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // funzione che aggiorna la posizione del cursore
        const movePointer = (e) => {
            setPosition({
                x: e.clientX, //cordinata orizziontale del mouse
                y: e.clientY, //cordinata verticale del mouse 
            });
        };

        //aggiungo l'addEventListener per tracciare i movimenti del mouse 
        document.addEventListener('mousemove', movePointer);

        // funzione di cleanup

        return () => {
            document.removeEventListener('mousemove', movePointer);

        }
    }, []);

    //restituisce un elemento JSX che viene posizionato esattamente dove si trova il mouse 
    return (
        <div
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                fontSize: "2rem",
               
            }}
        >
            {pointerContent}
        </div>
    );

}

export default useCustomPointer; 