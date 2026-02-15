'use client'

interface ContactButtonProps {
    type: 'phone' | 'email' | 'whatsapp'
    value: string
    label: string
    className?: string
}

export default function ContactButton({ type, value, label, className='' }: ContactButtonProps) {
    const getHref = () => {
        switch (type) {
            case 'phone':
                return `tel:${value}`
            case 'email':
                return `mailto:${value}`
            case 'whatsapp':
                const cleanNumber = value.replace(/\D/g, '')
                return `https://wa.me/${cleanNumber}`
            default:
                return '#'
        }
    }

    const handleClick = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'contact_action', {
                contact_type: type,
                contact_value: label
            })
        }
    }

    return (
        <a
            href={getHref()}
            onClick={handleClick}
            className={`inline-flex items-center ${className}`}
            target={type === 'whatsapp' ? '_blank' : undefined}
            rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
        >
            {label}
        </a>
    )
}
