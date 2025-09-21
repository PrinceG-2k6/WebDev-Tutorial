function User({ displayName, name }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ marginRight: "10px" }}>{name}</span>
      <button onClick={() => displayName(name)}>Show Name</button>
    </div>
  );
}

export default User;
