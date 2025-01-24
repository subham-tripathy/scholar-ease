const validEmailExtensions = [
    'gmail',       // Google's email service
    'outlook',     // Microsoft's email service
    'yahoo',       // Yahoo's email service
    'hotmail',     // Older Microsoft email service, now part of Outlook
    'aol',         // AOL's email service
    'icloud',      // Apple's email service
    'protonmail',  // Secure email service with end-to-end encryption
    'zoho',        // Zoho's email service
    'yandex',      // Russian email service
    'mail',        // A generic email service
    'gmx',         // A free email service
    'live',        // Microsoft's email service
    'msn',         // Microsoft's email service
    'fastmail',    // Paid email service with a focus on privacy
    'hushmail',    // Secure email service
    'tutanota',    // Secure email service with end-to-end encryption
    'disroot',     // Privacy-focused email service
    'riseup',      // Privacy-focused email service
];

export function validateEmail(email) {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    // Extract the domain extension from the email
    const domain = email.split('@')[1];
    const extension = domain.split('.')[0];

    // Check if the extension is in the list of valid extensions
    return validEmailExtensions.includes(extension);
}




export function validateIndianPhoneNumber(phone) {
    // Sanitize: Remove all non-digit characters except '+' and leading '0'
    const sanitized = phone.replace(/[^\d+]/g, '');
    
    // Regex to match valid Indian phone numbers
    const phnoRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    
    // Check if sanitized input matches the regex
    return phnoRegex.test(sanitized);
}