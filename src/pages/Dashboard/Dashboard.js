import Card from '../../pages/Card/Card'
function Dashboard() {
  return (
    <div className="user_dashboard">
      <div className="middle_container">
        <div className="heading">
          <p className="greeting">Morning</p>
          <h3 className="name">Hi, Karun</h3>
        </div>
        <div className="Pending">
          <h4 className="title">Pending</h4>
          <Card 
          title="First" 
          type='noack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
        </div>
        <div className="Waiting">
          <h4 className="title">Waiting for acknowlegment</h4>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
