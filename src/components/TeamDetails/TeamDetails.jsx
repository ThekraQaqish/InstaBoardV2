import { useLocation, useNavigate} from 'react-router-dom';

import './TeamDetails.css';
export default function TeamDetails({ darkMode }) {
    const location = useLocation();
    const user = location.state?.user;
   
    const navigate = useNavigate();
    if (!user) {
        navigate('/team');
        return null;
    }
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

     return (
        <div className={`team-details-wrapper ${darkMode ? 'dark' : 'light'}`}>

            <div className="cover-photo">
            <img src={`${process.env.PUBLIC_URL}/images/cover.jpg`} alt="cover" />

                <img 
                    src={user.picture.large} 
                    alt="ProfilePic" 
                    className="profile-picture" 
                />
            </div>

            <div className="content">
                <h1>{fullName}</h1>
                <section>
                    <h2>Personal Info</h2>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})</p>
                    <p><strong>Nationality:</strong> {user.nat}</p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Cell:</strong> {user.cell}</p>
                    {user.website && <p><strong>Website:</strong> {user.website}</p>}
                </section>

                <section>
                    <h2>Address</h2>
                    <p>{user.location.street.number} {user.location.street.name}</p>
                    <p>{user.location.city}, {user.location.state}</p>
                    <p>{user.location.country} - {user.location.postcode}</p>
                </section>

                {user.company && (
                    <section>
                        <h2>Company</h2>
                        <p><strong>Name:</strong> {user.company.name}</p>
                        <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
                        <p><strong>Business:</strong> {user.company.bs}</p>
                    </section>
                )}

                <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );

}