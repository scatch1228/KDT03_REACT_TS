
export default function TestTs() {
let x : string = 'KDT';
let y : number = 123;
let isStudent : boolean = false;

let arr : number[] = [1,2,3];
let arr2 : Array<number> = [9,8,7];
let tup : [name:string, age:number] = ['kdt', 30];

let person = {name:'pnu', age:30};


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>TypeScript</h1>
      <ul>
        <li>String : {x}</li>
        <li>Number : {y}</li>
        <li>Boolean : {isStudent ? '학생' : '학생아님'}</li>
        <li>Array : [{arr.join(', ')}] </li>
        <li>Array/Generic : {arr2} </li>
        <li>Tuple : name={tup[0]} | age={tup[1]} </li>
        <li>Object : name={person.name} | age={person['age'
          
        ]} </li>
      </ul>
    </div>
  )
} 
