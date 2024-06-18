import styles from "../Styles/applicationtable.module.css"
const ApplicationTable = () => {
    const dummyData = [
        {
          fullname: 'John Doe',
          email: 'john.doe@example.com',
          grantType: 'Business',
          projectBudget: '$100,000',
          requestedAmount: '$50,000',
          date: '2024-06-01',
          status: 'success'
        },
        {
          fullname: 'Jane Smith',
          email: 'jane.smith@example.com',
          grantType: 'Personal',
          projectBudget: '$20,000',
          requestedAmount: '$10,000',
          date: '2024-06-02',
          status: 'pending'
        },
        {
          fullname: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          grantType: 'Business',
          projectBudget: '$150,000',
          requestedAmount: '$75,000',
          date: '2024-06-03',
          status: 'failed'
        },
        // Add more dummy data as needed
      ];
    
      return (
        <div className={styles.container}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th style={{textAlign: "center"}}>Grant Type</th>
                  <th style={{textAlign: "center"}}>Project Budget</th>
                  <th style={{textAlign: "center"}}>Requested Amount</th>
                  <th style={{textAlign: "center"}}>Date</th>
                  <th style={{textAlign: "center"}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.fullname}</td>
                    <td>{data.email}</td>
                    <td style={{textAlign: "center"}}>{data.grantType}</td>
                    <td style={{textAlign: "center"}}>{data.projectBudget}</td>
                    <td style={{textAlign: "center"}}>{data.requestedAmount}</td>
                    <td style={{textAlign: "center"}}>{data.date}</td>
                    <td style={{textAlign: "center"}} className={styles[data.status]}>{data.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      );
    };

export default ApplicationTable