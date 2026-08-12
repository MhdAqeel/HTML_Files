import React, { useState } from "react";

function InputDisplay() {
    const [text, setText] = useState("");

    const isTooLong = text.length > 50;

    return (
        <div>
            <h2>Type something:</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
            />
            <p>You typed: <strong>{text}</strong></p>

            {isTooLong && (
                <p style={{ color: "red" }}>
                    You are exceeding the limit
                </p>
            )}
        </div>
    );
}

export default InputDisplay;