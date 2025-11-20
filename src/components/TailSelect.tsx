interface TailSelectProps{
    id:string,
    title:string,
    optionKeys:string[],
    optionValues:string[],
    onHandle:()=>void,
    ref:React.RefObject<HTMLSelectElement>
}

export default function TailSelect({id, title, optionKeys, optionValues, onHandle, ref}:TailSelectProps) {
    const options = optionKeys.map((key,idx)=><option key={idx} value={optionValues[idx]}>{key}</option>);
    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <select id={id} 
            onChange={onHandle}
            ref={ref}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="selected">{title} 선택</option>
                {options}
            </select>
        </form>
    )
}
