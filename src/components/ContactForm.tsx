'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    service: string;
    details: string;
}

const DropdownIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none"
    >
        <path
            d="M6 9L12 15L18 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ContactForm = () => {
    const initialValues = {
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        service: 'Networking',
        details: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Nome e cognome è richiesto')
            .min(2, 'Nome troppo corto'),
        email: Yup.string()
            .email('Indirizzo email non valido')
            .required('Email è richiesta'),
        phone: Yup.string()
            .required('Numero di telefono è richiesto')
            .matches(/^[0-9]+$/, 'Deve contenere solo numeri'),
        subject: Yup.string()
            .required('Oggetto è richiesto'),
        service: Yup.string(),
        details: Yup.string()
            .required('Dettagli sono richiesti')
            .min(10, 'Fornisci più dettagli')
    });

    const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        console.log(values);
        // Handle form submission here
        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 1000);
    };

    return (
        <>
            <div className=" pt-[10px]">
                <section className='w-full sec-bg bg-cover bg-center bg-no-repeat rounded-[10px] py-[60px] relative overflow-hidden z-1'>
                    <div className=" absolute top-0 left-0 w-full h-full z-[-1]">

                    </div>
                    <div className='container'>
                        <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-[60px]">
                            <div className="w-full">
                                <h2 className='text-[100px] text-grad font-bold text-white leading-[100%] mb-[20px]'>Contattaci!</h2>
                                <p className='sec-parah text-[#A7A7A7]'>Lorem ipsum dolor sit amet consectetur. Nunc placerat netus id a. Quisque convallis in blandit massa mollis ipsum. Elit ut sit eget in dui integer dictumst. Massa aliquam egestas ultrices integer. Quam semper consequat vulputate.</p>
                            </div>
                            <div className="w-full">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="flex flex-col gap-[32px]">
                                            <div className="grid grid-cols-2 gap-[32px]">
                                                <div>
                                                    <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Nome e Cognome</span>
                                                    <Field
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="Inserisci il tuo nome e cognome"
                                                        className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none"
                                                    />
                                                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>

                                                <div>
                                                    <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Indirizzo Email</span>
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Inserisci il tuo indirizzo email"
                                                        className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none"
                                                    />
                                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-[32px]">
                                                <div>
                                                    <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Numero di telefono</span>
                                                    <Field
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Inserisci il tuo numero di telefono"
                                                        className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none"
                                                    />
                                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>

                                                <div>
                                                    <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Oggetto</span>
                                                    <Field
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Aggiungi oggetto"
                                                        className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none"
                                                    />
                                                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Servizio di interesse (opzionale)</span>
                                                <div className="relative">
                                                    <Field
                                                        as="select"
                                                        name="service"
                                                        className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none appearance-none"
                                                    >
                                                        <option value="Networking">Networking</option>
                                                        <option value="Development">Development</option>
                                                        <option value="Consulting">Consulting</option>
                                                    </Field>
                                                    <DropdownIcon />
                                                </div>
                                                <ErrorMessage name="service" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <span className="text-white text-[16px] font-medium dms mb-[8px] leading-[120%] block">Dettagli</span>
                                                <Field
                                                    as="textarea"
                                                    name="details"
                                                    placeholder="Forniscici i dettagli"
                                                    rows="4"
                                                    className="block dms text-[18px] leading-[100%] w-full bg-[#121212] text-white rounded-lg p-[18px] border border-1 border-[#121212] focus:border-red-500 focus:outline-none resize-none h-[120px]"
                                                />
                                                <ErrorMessage name="details" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            {/* <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Invio...' : 'Invia Messaggio'}
                      </button> */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn-lined"
                                            >
                                                {isSubmitting ? 'Invio...' : 'Invia Messaggio'}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactForm;
