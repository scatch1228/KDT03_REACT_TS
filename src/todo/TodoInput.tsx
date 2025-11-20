import { useRef } from 'react'
import TailButton from '../components/TailButton'
import { supabase } from "../supabase/client"

interface TodoInputProps {
  getTodo: () => void,
}

export default function TodoInput({ getTodo }: TodoInputProps) {
  const toAdd = useRef<HTMLInputElement>(null);

  const handleAdd = async () => {
    if (toAdd.current?.value.replaceAll(" ", "") == "") {
      alert("할 일을 입력하세요?!");
      toAdd.current.focus();
    }
    //=======================================
    else {
      const { error } = await supabase
        .from('todos')
        .insert([
          { text: toAdd.current?.value },
        ]);
      if (error) {
        console.error('Error adding todo:', error);
      } else {
        getTodo();
        toAdd.current!.value = "";
        toAdd.current?.focus();
      }
    }
    //=======================================
  }

  return (
    <div className='flex flex-row items-center justify-between'>
      <input type='text' className='border border-gray-600 w-8/10' ref={toAdd} />
      <TailButton color='blue' text='추가' onHandle={handleAdd} />
    </div>
  )
}
