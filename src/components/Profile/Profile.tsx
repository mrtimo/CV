import * as React from 'react';

const styles = require('./Profile.module.scss');

interface ProfileProps {
  children?: string;
}

const Profile = ({ children }: ProfileProps) => (
  <h2 className={styles.profile}>{children}</h2>
);

export default Profile;
