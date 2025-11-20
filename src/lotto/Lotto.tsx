import TailBall from './TailBall'
import { useState } from 'react';
import TailButton from '../components/TailButton';

export default function Lotto() {
  let [tags, setTags] = useState<React.ReactElement[]>([]);
  let [tags1, setTags1] = useState<React.ReactElement[]>([]);
  let [bonus, setBonus] = useState<React.ReactElement>();

  const rd = () => {
    tags.length >= 6 ? tags.length=0 : console.log("go");
    setTags([]);
    console.log(tags.length);
    
    let numSet : Set<number> = new Set([]);
    while (numSet.size < 7) {
      let n = Math.floor(Math.random() * 45 + 1);
      numSet.add(n);
      console.log(numSet);
    }
    let nums : number[] = Array.from(numSet);

    let tags1 = nums.map(num => <TailBall key={num} n={num}/>);
    setTags1(tags1);


    for(const num of nums) {
      tags.push(<TailBall key={num} n={num}/>);
      setTags(tags);
      console.log(tags);
    }

    setBonus(tags.pop());
    console.log(bonus);
  }


  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row items-center'>
        {tags1}
        +
        {bonus}
      </div>
      <TailButton onHandle={rd} text='로또생성' color='blue' />
    </div>
  )
}
