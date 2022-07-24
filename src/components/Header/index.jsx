import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { AiFillGithub as GithubIcon } from "react-icons/ai";

import LinkButton from "../LinkButton";

function Header() {

    const { pathname } = useLocation();

    return (
        <header className='fixed w-full flex items-center bg-[#121414] border-b-[1px] border-[#29292E] px-[168px] py-[22px]'>
            <nav className='w-full flex items-center'>
                <h1 className='text-[#E1E1E6] text-[32px] font-bold mr-[83px]'><Link to="/">articly</Link></h1>
                <ul className='flex items-center gap-[32px] text-[16px] text-[#A8A8B3]'>
                    <LinkButton
                        path={pathname}
                        expectedPath={"/"}
                        name="Home"
                    />

                    <LinkButton
                        path={pathname}
                        expectedPath={"/posts"}
                        name="Posts"
                    />
                </ul>
            </nav>

            <div>
                <button className='w-[218px] h-[48px] gap-[16px] flex justify-center items-center bg-[#1F2729] font-bold text-[16px] text-[#E1E1E6] rounded-full hover:opacity-50'>
                    <GithubIcon className='w-[21px] h-[21px] text-[#EBA417]' />
                    Sign in with Github
                </button> 
            </div>
        </header>
    );
}

export default Header;