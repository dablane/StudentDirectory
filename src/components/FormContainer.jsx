
function FormContainer() {
  return (
    <section id="formContainer">
      <form id="studentForm">
        <div className="input-field">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter student name"
          />
        </div>

        <div className="input-field">
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            name="program"
            id="program"
            placeholder="Enter program"
          />
        </div>

        <div>
          <button type="submit">ADD STUDENT</button>
        </div>
      </form>
    </section>
  );
}

export default FormContainer;
