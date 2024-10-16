

export default function Display({friend}) {
  console.log(friend);
  const { name, email, id } = friend;
  return (
    <div style={{border: '2px solid red', padding: '1rem', margin: '1rem', borderRadius: '1rem'}}>
      <h5>Name: {name}</h5>
      <li>Email: {email}</li>
      <li>ID: {id}</li>
    </div>
  );
}
