
import { useState } from "react";
import questions from "./Question.json"


const Questions = ({setOver}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)

    console.log(score);


    const handleOptionClick = (selectedOpt: string) => {
        // console.log(selectedOpt);
        if (selectedOpt === questions[currentIndex].answer) {
            setScore(prev => prev + 1)
        }
        if(currentIndex  < questions.length-1){

            setCurrentIndex(prev => prev+ 1)
        } else{
            setOver(true)
        }
    }

    // console.log(questions[currentIndex]);

    return (
        <div>

            <h2 className="mt-8 mb-4">{questions[currentIndex].question}</h2>
            <div className="flex flex-col gap-2 mt-2">

                {
                    questions[currentIndex].options.map((opt) => (
                        <button className="px-2 py-2 bg-black text-stone-100 rounded-xl cursor-pointer hover:bg-black/80"
                            key={opt}
                            onClick={() => handleOptionClick(opt)}
                        >
                            {opt}
                        </button>
                    ))
                }
            </div>

        </div>
    )
}

export default Questions