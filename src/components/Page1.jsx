import React from "react";
import { useNavigate } from "react-router-dom";
function Page1() {


    return (
        <div className="p-8 m-16 bg-gray-50">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">The history of the English language spans several stages, each influenced by cultural and historical shifts.Lets Explore more about it!</h1>
            <p>1. Old English (450–1150)
                Origins: English began with the 5th-century invasion of Britain by Germanic tribes (Angles, Saxons, and Jutes), forming Old English.
                Latin Influence: Christian missionaries added Latin vocabulary to the language.
                Characteristics: Old English was highly inflected and largely Germanic in vocabulary, though only about 20% of its words are still in use.
                2. Middle English (1150–1500)
                Norman Conquest (1066): The Normans brought French to England, and the blend of Old English with Norman French influenced vocabulary, especially in law, government, and art.
                Grammar Simplification: The language evolved with simplified grammar, setting the foundation for Modern English.
                3. Early Modern English (1500–1700)
                Renaissance Influence: Greek and Latin vocabulary entered English, spurred by cultural revival.
                Printing Press: William Caxton’s printing press standardized English spelling and grammar.
                Great Vowel Shift: This change in pronunciation marked the transition toward sounds in contemporary English.
                4. Modern English and Global Spread (1700–Present)
                Colonial Influence: English spread through the British Empire, absorbing vocabulary from many cultures. The American variant emerged with distinct spelling and vocabulary.
                Technology and the Internet: In the 20th century, English spread rapidly with media and digital communication, adapting to global influences and becoming a lingua franca in science, business, and entertainment.
                <p className="text-gray-800 leading-relaxed">
                    Each phase reflects how English evolved and adapted, becoming the dynamic, international language it is today.</p>
            </p>
        </div>
    )
}
export default Page1;