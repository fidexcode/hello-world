import { people } from './Data.js';

export default function List(){
  const listItems = people.map(person=>
    <li key={person.id}>
      <p>
        <b>{person.name}</b> 
        { ' ' + person.profession + ' ' }
        known for {person.accomplishment}
      </p>
    </li>
    )
  return(
    <>
    <ul>{listItems}</ul>
    </>
  )
}