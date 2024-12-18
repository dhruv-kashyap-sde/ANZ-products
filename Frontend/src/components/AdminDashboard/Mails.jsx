import "./Mail.css";
const Mails = () => {
  const data = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alicejohnson@email.com",
      phone: "123-456-7890",
      message: "Hello, how are you?",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bobsmith@email.com",
      phone: "456-789-1234",
      message: "Looking forward to the meeting.",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charliebrown@email.com",
      phone: "789-123-4567",
      message: "Can you send me the documents?",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "dianaprince@email.com",
      phone: "321-654-0987",
      message: "I will call you later.",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethanhunt@email.com",
      phone: "567-890-1234",
      message: "Mission completed successfully.",
    },
  ];
  return (
    <>
      <div className="mail-header">
        <h1>Mails</h1>
        <hr />
          <div className="table-container">
            <table className="responsive-table ">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="italic-text">{item.id}</td>
                    <td className="italic-text">{item.name}</td>
                    <td className="italic-text">{item.email}</td>
                    <td className="italic-text">{item.phone}</td>
                    <td className="italic-text">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
};

export default Mails;
