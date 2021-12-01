import React from 'react'
import { Footer } from '../../../components/moleculs/footer'
import { HomeRoute } from '../homeRoute';
import NotLogin from '../notLogin';

interface Props{

}

export const MainApp: React.FC<Props> = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="fixed w-full z-20">
                <NotLogin />
            </div>
            <div className="mt-24">
                <HomeRoute/>
            </div>
            <div className="relative">
                <Footer />
            </div>
        </div>
    );
}