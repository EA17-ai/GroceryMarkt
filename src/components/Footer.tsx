
const Footer = () => {
  return (
    <section className="bg-gray-100">
    <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
            <ul>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="/">Home</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="/products">Products</a>
                </li>
                
            </ul>
        </div>
        <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
            <ul>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="#">contact@company.com</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
            <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
    </div>
</section>
  )
}

export default Footer
