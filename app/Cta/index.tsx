import { Button } from '@/components/button'
import React from 'react'

export default function Cta() {
    return (
        <div>
            <a href="/contato">
                <Button
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 lg:py-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 lg:text-[1.5rem] "
                >
                    Solicitar Demonstração
                </Button>
            </a>
        </div>
    )
}
