interface TailInputProps{
  type:string,
  name:string,
  ref:React.RefObject<HTMLInputElement>
}

export default function TailInput({type, name, ref}:TailInputProps) {
  return (
    <div>
      <input type={type} name={name} ref={ref} className='w-8/10 p-2 border' />
    </div>
  )
}
