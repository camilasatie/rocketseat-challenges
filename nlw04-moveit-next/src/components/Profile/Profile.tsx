import styles from './Profile.module.css'

function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/54333600?s=460&u=2f48a43f23142f0904e798e125164bf40bedee32&v=4" alt="avatar"/>

      <div>
        <strong>Camila Satie</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
