import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { memo } from 'react';

import "./ProfileButton.scss"

interface propsModel {
    clickHandler : () => void
}

const ProfileButton = ({clickHandler}: propsModel) => {
  return (
    <div className='profile-button-container' onClick={clickHandler}>
        <AccountCircleIcon fontSize='large' />
    </div>
  )
}

export default memo(ProfileButton)