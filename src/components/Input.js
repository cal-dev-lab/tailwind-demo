import React from 'react'

const Input = () => {
    return (
        <div className="mt-20 space-y-8 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
    )
}

export default Input;