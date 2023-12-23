import { people } from './Data.js';

export default function List(){

  const chemist = people.filter(person=>
    person.profession === 'chemist'
    );

    const everyOneElse = people.filter(person=>
      person.profession !== 'chemist'
      )
  return(
    <>
    <article>
      <h1>Scientist</h1>
      <h2>Chemist</h2>
      <ul>
        {chemist.map(person=>
        <li key={person.id}>
          <p>
            <b>{person.name}:</b>
            { ' ' + person.profession + ' '}
            known for { ' ' + person.accomplishment}
          </p>
        </li>
          )}
      </ul>
      <h2>Every one else</h2>
      <ul>
        {everyOneElse.map(person=>
        <li key={person.id}>
          <p>{
            <b>{person.name}:</b>}
            { ' ' + person.profession + ' '}
            known for {' ' + person.accomplishment}
            </p>
        </li>
          )}
      </ul>
    </article>
    </>
  )
}