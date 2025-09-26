import { useState } from "react";
import type { contactFormType } from '../types/index';
import emailjs from '@emailjs/browser';

const initialForm: contactFormType = {
    name: "",
    email: "",
    consultationType: "",
    message: "",
};

    export default function useForm() {
    const [contactForm, setContactForm] = useState<contactFormType>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [itsCopyID, setItsCopyID] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!Object.values(contactForm).every(field => field.trim() !== "")) {
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        const { name, email, consultationType, message } = contactForm;

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name,
                    email,
                    subject: consultationType,
                    message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log("Email enviado correctamente:", result.text);
            setSubmitStatus("success");
            setContactForm(initialForm);

            // Reinicia submitStatus después de 3s
            setTimeout(() => setSubmitStatus("idle"), 3000);

        } catch (error) {
            console.error("Error al enviar:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setContactForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleCopy = async (id: string, text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setItsCopyID(id);
            setTimeout(() => setItsCopyID(null), 2000);
        } catch (error) {
            console.error("Error copiando texto: ", error);
        }
    };

    const isValidForm = () => {
        return Object.values(contactForm).every((field) => field.trim() !== "");
    };

    return {
        contactForm,
        handleCopy,
        handleInputChange,
        handleSubmit,
        isSubmitting,
        isValidForm,
        itsCopyID,
        submitStatus,
    };
}
