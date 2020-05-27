import React from 'react';
import * as s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = ({users, ...props}) => {
    return (
        <>
            <Paginator
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
            />
            {users.map(user => <User
                user={user}
                key={user.id}
                isFetching={props.isFetching}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
            />)}
        </>
    )
}
export default Users