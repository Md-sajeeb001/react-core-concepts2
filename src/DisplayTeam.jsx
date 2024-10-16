export default function DisplayTeam({ team }) {
  const { name, username, id, email, phone, website } = team;
  return (
    <div
      style={{
        border: "2px solid yellow",
        borderRadius: "1rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <h2>
        Name: {name} <span style={{ color: "red" }}>Id: {id}</span>
      </h2>
      <h4>UserName: {username}</h4>
      {/* <li>Address: {address}</li> */}
      <li>Email: {email}</li>
      <li>Phone: {phone}</li>
      <li>Website: {website}</li>
    </div>
  );
}
