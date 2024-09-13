'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Route = ({ routeName, routePath }) => {
    return (
        <div className='bg-neutral-900 rounded-sm p-2'>
            <Link className="font-mono text-white text-md text-center mx-1 hover:underline  focus:no-underline focus:text-red-500" href={routePath}>{routeName}</Link>
        </div>
    );
};

const ConnectRoute = ({ routeName, routePath }) => {
    return (
        <Link className="font-mono text-white text-md text-center hover:scale-105" href={routePath}>
            <div className='bg-red-500 hover:bg-red-600 rounded-sm p-2'>
                {routeName}
            </div>
        </Link>
        
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex sm:items-center my-3'>
            <div className='flex w-full sm:w-1/5 ml-5'>
                <Link href={'/'} className='font-mono text-red-500 hover:text-white text-3xl text-center'>DP•2024</Link>
            </div>
            <div className="flex sm:hidden justify-end items-center w-full pr-5">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
                </button>
            </div>
            <div className={`flex-col sm:flex sm:flex-row justify-end items-center w-full sm:w-4/5 mr-5 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
                <Route routeName={'HOME'} routePath={'/'} />
                <Route routeName={'PROJECTS'} routePath={'/projects'} />
                <Route routeName={'EXPERIENCE'} routePath={'/experience'} />
                <Route routeName={'ABOUT'} routePath={'/about'} />
                <ConnectRoute routeName={'LET\'S CONNECT'} routePath={'/connect'} />
            </div>
        </div>
    );
}
