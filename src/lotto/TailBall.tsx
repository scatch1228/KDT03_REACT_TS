const ballcolor = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
    ]

interface TailBallProps {
  n : number
}

export default function TailBall({n} : TailBallProps) {
    return (
    <div className={`flex flex-col justify-center items-center
    rounded-3xl text-white w-15 h-15 m-5
    ${ballcolor[Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
