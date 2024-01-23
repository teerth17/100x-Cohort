export default function BussinessCard({name,description,interestItems,linkedin,twitter}) {
    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <p> {description}</p>
            <h3 style={styles.interestsHeader}> Interests</h3>
            <ul style={styles.interestsList}>
                {console.log(interestItems)}
                {interestItems.map((interest) => (
                    <li key={interest} style={styles.interestItem}>
                        {console.log(interest)}
                        {interest}
                    </li>
                ))}
            
            </ul>
             <div style={styles.socialLinks}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
            LinkedIn
          </a>
          <br />
          <a href={twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
        </div>
        </div>
    )
} 

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa'
    },
    name: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', 
      padding: '10px 15px', 
      borderRadius: '5px', 
      backgroundColor: '#007BFF', 
      display: 'inline-block',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
       interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
    },
}