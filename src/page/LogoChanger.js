import React from 'react'

const LogoChanger = () => {
    return (
        <div>
            <h1 className='font-bold text-4xl'>Logo Preview</h1>
            <div className='flex gap-5 border border-blue-200 p-4 w-fit rounded-sm mt-5'>
                <div className='max-w-20'>
                    <img src="https://dynamic.brandcrowd.com/asset/logo/547e6711-66db-4562-bd79-408ef9528e8c/logo-search-grid-1x?logoTemplateVersion=1&v=638446843985570000" alt='logo' />
                </div>
                <div className='https://demo.braxwebdesign.com/wp-content/uploads/…04/PHOTO-2024-04-15-14-35-45-removebg-preview.png' alt="img">
                    <p className='text-2xl '>Your Logo</p>
                    <p>Headline</p>
                </div>
            </div>
            <div className='border-b-2 border-black mt-3'>
                <h1 className='text-xl font-bold'>Logo Custmization</h1>
            </div>
        </div>
    )
}

export default LogoChanger