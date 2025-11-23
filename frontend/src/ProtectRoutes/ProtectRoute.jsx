import React from 'react'
import useStatus from '../Hooks/useStatus';
import { Navigate, Outlet } from 'react-router-dom';
import { Status } from '../status/status';

export const ProtectOrderRoute = () => {

    const status = useStatus();

    /****************************  */
    if (status != Status?.active) {
        return <Navigate to={"/"} replace={true} />
    }
    else {
        return <Outlet />
    }
}


/****************************** Protect Form Route */

export const ProtectFormRoute = () => {

    const status = useStatus();
    if (status == Status?.active) {
        return <Navigate to={"/"} replace={true} />
    }
    else {
        return <Outlet />
    }
}
