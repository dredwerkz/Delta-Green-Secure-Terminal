import { useState, useEffect } from "react";
import TerminalTitleProps from "./TerminalTitleProps";

function TerminalTitle(props: TerminalTitleProps) {
    const defaultTitle: string = props.title;
    const [titleMessage, setTitleMessage] = useState(defaultTitle);

    useEffect(() => {
        // Does the scramble effect on the terminal title for some nice flavour :)
        let scrambleCount: number = 0;
        let messageToScramble: string = titleMessage;

        const intervalId = setInterval(() => {
            function scrambleTitle() {
                const scrambledTitle: Array<string> =
                    messageToScramble.split("");
                const indexToChange: number = Math.floor(
                    Math.random() * messageToScramble.length
                );
                scrambledTitle[indexToChange] = String.fromCharCode(
                    scrambledTitle[indexToChange].charCodeAt(0) +
                        indexToChange * Math.floor(Math.random() * 50)
                );
                messageToScramble = scrambledTitle.join("");
                setTitleMessage(scrambledTitle.join(""));
            }
            scrambleTitle();

            scrambleCount++;
            if (scrambleCount >= 28) {
                setTitleMessage(defaultTitle);
                clearInterval(intervalId);
            }
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    return <h1>{titleMessage}</h1>;
}

export default TerminalTitle;
