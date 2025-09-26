import { useState } from "react";
import type { contactFormType } from '../types/index';

export default function useForm () {

    const [contactForm, setContactForm] = useState<contactFormType>({
        name: "",
        email: "",
        consultationType: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [itsCopyID, setItsCopyID] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true);

        await new Promise ((resolve)=> setTimeout(resolve,2000))

        setSubmitStatus("success")
        setIsSubmitting(false)
        console.log(contactForm)

        setTimeout(()=>{
            setContactForm({name: "", email: "", consultationType: "", message: ""})
            setSubmitStatus("idle")
        },3000)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setContactForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const handleCopy = async (id: string, text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setItsCopyID(id);
            setTimeout(() => setItsCopyID(null), 2000);
        } catch (err) {
            console.error("Error copiando texto: ", err);
        }
    };

    const isValidForm = () => {
        return Object.values(contactForm).every((field) => field.trim() !== "")
    }

    return {
        contactForm,
        handleCopy,
        handleInputChange,
        handleSubmit,
        isSubmitting,
        isValidForm,
        itsCopyID,
        submitStatus,
    }
};