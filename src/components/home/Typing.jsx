import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ["Frontend Developer","Competetive Programmer"],
                    autoStart: true,
                    pauseFor: 1500,
                    loop: true,
                    delay:100,
                }}
            />
        </div>
    );
}
