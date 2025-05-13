
export default function QustionCard({question}) {
    const q={ question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "4" }

  return (
    <div className=" flex flex-col items-center gap-3 rounded-md">
      <h2>{q.question}</h2>
      {q.options.length > 0 ?q.options.map((option ,index)=>{
        return <div key={index} className=" cursor-pointer bg-green-500 p-1 text-[white] flex items-ceter justify-center w-100 rounded-md">{option}</div>
      }):''}
    </div>
  )
}
