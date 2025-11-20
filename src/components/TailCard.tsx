interface TailCardProps{
    imgURL:string,
    title:string,
    date:string,
    p:string
}

export default function TailCard({ imgURL, title, date, p }:TailCardProps) {
    return (
        <div className='flex flex-col m-5 border p-5'>
            <img src={imgURL} />
            <h2 className='font-bold text-xl'>{title}</h2>
            <h3 className='font-semibold text-lg text-gray-600'> ({date}) </h3>
            <p className='text-gray-700'>{p}</p>
        </div>
    )
}
