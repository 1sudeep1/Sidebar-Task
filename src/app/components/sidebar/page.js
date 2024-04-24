import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='border-red-500 p-10 border-r-2'>
            <ul>
                <li className='my-2'>
                    <Link href="/dashboard/board">
                        Board
                    </Link>
                </li>
                <li className='my-2'>
                    <Link href="/dashboard/task">
                        Task
                    </Link>
                </li>
                <li className='my-2'>
                    <Link href="/dashboard/members">
                        Members
                    </Link>
                </li>
                <li className='my-2'>
                    <Link href="/dashboard/project-settings">
                        Project Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
