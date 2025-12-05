"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { on } from "events";

export default function MobileSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
            <Menu size={24} />
        </button>
        {isOpen && (
            <div className="fixed inset-0 z-50 flex">
                <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                ></div>
                <div className="relative w-64 bg-gray-900 h-full shadow-xl transition-transform animate-in slide-in-from-left duration-300">
                    <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-50"
                    >
                        <X size={24} />
                    </button>
                    <div onClick={() => setIsOpen(false)}>
                        <Sidebar />
                    </div>
                </div>
            </div>
        )}
        </>
    );
}