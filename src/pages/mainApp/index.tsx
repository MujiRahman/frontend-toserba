import React from 'react'
import { Footer } from '../../components/moleculs/footer'
import { Header } from '../../components/moleculs/header'
import { HomeRoute } from '../../config/routes/homeRoute';

interface Props{

}

export const MainApp: React.FC<Props> = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="mt-24 mb-32">
                <HomeRoute/>
            </div>
            <div className="relative whitespace-no-wrap w-screen">
                <Footer className="absolute inset-x-0 bottom-0"/>
            </div>
        </div>
    );
}