import React from 'react';
import * as s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloder';
//import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) return <Preloader/>

    return (
        <>
            <div className={s.bigImageWrapper}>
                <img src={
                    profile.photos.large
                    || 'https://cdn2.hubspot.net/hubfs/2221797/cumulus2.jpg'
                } alt="big image"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={
                    profile.photos.small
                    || 'https://data.whicdn.com/images/331901362/original.jpg'
                } className={s.smallImage}/>
                <ul>
                    <li>
                        <a href={profile.contacts.github}>GitHub</a>
                    </li>
                    <li>
                        <a href={profile.contacts.vk}>VK</a>
                    </li>
                    <li>
                        <a href={profile.contacts.facebook}>Facebook</a>
                    </li>
                    <li>
                        <a href={profile.contacts.twitter}>Twitter</a>
                    </li>
                    <li>
                        <a href={profile.contacts.instagram}>Instagram</a>
                    </li>
                    <li>
                        <a href={profile.contacts.youtube}>Youtube</a>
                    </li>
                    <li>
                        <a href={profile.contacts.mainLink}>Link</a>
                    </li>
                </ul>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </>
    )
}
export default ProfileInfo