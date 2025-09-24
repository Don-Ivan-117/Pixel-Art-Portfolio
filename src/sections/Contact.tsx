import { Button, Card, CardBody } from "@heroui/react"
import useForm from "../hooks/useForm";

const Contact = () => {

    const {
        contactForm,
        isSubmitting,
        submitStatus,
        handleSubmit,
        handleInputChange,
        isValidForm
    } = useForm();

    return (
        <section id='contact' className='py-20 px-6 lg:px-12 relative bg-[#3A6E96]'>
            <div  className='absolute inset-0 bg-[#f8f0e3] rounded-tl-[3rem] z-0'/>
            <div className='relative max-w-6xl mx-auto z-10'>
                <div className="text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6'> Work Together</h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] mx-auto mb-6" />
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        Do you want to bring your idea to life? I would love to help you shape your vision and explore how 
                        we can create something truly extraordinary together.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <Card>
                        <CardBody className='p-8'>
                            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Contact me</h3>
                            <form className='space-y-6' onSubmit={handleSubmit} >
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div className='space-y-2'>
                                        <label htmlFor="name" className='text-sm font-medium text-gray-700 '>
                                            Full Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            id='name'
                                            name='name'
                                            required
                                            value={contactForm.name}
                                            onChange={handleInputChange}
                                            className='w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white'
                                            placeholder='Your name'
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <label htmlFor="email" className='text-sm font-medium text-gray-700 '>
                                            E-mail *
                                        </label>
                                        <input 
                                            type="email" 
                                            id='email'
                                            name='email'
                                            required
                                            value={contactForm.email}
                                            onChange={handleInputChange}
                                            className='w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white'
                                            placeholder='examplemail@gmail.com'
                                        />
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                        <label htmlFor="subject" className='text-sm font-medium text-gray-700'>
                                            Subject *
                                        </label>
                                        <select
                                            id='consultationType'
                                            name='consultationType'
                                            required
                                            value={contactForm.consultationType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white"
                                        >
                                            <option value='' disabled >Choose a option</option>
                                            <option value="art-work">Custom Art Work</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="collaboration">Artistic Collaboration</option>
                                            <option value="commission">Work Commision</option>
                                            <option value="other">Other</option>
                                        </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={contactForm.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                                        placeholder="Tell me about your project, ideas, or any questions you have..."
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    className='w-full rounded-xl bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] hover:from-purple-700 hover:to-amber-700 text-white font-medium py-3 transition-all duration-200 disabled:opacity-50'
                                    isDisabled = {!isValidForm()}
                                >
                                    {
                                        isSubmitting ? (
                                            <div>
                                                <div className="flex items-center justify-center">
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                    Enviando...
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                Enviar Consulta
                                            </div>
                                        )
                                    }
                                </Button>
                                {
                                    submitStatus === "success" && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-green-800 text-sm font-medium">
                                            ¡Mensaje enviado exitosamente! Te responderé pronto.
                                            </p>
                                        </div>
                                    )
                                }
                            </form>
                        </CardBody>
                    </Card>
                    {/* Contact && Media Information */}
                    <div className='space-y-8'>
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Contact Information</h3>
                            <div className='space-y-6'> 
                                <div className='flex items-start space-x-4'>
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">E-mail</h4>
                                        <p className="text-slate-600">cruzpereziver@gmail.com</p>
                                        <p className="text-sm text-slate-500 mt-1">Reply within 24-48 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">Ubication</h4>
                                        <p className="text-slate-600">Oaxaca, México</p>
                                        <p className="text-sm text-slate-500 mt-1">Available for remote work</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#ec8cba] to-[#63a3eb] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path 
                                                fillRule="evenodd" 
                                                d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" 
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className="w-1/2">
                                        <h4 className="font-semibold tex-gray-00 mb-1">Phone Number</h4>
                                        <div className="flex justify-between p-2">
                                            <p className="text-gray-600">(+52) 951-463-9028</p>
                                            <button className="border">
                                                <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-sm text-slate-500 mt-1">Based on local timezone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Services */}
                        <div>
                            <h4 className="font-semibold text-slate-900 mb-4">Servicios Disponibles</h4>
                            <div className="grid grid-cols-2 gap-3 text-center mx-auto">
                                <span className="justify-center py-2 text-gray-700 border border-gray-300 rounded-xl">
                                Arte Digital
                                </span>
                                <span className="justify-center py-2 text-gray-700 border border-gray-300 rounded-xl">
                                Desarrollo Web
                                </span>
                                <span className="justify-center py-2 text-gray-700 border border-gray-300 rounded-xl">
                                Diseño UI/UX
                                </span>
                                <span className="justify-center py-2 text-gray-700 border border-gray-300 rounded-xl">
                                Consultoría
                                </span>
                            </div>
                        </div>
                        {/* Social Links */}
                        {/* <div>
                            <h4 className="font-semibold text-slate-900 mb-4">Follow me</h4>
                            
                            <div className='flex space-x-3'>
                            </div>  
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
