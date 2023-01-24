import React from 'react'
import Button from './Button';

const Input = () => {
    return (
        <div className="my-20 space-y-4 dark:bg-blue bg-lighter-blue p-8 rounded-md">
            <h1 className="text-xl dark:text-white uppercase tracking-widest">
                wow, cool form!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First name */}
                <div>
                    <label htmlFor="f_name" className="hidden">
                        Name
                    </label>
                    <input
                        className="border-2 focus:border-blue w-full p-2 rounded outline-none border-light-blue"
                        id="f_name"
                        name="f_name"
                        placeholder="First name"
                    />
                </div>
                {/* Last name */}
                <div>
                    <label htmlFor="l_name" className="hidden">
                        Name
                    </label>
                    <input
                        className="border-2 focus:border-blue w-full p-2 rounded outline-none border-light-blue"
                        id="l_name"
                        name="l_name"
                        placeholder="Last name"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Country */}
                <div>
                    <label htmlFor="country" className="hidden">
                        Country
                    </label>
                    <input
                        className="border-2 focus:border-blue w-full p-2 rounded outline-none border-light-blue"
                        id="country"
                        name="country"
                        placeholder="Country"
                    />
                </div>
                {/* Country */}
                <div>
                    <label htmlFor="country" className="hidden">
                        Postcode
                    </label>
                    <input
                        className="border-2 focus:border-blue w-full p-2 rounded outline-none border-light-blue"
                        id="postcode"
                        name="postcode"
                        placeholder="L3 3E7"
                    />
                </div>
                {/* Country */}
                <div>
                    <label htmlFor="country" className="hidden">
                        Telephone
                    </label>
                    <input
                        className="border-2 focus:border-blue w-full p-2 rounded outline-none border-light-blue"
                        id="telephone"
                        name="telephone"
                        placeholder="Telephone"
                    />
                </div>
            </div>
            <div className='flex justify-end'>
                <Button color="green" classNames="w-[10%]">
                    Save
                </Button>
            </div>
        </div>
    )
}

export default Input;