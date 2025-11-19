
export default function TestTs() {
let x : string = 'KDT';
let y : number = 123;
let isStudent : boolean = false;

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>TypeScript</h1>
      <ul>
        <li>String : {x}</li>
        <li>Number : {y}</li>
        <li>Boolean : {isStudent ? '학생' : '학생아님'}</li>
        
      </ul>
    </div>
  )
}
