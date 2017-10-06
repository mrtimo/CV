import * as React from 'react';
import { ProfileProps } from '../../types';

const styles = require('./Profile.module.scss');

const Profile = ({ children }: ProfileProps) => (
  <h2 className={styles.profile}>{children}</h2>
);

export default Profile;
