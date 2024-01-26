import React, { useState, useRef, useEffect } from 'react'
import "./Card.css"

function Card() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("slide-in");
            });
        } else {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("slide-in");
            });
        }
    }, [isIntersecting]);

    return (

        
            <div className="App">
                <header>Features</header>
                <main ref={ref}>
                    <div className="child-one">Card 1</div>
                    <div className="child-two">Card 2</div>
                </main>
                
            </div>


       





    )
}

export default Card