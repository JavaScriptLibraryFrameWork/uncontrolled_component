export const UncontrolledForm = () => {

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    console.log(name, age);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="submit" value="Submit" />
    </form>
  )
}