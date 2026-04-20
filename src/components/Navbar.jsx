import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initial theme setup from localStorage or system prefs
    useEffect(() => {
        const root = document.documentElement;
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
            setIsDarkMode(true);
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar-light dark:bg-navbar-dark border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-4 md:px-12 justify-between">
            <div className="flex items-center">
                <span className="text-[#2563EB] font-bold text-2xl tracking-tight">KoinX</span>
                <span className="text-[#F59E0B] font-bold text-[10px] ml-0.5 mt-[-10px]">®</span>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-500" />}
                </button>
                <div className="md:hidden">
                    <div className="flex flex-col gap-1.5 w-6 cursor-pointer items-end">
                        <div className="h-0.5 w-full bg-gray-600 dark:bg-gray-300"></div>
                        <div className="h-0.5 w-3/4 bg-gray-600 dark:bg-gray-300"></div>
                    </div>
                </div>
                <div className="hidden md:flex gap-6 items-center font-medium text-gray-600 dark:text-gray-300">
                    <a href="#" className="hover:text-blue-600">Exchange</a>
                    <a href="#" className="hover:text-blue-600">Knowledge Base</a>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        AV
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
