import React from 'react'

const CreateListing = () => {
    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
            <form className='flex flex-col sm:flex-row'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input type="text" placeholder='Name' className='border p-3 rounded-lg ' id='name' maxLength='62' minLength='10' required />
                    <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id="description" />
                    <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' minLength="10" maxLength="62" required />
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="sale" className='w-5'  />
                            <span>Sell</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="rent" className='w-5'  />
                            <span>Rent</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="parking" className='w-5'  />
                            <span>Parking Spot</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="furnished" className='w-5'  />
                            <span>Furnished</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="other" className='w-5'  />
                            <span>Other</span>
                        </div>
                    </div>
                    <div className='flex gap-6 flex-wrap'> 
                        <div className='flex  items-center gap-2'>
                        <input type="number" id="bedroom" min="1" max="10" className='p-3 border border-gray-300 rounded-lg' required/>
                        <p>Beds</p>
                        </div>
                        <div className='flex  items-center gap-2'>
                        <input type="number" id="bath" min="1" max="10" className='p-3 border border-gray-300 rounded-lg' required/>
                        <p>Baths</p>
                        </div>
                        <div className='flex  items-center gap-2'>
                        <input type="number" id="regularprice" min="1" max="10" className='p-3 border border-gray-300 rounded-lg' required/>

                        <div  className='flex flex-col items-center'>
                        <p>Regular Price</p>
                        <span className='text-xs'>dddsds</span>
                        </div>

                        </div>
                        <div className='flex  items-center gap-2'>
                        <input type="number" id="discountprice" min="1" max="10" className='p-3 border border-gray-300 rounded-lg' required/>

                        <div className='flex flex-col items-center'>
                        <p>Discount Price</p>
                        <span className='text-xs'>dddsds</span>

                        </div>

                        </div>
                    </div>
                </div>
            </form>

        </main>
    )
}

export default CreateListing