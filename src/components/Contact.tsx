

'use client'

import { headerItems } from '@/constants/constant';
import { Link as ScrollLink } from 'react-scroll';

export default function Contact() {
    return (
        <section id={headerItems.contact.page}
            className="relative md:h-full isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2>
                <p className="mt-2 text-lg text-gray-600">Feel free to reach out to me.</p>
            </div>
            <form action="https://formspree.io/f/xqaevrrd" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 p-6 border rounded-lg shadow-xl">
                <div className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="username" className="block font-bold text-xl text-gray-900">
                            Username
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xl font-bold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xl font-bold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
                    >
                        Let&apos;s talk
                    </button>

                </div>
            </form>
            <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            />
        </section>
    )
}
