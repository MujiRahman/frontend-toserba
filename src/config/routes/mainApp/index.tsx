import React from 'react'
import { Footer } from '../../../components/moleculs/footer'
import { Header } from '../../../components/moleculs/header'
import { HomeRoute } from '../homeRoute';

interface Props{

}

export const MainApp: React.FC<Props> = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="fixed w-full z-20">
                <Header />
            </div>
            <div className="mt-24">
                <HomeRoute/>
            </div>
            <div className="relative whitespace-no-wrap">
                <Footer />
            </div>
        </div>
    );
}